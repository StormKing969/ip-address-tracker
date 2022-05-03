import React, { useState } from "react";
import Header from "../Header/Header";
import DisplayInfoCard from "../DisplayInfoCard/DisplayInfoCard";
import DisplayInfoMap from "../DisplayInfoMap/DisplayInfoMap";
import "./App.scss";

function App() {
  const [displayIP, setDisplayIP] = useState(null);

  const data = (location) => {
    setDisplayIP(location);
  };

  return (
    <div className="App">
      <Header UserEntry={data} />
      {displayIP !== null ? (
        <>
          <DisplayInfoCard
            key={displayIP.ip}
            ip={displayIP.ip}
            city={displayIP.city}
            region={displayIP.region_code}
            country={displayIP.country_code}
            postal={displayIP.postal}
            timezone={displayIP.utc_offset}
            isp={displayIP.org}
            latitude={displayIP.latitude}
            longitude={displayIP.longitude}
          />
          <DisplayInfoMap
            key={displayIP.latitude + displayIP.longitude}
            latitude={displayIP.latitude}
            longitude={displayIP.longitude}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
