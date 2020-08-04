import React, { Component } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../../components/Header/Header';
import AuthActionTypes from '../../stores/auth/Actions';

import { Redirect } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
    };
  }

  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { login } = this.props;
    login({ email: this.state.email, password: this.state.password });
    this.setState({ email: null, password: null });
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
          {error ? <div className="text-center"><p>{error}</p></div> : undefined}
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
  token: PropTypes.string
};

const mapStateToProps = (state) => ({
  token: state.authentication.token,
  error: state.authentication.errorMessage,
  loading: state.authentication.loadingUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(AuthActionTypes.loginUser(data)),
  fetchUser: () => dispatch(AuthActionTypes.fetchUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
