import React, { lazy, Suspense } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
const Login = lazy(() => import('./pages/login/index'));
const User = lazy(() => import('./pages/user/index'));
const Error = lazy(() => import('./pages/error/index'));


export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path="/" component={Login} />
					<AuthRoute path="/user" component={User} />
					<Route path="/error/:code" component={Error} />
					<Route component={Error} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
};

// 路由登录鉴权
const AuthRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render = {props =>
				false ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};
