import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '35vh',
  height: '40vh',
};

const defaultCenter = {
  lat: -3.745,
  lng: -38.523,
};

function Map({ address }) {
  const [location, setLocation] = React.useState(defaultCenter);
  const [zoom, setZoom] = React.useState(15); // Set initial zoom level

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC5joR8QlpRgdJEgy3R37DuyRxlKTjZlOo', // Replace with your actual API key
  });

  React.useEffect(() => {
    if (isLoaded) {
      // Geocode the address to get the latitude and longitude
      const geocodeAddress = async () => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK') {
            setLocation({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng(),
            });
            setZoom(16); // Zoom in more when the location is found
          } else {
            console.error(
              'Geocode was not successful for the following reason: ' + status
            );
          }
        });
      };

      geocodeAddress();
    }
  }, [address, isLoaded]);

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading Maps...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={zoom} // Use the zoom state
    >
      <Marker position={location} />{' '}
      {/* Place a pin at the geocoded location */}
    </GoogleMap>
  );
}

export default Map;
