import React, { useState, useEffect } from 'react';
import { IonRow, IonCol } from '@ionic/react';
import { BusinessProfileForm, SelectButton, UserProfileForm } from '../modules';

const ProfileTemplate: React.FC = () => {
	const [selectedContent, setSelectedContent] = useState('User');
	useEffect(() => {}, []);
	return (
		<>
			<div className='mt-3'>
				<SelectButton
					firstButtonTitle='User'
					secondButtonTitle='Business'
					onSelectedButton={(e: string) => {
						setSelectedContent(e);
					}}
				/>
			</div>
			<IonRow>
				<IonCol>
					{selectedContent === 'User' && <UserProfileForm />}
					{selectedContent === 'Business' && <BusinessProfileForm/>}
				</IonCol>
			</IonRow>
		</>
	);
};

export default ProfileTemplate;
