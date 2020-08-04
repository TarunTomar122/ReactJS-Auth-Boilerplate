import React, { Component } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/Header';
import Spinner from 'react-bootstrap/Spinner';
import AuthActionTypes from '../../stores/auth/Actions';

import { Redirect } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      name: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { register } = this.props;
    register({ email: this.state.email, password: this.state.password, name: this.state.name });
    this.setState({ email: null, password: null, name: null });
  }

  render() {

    const { token, error, loading } = this.props;
    if (token) {
      return (
        <Redirect to={{ pathname: '/home' }} />
      );
    }

    return (
      <div>
        <Header loggedIn={false} />
        <Container className="mt-5">
        {loading ? <div className="text-center"><Spinner animation="grow" /></div> : null}
        {error ? <div className="text-center"><p>{error}</p></div>: undefined}
          <Form onSubmit={this.handleSubmit}>

            <Form.Group controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={this.state.name} onChange={(event) => this.setState({ name: event.target.value })} />
              <Form.Text className="text-muted">Name must contain atleast 6 characters</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
              <Form.Text className="text-muted">Password must contain atleast 6 characters</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">Register</Button>

          </Form>
          {error ? <h4>{error}</h4> : undefined }
        </Container>
      </div>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
  token: PropTypes.string,
};

const mapStateToProps = (state) => ({
  token: state.authentication.token,
  error: state.authentication.errorMessage,
  loading: state.authentication.loadingUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
  register: (data) => dispatch(AuthActionTypes.registerUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
