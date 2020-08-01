import React, { Component } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Container from 'react-bootstrap/Container';
import AuthActionTypes from '../../stores/auth/Actions';

import Header from '../../components/Header/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header loggedIn />
        <Container className="mt-5">
          <h3>Congrats You are now LoggedIn with token {this.props.token}</h3>
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  login: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
  token: PropTypes.string,
};

const mapStateToProps = (state) => ({
  error: state.authentication.errorMessage,
  loading: state.authentication.loadingUserInfo,
  token: state.authentication.token,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (data) => dispatch(AuthActionTypes.logoutUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
