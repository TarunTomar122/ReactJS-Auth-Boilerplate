import { put, call } from 'redux-saga/effects';
import AuthActionTypes from '../stores/auth/Actions';

import { login, register } from '../services/auth/index';
import { setAxiosHeader, revokeAxiosHeader } from '../services/api';
import { navigateTo } from '../services/nav/index';

function* injectToken(token) {
  try {
    yield call(setAxiosHeader, token);
    localStorage.setItem('token', token);
    yield put(AuthActionTypes.loadToken(token));
    navigateTo('/home');
  } catch ({ message = 'Snap:(' }) {
    yield put(AuthActionTypes.error(message));
    yield call(revokeToken);
  }
}

function* revokeToken() {
  try {
    yield call(revokeAxiosHeader);
    localStorage.removeItem('token');
    yield put(AuthActionTypes.deleteToken());
    navigateTo('/login');
  }
  catch{
    yield call(revokeAxiosHeader);
    yield put(AuthActionTypes.deleteToken());
    navigateTo('/login');
  }
}

export function* fetchUser() {
  try {
    yield put(AuthActionTypes.loadingUserInfo());
    const token = localStorage.getItem('token');
    if (!token) {
      yield call(revokeToken);
    }
    else {
      yield call(injectToken, token);
    }
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
    yield put(AuthActionTypes.loadingUserInfo());
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
