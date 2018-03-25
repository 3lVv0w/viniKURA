import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  filterAdded,
  filterRemoved,
} from 'actions';

import Chip from './Chip';

const NavItem = styled(Link)`
  padding: 0 5px 0 5px;
  display: inline-block;
  text-decoration: none;
  color: white;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 20px 5px 20px;
`;
const FilterList = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Form = styled.form`
`;
const Input = styled.input`
  display: inline-block;
  padding: 5px;
  margin: 2px;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
  font-size: 1rem;
  font-weight: 300;
  color: #909090;

  &: focus {
    border: 1px solid #909090;
  }
`;
const AddButton = styled.button`
  display: block;
  padding: 5px;
  margin: 2px;
  text-align: center;
  font-size: 1rem;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 10px;

  &: hover {
    cursor: pointer;
    background-color: #ccffee;
  }
`;
const SubmitButton = styled.button`
  height: 2.5rem;
  margin: 2px;
  text-align: center;
  font-size: 1.5rem;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 10px;

  &: hover {
    cursor: pointer;
    background-color: #ccffee;
  }
`;

class FilterControlsComponent extends React.Component {
  state = {
    value: '',
  };
  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddFilter(this.state.value);
    this.setState({
      value: '',
    });
  }
  handleRemove(filterName) {
    this.props.onRemoveFilter(filterName);
  }
  handleChange(e) {
    const { value } = e.target;
    this.setState({
      value,
    });
  }

  render() {
    const { filters } = this.props;
    return (
      <Container>
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Wrapper>
            <Input
              type="text"
              value={this.state.value}
              onChange={e => this.handleChange(e)}
              placeholder="Apply a filter..."
            />
            <FilterList>
              {filters.map(filterName => (
                <Chip
                  key={filterName}
                  label={filterName}
                  onCancel={() => this.handleRemove(filterName)}
                />
              ))}
            </FilterList>
          </Wrapper>
          <AddButton type="submit">ADD</AddButton>
        </Form>
        <NavItem to='/success'>
          <SubmitButton>DONE</SubmitButton>
        </NavItem>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  filters: state.filters,
});
const mapDispatchToProps = {
  onAddFilter: filterAdded,
  onRemoveFilter: filterRemoved,
};
const FilterControls = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterControlsComponent);

export default FilterControls;

FilterControlsComponent.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onAddFilter: PropTypes.func.isRequired,
  onRemoveFilter: PropTypes.func.isRequired,
};
FilterControlsComponent.defaultProps = {
  filters: [],
};
