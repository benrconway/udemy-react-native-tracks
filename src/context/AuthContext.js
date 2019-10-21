import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch(action.type){
    case 'clear_error_message':
      return { ...state, errorMessage: ''};
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'singin':
      return { errorMessage: '', token: action.payload, };
    case 'signout':
      return { ...state, token: null }
    default:
      return state;
    }
}

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('loginFlow');
  }
}

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message'});
}

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'add_error' , payload: 'Something went wrong with sign up'});
  };
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList')
  } catch (err) {
    dispatch({ type: 'add_error' , payload: 'Something went wrong with sign in'});
  };
}

const signout = dispatch => {
  return () => {
    dispatch({ type: 'signout'})
  }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  {
    signup,
    signin,
    signout,
    clearErrorMessage,
    tryLocalSignin,
  },
  {
    token: null,
    errorMessage: '',
  }
)