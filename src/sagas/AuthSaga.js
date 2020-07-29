/* eslint-disable no-unused-vars */
/* eslint-disable require-yield */
import { put, call } from 'redux-saga/effects';
import AuthActionTypes from '../stores/auth/Actions';

function* injectToken(token) {
  try {
    // Try to Set Token to header and save it as cookie
    // set the token in the state value of auth actions
    // Move To HomeScreen if successful
  } catch ({ message = 'Snap:(' }) {
    // Set the Error message and call revoke Token
  }
}

function* revokeToken() {
  // Remove the token from header and delete the cookie
  // remove the token from the state also
  // Navigate back to Login
}

export function* fetchUser() {
  try {
    yield put(AuthActionTypes.loadingUserInfo());
    // Try to find the token in Cookie
    //      if found then go ahead and call injectToken
    // If not found then call revoke Token
  } catch ({ message = 'Snap:(' }) {
    yield call(revokeToken);
    yield put(AuthActionTypes.error(message));
  }
}

export function* registerUser({ data }) {
  try {
    // set auth action type of user loading info to True
    // Make API request with data to register and get the token
    // call inject token with the newly found token
  } catch ({ message = 'Snap:(' }) {
    yield put(AuthActionTypes.error(message));
  }
}

export function* loginUser({ data }) {
  try {
    yield put(AuthActionTypes.loadingUserInfo());
    // Make API request with data to login and get the token
    // call inject token with the newly found token
  } catch ({ message = 'Snap:(' }) {
    yield put(AuthActionTypes.error(message));
  }
}

export function* logoutUser() {
  yield put(AuthActionTypes.loadingUserInfo());
  yield call(revokeToken);
}
