import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const H1 = styled.h1`
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-size: 4rem;
  font-weight: 700;
`;

const Img = styled.img`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

const Input = styled.input`
  height: 50px;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
  width: 100%;
  margin: 1rem auto;
  display: flex;
  font-size: 1.5rem;
  font-weight: 300;
  color: #909090;

  &: focus {
    border: 1px solid #909090;
  }
`;

const ConfirmationPage = ({ history }) => (
  <Container>
    <H1>Items Purchased</H1>
    <Img src="http://i0.kym-cdn.com/entries/icons/mobile/000/000/745/success.jpg" />
  </Container>
);

export default ConfirmationPage;
