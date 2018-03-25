import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  getItemIds,
  getItemIdsByFilter,
} from 'reducers/items';
import Item from './Item';
import { loadItems } from 'actions';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2px;
`;

const ItemListComponent = ({
  itemIds, visibleItemIds,
}) => (
  <Container>
    {visibleItemIds.map(id => (
      <Item
        key={id}
        itemId={id}
      />
    ))}
  </Container>
);
const mapStateToProps = state => ({
  itemIds: getItemIds(state.items),
  visibleItemIds: getItemIdsByFilter(state.items, state.filters),
});
const mapDispatchToProps = {
  handleLoad: loadItems,
};
const ItemList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemListComponent);

export default ItemList;

ItemListComponent.propTypes = {
  visibleItemIds: PropTypes.arrayOf(PropTypes.string),
  itemIds: PropTypes.arrayOf(PropTypes.string),
};
ItemListComponent.defaultProps = {
  visibleItemIds: [],
  itemIds: [],
};
