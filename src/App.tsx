import React from 'react';
import styled from 'styled-components';
import Map from './components/Map';
import Locations from './components/Locations';
import { BASE_COORDINATES, BASE_ZOOM } from './constants/config';
import { CLUBS } from './constants/clubs';

function App() {
  return (
    <Container>
      <Map center={BASE_COORDINATES} zoom={BASE_ZOOM} clubs={CLUBS} />
      <Locations clubs={CLUBS} />
    </Container>
  );
}

export default App;

const Container = styled.main`
  max-width: 1024px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`;
