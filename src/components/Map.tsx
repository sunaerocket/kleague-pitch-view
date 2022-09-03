import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const centerCoordinates = {
  lat: 37.410105,
  lng: 127.121215,
};

function Map() {
  return (
    <Container>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerCoordinates}
          zoom={10}
        >
          {/* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
      </LoadScript>
    </Container>
  );
}

export default React.memo(Map);

const Container = styled.section`
  flex-grow: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;
