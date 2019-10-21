import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import tracker from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch(action.type){
    case 'add_error':
      return { ...state, errorMessage: action.payload }
    case 'singup':
      return { errorMessage: '', token: action.payload, }
    default:
      return state;
    }
}

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'add_error' , payload: 'Something went wrong with sign up'});
  };
};

const signin = dispatch => {
  return ({ email, password }) => {
    // make api request to sign in with email and password

    // if we succeed, modify state to show we are authenticated

    // display error if there is an issue signing-up
  }
}

const signout = dispatch => {
  return () => {
    // sign the user out and modify state to show being signed out.
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout
  },
  {
    token: null,
    errorMessage: '',
  }
)