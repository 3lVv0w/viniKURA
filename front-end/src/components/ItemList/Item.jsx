import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getItem } from 'reducers/items';

import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

import img1 from 'img/1_1.jpg';

const NavItem = styled(Link)`
  padding: 0 5px 0 5px;
  display: inline-block;
  text-decoration: none;
  color: black;
`;
const ImageContainer = styled.div`
  position: relative;
  margin: 15px;
  overflow: hidden;
  outline: ${props => (props.isSelected ? 'solid #ccffee 10px' : '')};
`;
const Image = styled.img`
  height: 20rem;
  width: 20rem;
  object-fit: cover;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  &: hover {
    transform: scale(1.02);
  }
`;
const Info = styled.div`
  bottom: 0px;
  left: 0px;
  position: absolute;
  opacity: 0.5;
  background: black;
  height: 4.5rem;
  width: 100%;
`;
const LoveIcon = styled.span`
  position: absolute;
  left: 5px;
  bottom: 5px;
  font-size: 3.5rem;
  color: red;
`;
const Price = styled.span`
  position: absolute;
  font-size: 2rem;

  color: white;
  right: 5px;
  bottom: 5px;
`;

const ItemComponent = ({
  itemId, images, tags, price, isSelected,
}) => {
  const imageUrls = images.map(image => (
    'https://d6415d7f.ngrok.io'+image
  ));
  const info = isSelected && (
    <React.Fragment>
      <Info />
      <LoveIcon>
        <FontAwesomeIcon icon={faHeart} />
      </LoveIcon>
      <Price>¥{price}</Price>
    </React.Fragment>
  );
  return (
    <NavItem to={`/item/${itemId}`}>
      <ImageContainer isSelected={isSelected} >
        <Image src={imageUrls[0]} />
        {info}
      </ImageContainer>
    </NavItem>
  );
}
const mapStateToProps = (state, ownProps) => ({
  ...getItem(state.items, ownProps.itemId),
});
const mapDispatchToProps = {
};
const Item = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemComponent);

export default Item;

ItemComponent.propTypes = {
  itemId: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.string,
  isSelected: PropTypes.bool,
};
ItemComponent.defaultProps = {
  isSelected: false,
  price: '',
};
