import { put, call } from 'redux-saga/effects';
import AuthActionTypes from '../stores/auth/Actions';

// function* injectToken(token) {
//   yield put(AuthActionTypes.error('ERROR'));
// }

// function* revokeToken() {
//   yield put(AuthActionTypes.error('ERROR'));
// }

export function* fetchUser() {
  yield put(AuthActionTypes.error('ERROR'));
}

export function* registerUser() {
  yield put(AuthActionTypes.error('ERROR'));
}

export function* loginUser({ data }) {
  // console.log("Logging user", data);
  yield put(AuthActionTypes.error(data));
}

export function* logoutUser() {
  yield put(AuthActionTypes.error('ERROR'));
}
