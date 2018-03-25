import React from 'react';
import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #ffcc66;
  padding: 5px
  margin: 0px 5px 0px 5px;
  border-radius: 10px;
`;
const Label = styled.div`
  display: inline-block;
`;
const CancelButton = styled.div`
  padding: 2px;
  display: inline-block;
  cursor: pointer;
`;

const Chip = ({ label, onCancel }) => (
  <Container>
    <Label>{label}</Label>
    <CancelButton onClick={() => onCancel()}>
      <FontAwesomeIcon icon={faTimes} />
    </CancelButton>
  </Container>
);
export default Chip;
