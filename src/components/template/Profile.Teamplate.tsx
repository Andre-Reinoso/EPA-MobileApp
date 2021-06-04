import React, { useState, useEffect, useContext } from 'react';
import { IonRow, IonCol } from '@ionic/react';
import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
import SelectButton from '../elements/SelectButton';
import BusinessProfileForm from '../modules/BusinessProfileForm';
import UserProfileForm from '../modules/UserProfileForm';

const ProfileTemplate: React.FC = () => {
	const [selectedContent, setSelectedContent] = useState('User');
	const { currentUser } = useContext(UserContext);

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

					{selectedContent === 'Business' &&
						(currentUser.data.isSeller ? (
							<BusinessProfileForm />
						) : (
							<h3>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='The User is not a Seller'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</h3>
						))}
				</IonCol>
			</IonRow>
		</>
	);
};

export default ProfileTemplate;
