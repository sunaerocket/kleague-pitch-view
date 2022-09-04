import React from 'react';
import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
}

function Card({ children }: CardProps) {
  return <Container>{children}</Container>;
}

export default Card;

const Container = styled.article`
  padding: 8px;
  margin-bottom: 2px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  -webkit-box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  -moz-box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
