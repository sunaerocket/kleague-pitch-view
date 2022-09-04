import React from 'react';
import styled from 'styled-components';
import { Clubs } from '../constants/clubs';
import Card from './Card';
import LocationLayout from '../layouts/LocationLayout';

interface LocationsProps {
  clubs: Clubs;
}

function Locations({ clubs }: LocationsProps) {
  return (
    <Container>
      {clubs.map(({ id, club, stadium, icon }) => (
        <Card key={id}>
          <LocationLayout
            club={club}
            stadium={stadium}
            icon={icon}
            address="dummy"
          />
        </Card>
      ))}
    </Container>
  );
}

export default Locations;

const Container = styled.section`
  width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #000;
`;
