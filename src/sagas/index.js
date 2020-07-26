import { takeLatest, all } from 'redux-saga/effects';
import { AuthActionTypes } from '../stores/auth/Actions';
import {
  fetchUser, loginUser, logoutUser, registerUser,
} from './AuthSaga';

export default function* root() {
  yield all([
    takeLatest(AuthActionTypes.FETCH_USER, fetchUser),
    takeLatest(AuthActionTypes.LOGIN_USER, loginUser),
    takeLatest(AuthActionTypes.REGISTER_USER, registerUser),
    takeLatest(AuthActionTypes.LOGOUT_USER, logoutUser),
  ]);
}
