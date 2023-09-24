import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { gql, useQuery } from "@apollo/client";

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

// const GET_MUSESAMPLER = gql`
//   {
//     application(id: "musesampler") {
//       macApp {
//         latestVersion {
//           id
//           versionFull
//           buildFileMusedownloadUrl
//         }
//       }
//       windowsApp {
//         latestVersion {
//           id
//           versionFull
//           buildFileMusedownloadUrl
//         }
//       }
//       linuxApp {
//         latestVersion {
//           id
//           versionFull
//           buildFileMusedownloadUrl
//         }
//       }
//     }
//   }
// `;

const GET_LOCATIONS = gql`
  query Metrics {
    metrics_allTimeDownloadsAndSavingsMetrics {
      downloadedSize
      bandwidthCostSavings
    }
  }
`;

interface Locations {
  id: string;
  name: string;
  description: string;
  photo: string;
}

interface MyQuery {
  locations: [Locations];
}

function DisplayLocations() {
  // const { _loading, _error, _data } = useQuery(GET_MUSESAMPLER);
  const { loading, error, data } = useQuery<MyQuery>(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (!data) return <p>Got no data</p>;

  return (
    <>
      {data.locations.map(({ id, name, description, photo }) => (
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
      ))}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and do save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <DisplayLocations />
      </header>
    </div>
  );
}

export default App;
