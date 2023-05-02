import React, { lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from './utils/toast';
import PrivateRoute from './components/login/PrivateRoute';
import { Amplify } from 'aws-amplify';

const Layout = lazy(() => import('./layout/Layout'));
const Login = lazy(() => import('./pages/Login'));
const ForgetPassword = lazy(() => import('./pages/ForgotPassword'));

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgetPassword} />

          <PrivateRoute>
            {' '}
            <Route path="/" component={Layout} />
          </PrivateRoute>
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
