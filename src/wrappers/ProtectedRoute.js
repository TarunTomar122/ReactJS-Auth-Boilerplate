import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = this.props.token;

    return isAuthenticated ? (
      <Component />
    ) : (
        <Redirect to={{ pathname: '/login' }} />
      );
  }
}

ProtectedRoute.propTypes = {
  token: PropTypes.string,
};

const mapStateToProps = (state) => ({
  token: state.authentication.token,
});

const mapDispatchToProps = (dispatch) => ({
  // logout: (data) => dispatch(AuthActionTypes.logoutUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute);
