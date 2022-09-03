import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import styled from 'styled-components';
import { Clubs } from '../constants/clubs';

interface MapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
  clubs: Clubs;
}

function Map({ zoom, center, clubs }: MapProps) {
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <Container>
      <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
        >
          {clubs.map(({ id, coordinates, icon }) => (
            <MarkerF key={id} position={coordinates} icon={icon} />
          ))}
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
