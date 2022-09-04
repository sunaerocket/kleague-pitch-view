import React from 'react';
import styled from 'styled-components';

interface LocationLayoutProps {
  club: string;
  stadium: string;
  address: string;
  icon: string;
}

function LocationLayout({ club, stadium, address, icon }: LocationLayoutProps) {
  return (
    <Container>
      <Header>
        <Icon src={icon} />
        <ClubName>{club}</ClubName>
      </Header>
      <Body>
        <StadiumName>{stadium}</StadiumName>
        <Address>{address}</Address>
      </Body>
    </Container>
  );
}

export default LocationLayout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const ClubName = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

const Body = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const StadiumName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
const Address = styled.span`
  font-size: 12px;
  font-weight: 400;
`;
