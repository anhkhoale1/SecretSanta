import Cookies from 'js-cookie';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import LoginService from '../services/LoginService';
import { notifyError, notifySuccess } from '../utils/toast';

const useLoginSubmit = () => {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useContext(AdminContext);
  const history = useHistory();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const onSubmit = ({ email, verifyEmail, password }) => {
  setLoading(true);
  const cookieTimeOut = 0.5;

  if (location.pathname === "/login") {
    if (1 === 1) {
      console.log("mock login");
      const user = {
        email: "exemple@mock.com",
        name: "John DOE",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VkNjNmM2JhNzg3NmZhY2YwZjI2MTMiLCJuYW1lIjoiQWRtaW4iLCJlbWFpbCI6ImFpenpvdWtlQG91dGxvb2suY29tIiwiaWF0IjoxNjgxMTAxOTQ3LCJleHAiOjE2ODEyNzQ3NDd9.2gw_a8Rat8icBx8d7Ntr-H90x3vj0Cz_gsaP75_xwMI",
        level: 1, // Set the level property for the user object
      };
      setLoading(false);
      dispatch({ type: "USER_LOGIN", payload: user });
      Cookies.set("adminInfo", JSON.stringify(user), {
        expires: cookieTimeOut,
      });
      history.replace("/");
      return;
    }

    LoginService.loginUser({ email, password })
      .then((res) => {
        if (res) {
          setLoading(false);
          notifySuccess("Login Success!");
          dispatch({ type: "USER_LOGIN", payload: res });
          Cookies.set("adminInfo", JSON.stringify(res), {
            expires: cookieTimeOut,
          });
          history.replace("/");
        }
      })
      .catch((err) => {
        notifyError(err ? err.response.data.message : err.message);
        setLoading(false);
      });
  }

  if (location.pathname === "/forgot-password") {
    LoginService.forgetPassword({ verifyEmail })
      .then((res) => {
        setLoading(false);
        notifySuccess(res.message);
      })
      .catch((err) => {
        setLoading(false);
        notifyError(err ? err.response.data.message : err.message);
      });
  }
};

  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    loading,
  };
};

export default useLoginSubmit;
