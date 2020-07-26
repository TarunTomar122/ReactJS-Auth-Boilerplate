import React, { Component } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/Header';
import AuthActionTypes from '../../stores/auth/Actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { login } = this.props;
    login({ email: this.state.email, password: this.state.password });
    this.setState({ email: null, password: null });
  }

  render() {
    console.log(this.props.error);

    return (
      <div>
        <Header />
        <Container className="mt-5">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
            </Form.Group>

            <Button variant="primary" type="submit">Login</Button>

          </Form>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  error: state.authentication.errorMessage,
  loading: state.authentication.loadingUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(AuthActionTypes.loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
