import React, { Component } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import {client} from '../../services/api/index';
import AuthActionTypes from '../../stores/auth/Actions';
import Spinner from 'react-bootstrap/Spinner';

import Header from '../../components/Header/Header';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
        };
    }

    componentDidMount() {
        client.get('/protected/profile').then(res => {
            const {name, email} = res.data[0];
            this.setState({ name, email });
        }).catch(er => {
            console.log(er);
        });
    }

    render() {
        const {  error, loading } = this.props;
        return (
            <div>
                <Header loggedIn />
                {loading ? <div className="text-center"><Spinner animation="grow" /></div> : null}
                {error ? <div className="text-center"><p>{error}</p></div> : undefined}
                <Container className="mt-5">
                    <h2>Name: {this.state.name}</h2>
                    <h2>Email: {this.state.email}</h2>
                    <Button onClick={this.props.logout}>Logout</Button>
                </Container>
            </div>
        );
    }
}

Profile.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
