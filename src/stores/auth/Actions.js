import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  /* redux-saga actions */
  registerUser: null,
  loginUser: ['data'], // Action to initiate a sign in
  logoutUser: null, // Action to initiate a sign out
  fetchUser: null, // Loading user information at app start up

  /* redux state actions */
  loadToken: ['token'], // put token into store
  deleteToken: null, // remove token from store
  loadingUserInfo: null, // start loading

  error: ['message'], // error occurred
});

export const AuthActionTypes = Types;
export default Creators;
