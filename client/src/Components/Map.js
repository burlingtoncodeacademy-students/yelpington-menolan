//importing components
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
//making the marker icon
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
//the map component to put on pages
const Map = () => {
  const [center, setCenter] = useState([44.4759, -73.2121]);
  //the map
  return (
    <div id="mapContainer">
      <MapContainer center={center} zoom={12} style={{ height: "60vh" }}>
        {/* map tiles style */}
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        {/* the map marker */}
        <Marker position={center} icon={DefaultIcon}>
          {/* map popup */}
          <Popup>Burlington, VT</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
// exporting the map component
export default Map;
