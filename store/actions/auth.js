export const AUTHENTICATE = 'AUTHENTICATE';

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPO4Qx9Fi29OO8--ITC_yrDl5-hQCDp1o',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = 'Something went wrong!';
      if (errorId) {
        message = 'This email exists elready!';
      }
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);
  }
}

export const login = (email, password) => {

}