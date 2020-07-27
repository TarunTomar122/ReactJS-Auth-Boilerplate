import React, { Component } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/Header';
import AuthActionTypes from '../../stores/auth/Actions';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      userName: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { register } = this.props;
    register({ email: this.state.email, password: this.state.password, userName: this.state.userName });
    this.setState({ email: null, password: null, userName: null });
  }

  render() {
    return (
      <div>
        <Header loggedIn={false} />
        <Container className="mt-5">
          <Form onSubmit={this.handleSubmit}>

            <Form.Group controlId="formBasicText">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter UserName" value={this.state.userName} onChange={(event) => this.setState({ userName: event.target.value })} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
            </Form.Group>

            <Button variant="primary" type="submit">Register</Button>

          </Form>
        </Container>
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  error: state.authentication.errorMessage,
  loading: state.authentication.loadingUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(AuthActionTypes.registerUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
