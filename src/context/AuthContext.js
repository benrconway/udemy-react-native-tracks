import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch(action.type){
    default:
      return state;
    }
}

const signup = dispatch => {
  return ({ email, password }) => {
    // make api request to sign up with email and password

    // if we succeed, modify state to show we are authenticated

    // display error if there is an issue signing-up
  }
}

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
  { isSignedIn: false }
)