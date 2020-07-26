import { put, call } from 'redux-saga/effects';
import AuthActionTypes from '../stores/auth/Actions';

function* injectToken(token) {
	yield put(AuthActionTypes.error("ERROR"));
}

function* revokeToken() {
	yield put(AuthActionTypes.error("ERROR"));
}

export function* fetchUser() {
	yield put(AuthActionTypes.error("ERROR"));
}

export function* registerUser() {
	yield put(AuthActionTypes.error("ERROR"));
}

export function* loginUser() {
	yield put(AuthActionTypes.error("ERROR"));
}

export function* logoutUser() {
	yield put(AuthActionTypes.error("ERROR"));
}
