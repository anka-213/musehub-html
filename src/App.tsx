import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { graphql } from "./gql/gql";

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

const GET_MUSESAMPLER = graphql(/* GraphQL */ `
  query MuseSampler {
    application(id: "musesampler") {
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

function DisplayLocations() {
  // const { _loading, _error, _data } = useQuery(GET_MUSESAMPLER);
  const { loading, error, data } = useQuery(GET_MUSESAMPLER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>Got no data</p>;

  return (
    <>
      {appTypes.map((platform) => {
        let platData = data?.application?.[platform]?.latestVersion;
        let platformName = platform.replace("App", "");
        if (!platData) return <p>Got no data</p>;
        let { id, version, buildFileMusedownloadUrl } = platData;
        if (!platData) return <p>Got no data</p>;
        return (
          <div>
            <h3>{platformName}</h3>
            <a href={buildFileMusedownloadUrl ?? id} className="App-link">
              muse-sampler-{version}
            </a>
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
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Download musesampler</h2>
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
        <DisplayLocations />
      </header>
    </div>
  );
}

export default App;
