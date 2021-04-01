import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute: React.FunctionComponent<any> = ({
	authenticated,
	...props
}) => {
	if (!authenticated) {
		return <Route {...props} />;
	}
	return <Redirect to='/home' />;
};

export default PublicRoute;
