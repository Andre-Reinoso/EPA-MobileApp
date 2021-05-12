import React, { useState, useEffect, useContext } from 'react';
import { IonRow, IonCol } from '@ionic/react';
import { BusinessProfileForm, SelectButton, UserProfileForm } from '../modules';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements';

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
								<Trasnlator
									from='en'
									to={currentUser.data.preferredLanguage|| 'en'}
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
