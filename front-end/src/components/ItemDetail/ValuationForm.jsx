import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withRouter } from 'react-router';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 8rem;
  border-radius: 10px;
  border: 1px solid #d8d8d8;
  font-size: 1.5rem;
  font-weight: 300;
  color: #909090;

  :disabled {
    background: #ccffee;
  }
  &: focus {
    border: 1px solid #909090;
  }
`;
const SubmitButton = styled.button`
  margin-left: 10px;
  text-align: center;
  font-size: 1.3rem;
  background: #fff;
  border: 1px solid #f1f1f1;
  border-radius: 10px;

  &: hover {
    cursor: pointer;
    background: #ccffee;
  }
`;
const InputLabel = styled.label`
  font-size: 1.5rem;
`;

class ValuationFormComponent extends React.Component {
  state = {
    value: '',
  };
  componentWillMount() {
    this.setState({
      value: this.props.price,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    setTimeout(() => this.props.history.push('/items'), 600);
  }
  handleChange(e) {
    const { value } = e.target;
    this.setState({
      value,
    });
  }
  render() {
    const { disabled, history } = this.props;
    return (
      <Form onSubmit={e => this.handleSubmit(e)}>
        <InputLabel>¥</InputLabel>
        <Input
          autoFocus
          type="text"
          value={this.state.value}
          onChange={e => this.handleChange(e)}
          placeholder="your price"
          disabled={disabled}
        />
        <SubmitButton type="submit">LIKE</SubmitButton>
      </Form>
    );
  }
}

const ValuationForm = withRouter(ValuationFormComponent);

export default ValuationForm;

ValuationFormComponent.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  price: PropTypes.string,
  history: PropTypes.object.isRequired,
};
ValuationFormComponent.defaultProps = {
  price: '',
};
