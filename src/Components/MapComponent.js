import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapComponent = ({ selectedProfile }) => {
  if (!selectedProfile) return <div>Select a profile to see the location</div>;

  return (
    <MapContainer center={[selectedProfile.lat, selectedProfile.lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[selectedProfile.lat, selectedProfile.lng]}>
        <Popup>
          {selectedProfile.name} <br /> {selectedProfile.address}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
