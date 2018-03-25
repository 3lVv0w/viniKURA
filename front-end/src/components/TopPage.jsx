import React from 'react';
import styled from 'styled-components';

import { withRouter } from 'react-router';

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
  height: 100px;
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

const TopPageComponent = ({ history }) => (
  <Container>
    <H1>Please scan a box to begin</H1>
    <Img src="https://www.sageintelligence.com/wp-content/uploads/2017/08/Image-1-3.png" />
    <Input onChange={() => setTimeout(() => history.push('/items'), 500)} type="text" placeholder="Scan a barcode..."/>
  </Container>
);

const TopPage = withRouter(TopPageComponent);

export default TopPage;
