import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.FunctionComponent<any> = ({
	authenticated,
	...props
}) => {
	if (authenticated) {
		return <Route {...props} />;
	}
	return <Redirect to='/login' />;
};

export default PrivateRoute;
