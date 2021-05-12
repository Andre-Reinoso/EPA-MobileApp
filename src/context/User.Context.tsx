import React, { createContext, useState } from 'react';

const UserContext: any = createContext({ data: {}, auth: false });

const UserProvider: React.FC = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({ data: {}, auth: false });

	const updateCurrentUser = (updatedField: any, valueUpdated: any) => {
		setCurrentUser({
			data: { ...currentUser.data, [updatedField]: valueUpdated },
			auth: true,
		});
	};

	const login = (user: any) => {
		setCurrentUser({
			data: user,
			auth: true,
		});
	};

	const logout = () => {
		setCurrentUser({
			data: {},
			auth: false,
		});
	};

	return (
		<UserContext.Provider
			value={{ currentUser, login, logout, updateCurrentUser }}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
