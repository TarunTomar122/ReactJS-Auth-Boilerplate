import React, { Component } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import AuthActionTypes from '../../stores/auth/Actions';

import Container from 'react-bootstrap/Container';
import Header from '../../components/Header/Header';

class Home extends Component {
  render() {
    return (
      <div>
        <Header loggedIn={true} />
        <Container className="mt-5">
          <h3>Congrats You are now LoggedIn</h3>
        </Container>
      </div>
    );
  }
}

Home.propTypes = {
  login: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = (state) => ({
  error: state.authentication.errorMessage,
  loading: state.authentication.loadingUserInfo,
});

const mapDispatchToProps = (dispatch) => ({
  logout: (data) => dispatch(AuthActionTypes.logoutUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
