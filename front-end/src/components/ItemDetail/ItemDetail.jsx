import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getItem } from 'reducers/items';
import {
  itemSelected,
  itemUnselected,
} from 'actions';
import styled from 'styled-components';

import ValuationForm from './ValuationForm';
import Gallery from './Gallery';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';

const Container = styled.div`
  text-align: center;
`;
const TagList = styled.div`
  display: flex;
  justify-content: center;
`;
const Tag = styled.span`
  background-color: #ffcc66;
  color: #fff;
  border-radius: 50px;
  padding: 10px 20px;
  margin: 1rem 1rem 1rem 0;
  font-size: 1.3rem;
`;
const Controls = styled.div`
  padding-bottom: 1rem;
  background: #ffcc66;
`;
const LoveButton = styled.div`
  font-size: 6rem;
  padding: 1rem;
  color: ${props => (props.active ? 'red' : 'black')}
`;

const ItemDetailComponent = ({
  itemId, images, tags, price, isSelected,
  onSelect, onUnselect,
}) => {
  console.log(price);
  return (
    <Container>
      <TagList>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagList>
      <Gallery images={images} />
      <Controls>
        <LoveButton
          active={isSelected}
          onClick={isSelected ? (() => onUnselect(itemId)) : undefined}
        >
          <FontAwesomeIcon icon={faHeart} />
        </LoveButton>
        <ValuationForm
          price={price}
          disabled={isSelected}
          onSubmit={value => onSelect(itemId, value)}
        />
      </Controls>
    </Container>
  );
};
const mapStateToProps = (state, ownProps) => {
  const { itemId } = ownProps.match.params;
  return {
    itemId,
    ...getItem(state.items, itemId),
  };
};
const mapDispatchToProps = {
  onSelect: itemSelected,
  onUnselect: itemUnselected,
};
const ItemDetail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemDetailComponent);
export default ItemDetail;

ItemDetailComponent.propTypes = {
  itemId: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.string,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  onUnselect: PropTypes.func.isRequired,
  // match: PropTypes.shape({
  //   params: PropTypes.shape({
  //     itemId: PropTypes.string.isRequired,
  //   }),
  // }).isRequired,
};
ItemDetailComponent.defaultProps = {
  price: '',
  isSelected: false,
  tags: [],
};
