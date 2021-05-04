import React from 'react';
import { ProfileLayout } from '../components/layouts';
import { ProfileTemplate } from '../components/templates';

const Profile: React.FC = () => {
	return (
		<>
			<ProfileLayout>
				<ProfileTemplate />
			</ProfileLayout>
		</>
	);
};

export default Profile;
