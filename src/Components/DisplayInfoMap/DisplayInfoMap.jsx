import React from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerIcon from "../../images/icon-location.svg";
import "leaflet/dist/leaflet.css";
import "./DisplayInfoMap.scss";

function GetIcon(iconSize) {
  return L.icon({
    iconUrl: MarkerIcon,
    iconSize: [iconSize],
  });
}

const DisplayInfoMap = (props) => {
  const position = [props.latitude, props.longitude];

  return (
    <div className="map_container">
      <MapContainer
        center={position}
        zoom={300}
        style={{ width: "100vw", height: "70vh" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/outdoor/256/{z}/{x}/{y}.png?key=Rg7ubtvKIpsuAAm1AsLT"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />

        <Marker position={position} icon={GetIcon(20)}>
          <Popup>Location of the marker.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default DisplayInfoMap;
