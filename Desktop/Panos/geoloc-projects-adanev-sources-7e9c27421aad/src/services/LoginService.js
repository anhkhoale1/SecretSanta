import requests from './AmplifyApiService';

const LOGIN_API = "api2345";
const LoginService = {

  loginUser(body) {
    return requests.post(LOGIN_API,`/login`, body);
  },

  forgetPassword(body) {
    return requests.put(LOGIN_API,'/user/forget-password', body);
  },

  resetPassword(body) {
    return requests.put(LOGIN_API,'/user/reset-password', body);
  }

};

export default LoginService;
