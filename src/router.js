import React, { lazy, Suspense } from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Login = lazy(() => import("./pages/login/index"));
const User = lazy(() => import("./pages/user/index"));
const Error = lazy(() => import("./pages/error/index"));

export default function AppRoutes() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <AuthRoute path="/user" component={User} /> */}
          <Route path="/error/:code" component={Error} />
          <Route component={Error} />
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

// 路由登录鉴权
const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        hasAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

AuthRoute.propTypes = {
  component: PropTypes.element.isRequired
};

function hasAuth() {
  return false;
}
