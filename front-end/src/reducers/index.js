import { combineReducers } from 'redux';
import items from './items';
import boxes from './boxes';
import filters from './filters';

export default combineReducers({
  items,
  boxes,
  filters,
});
