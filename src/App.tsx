import React from 'react';
import styled from 'styled-components';
import Map from './components/Map';

function App() {
  return (
    <Container>
      <Map />
      <LocationListContainer>장소 목록영역</LocationListContainer>
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
const LocationListContainer = styled.section`
  width: 240px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
`;
