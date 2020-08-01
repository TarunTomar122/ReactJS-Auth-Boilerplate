/* eslint-disable no-unused-vars */
/* eslint-disable require-yield */
import { put, call } from 'redux-saga/effects';
import AuthActionTypes from '../stores/auth/Actions';

import { login, register } from '../services/auth/index';

import { navigateTo } from '../services/nav/index';

function* injectToken(token) {
  try {
    // Try to Set Token to header and save it as cookie
    yield put(AuthActionTypes.loadToken(token));
    navigateTo('/home');
  } catch ({ message = 'Snap:(' }) {
    yield put(AuthActionTypes.error(message));
    yield call(revokeToken);
  }
}

function* revokeToken() {
  // Remove the token from header and delete the cookie
  yield put(AuthActionTypes.deleteToken);
  navigateTo('/login');
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
    const token = yield call(register, data);
    if (token) {
      yield call(injectToken, token);
    } else {
      yield put(AuthActionTypes.error("Such Credentials are not Accepted!"));
      yield call(revokeToken);
    }
  } catch ({ message = 'Snap:(' }) {
    yield put(AuthActionTypes.error(message));
  }
}

export function* loginUser({ data }) {
  try {
    const token = yield call(login, data);
    if (token) {
      yield call(injectToken, token);
    } else {
      yield put(AuthActionTypes.error("Invalid Credentials"));
      yield call(revokeToken);
    }
  } catch ({ message = 'Snap:(' }) {
    yield put(AuthActionTypes.error(message));
  }
}

export function* logoutUser() {
  yield put(AuthActionTypes.loadingUserInfo());
  yield call(revokeToken);
}
