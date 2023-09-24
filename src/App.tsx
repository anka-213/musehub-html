import React from "react";
// import logo from "./logo.svg";
import magnetIcon from "./icon-magnet.gif";
import "./App.css";
import { useQuery } from "@apollo/client";
import { graphql } from "./gql/gql";
import * as parseTorrent from "parse-torrent";
import { filesize } from "filesize";
import { ForkMe } from "fork-me-corner";

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;

const GET_MUSESAMPLER = graphql(`
  query MuseSampler($name: String!) {
    application(id: $name) {
      imageUrl
      macApp {
        latestVersion {
          id
          version
          buildFileMusedownloadUrl
        }
      }
      windowsApp {
        latestVersion {
          id
          version
          buildFileMusedownloadUrl
        }
      }
      linuxApp {
        latestVersion {
          id
          version
          buildFileMusedownloadUrl
        }
      }
    }
  }
`);

const GET_SOUNDFONTS = graphql(`
  query Soundfonts {
    libraries_search(
      filter: {}
      orderBy: { field: title, direction: asc }
      paging: { offset: 0, limit: 10 }
    ) {
      items {
        name
        logoImageUrl
        latestReleasedVersion {
          version
          downloadSize
          overview
          packageMusedownloadUrl
        }
      }
    }
  }
`);

// const GET_LOCATIONS = graphql(/* GraphQL */ `
//   query Metrics {
//     metrics_allTimeDownloadsAndSavingsMetrics {
//       downloadedSize
//       bandwidthCostSavings
//     }
//   }
// `);

const appTypes: ("linuxApp" | "macApp" | "windowsApp")[] = [
  "linuxApp",
  "macApp",
  "windowsApp",
];

const convertFiletoBlobAndDownload = async (file: string, name: string) => {
  const blob = await fetch(file).then((r) => r.blob());
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.style.display = "none";
  a.href = url;
  a.download = name; // add custom extension here
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  // Remove "a" tag from the body
  a.remove();
};

const parseTorrentAsync = (blob: Blob) =>
  new Promise<parseTorrent.Instance>((ok, fail) =>
    parseTorrent.remote(blob, (err, result) => {
      if (err != null || !result) fail(err);
      else ok(result);
    })
  );

async function makeMagnet(downloadUrl: string) {
  const blob = await fetch(downloadUrl, { cache: "force-cache" }).then((r) =>
    r.blob()
  );
  const torrent = await parseTorrentAsync(blob);
  console.log(torrent);
  const magnet = parseTorrent.toMagnetURI(torrent);
  console.log(magnet);
  window.location.href = magnet;
}
function DisplaySoundfonts() {
  const { loading, error, data } = useQuery(GET_SOUNDFONTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>Got no data</p>;

  return (
    <div>
      <h2>Download soundfonts</h2>
      {data.libraries_search.items.map((item) => {
        if (!item?.latestReleasedVersion?.packageMusedownloadUrl)
          return <h3>{item.name}</h3>;
        const latest = item.latestReleasedVersion;
        const filename = `${
          item?.name?.replace(" ", "-")?.toLocaleLowerCase() ?? "unknown"
        }-${latest.version}.torrent`;
        const humanSize = filesize(latest.downloadSize ?? 0);
        return (
          <div>
            <h3>
              <img src={item?.logoImageUrl ?? ""} alt="logo" width={100} />
              {item.name}
            </h3>
            <p>
              <ShowTorrent
                filename={filename}
                downloadUrl={
                  item?.latestReleasedVersion?.packageMusedownloadUrl ??
                  "no url"
                }
              />
              {humanSize}
            </p>
            <div
              style={{
                maxWidth: "700px",
                textAlign: "justify",
                hyphens: "auto",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <small>{item?.latestReleasedVersion?.overview}</small>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const ShowTorrent = ({
  downloadUrl,
  filename,
}: {
  downloadUrl: string;
  filename: string;
}) => (
  <>
    <a
      href={downloadUrl}
      download={filename}
      onClick={(e) => {
        e.preventDefault();
        convertFiletoBlobAndDownload(downloadUrl, filename);
      }}
      className="App-link"
    >
      {filename}
    </a>

    <input
      style={{
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
      type="image"
      alt="Magnet link"
      src={magnetIcon}
      onClick={(e) => {
        e.preventDefault();
        makeMagnet(downloadUrl);
      }}
      className="App-link"
    ></input>
  </>
);

function DisplayApp({ appName }: { appName: string }) {
  // const { _loading, _error, _data } = useQuery(GET_MUSESAMPLER);
  const { loading, error, data } = useQuery(GET_MUSESAMPLER, {
    variables: { name: appName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>Got no data</p>;

  return (
    <div>
      <img src={data.application?.imageUrl ?? ""} alt="logo" width={100} />
      <h2>Download {appName}</h2>
      <div>
        {appTypes.map((platform) => {
          let platData = data?.application?.[platform]?.latestVersion;
          let platformName = platform.replace("App", "");
          if (!platData?.buildFileMusedownloadUrl)
            return (
              <div key={platform}>
                <b>{platformName}: </b>No torrent available for this platform
              </div>
            );
          let { version, buildFileMusedownloadUrl } = platData;
          const downloadUrl = buildFileMusedownloadUrl;
          const filename = `${appName}-${platformName}-${version}.torrent`;

          return (
            <div key={platform}>
              <b>{platformName}: </b>
              <ShowTorrent downloadUrl={downloadUrl} filename={filename} />
            </div>
          );
        })}
        {/* {data.application.map(({ id, name, description, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img
            width="400"
            height="250"
            alt="location-reference"
            src={`${photo}`}
          />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))} */}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ForkMe repo="https://github.com/anka-213/musehub-html" />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.tsx</code> and do save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>Download MuseSounds without MuseHub</h1>
        <p>
          This is a collection of links to the official torrent files for
          downloading the MuseSound soundfonts and the musesampler that's
          required to use them.
        </p>
        <DisplayApp appName="musesampler" />
        <br />
        <DisplayApp appName="musescore" />
        <DisplaySoundfonts />
      </header>
    </div>
  );
}

export default App;
