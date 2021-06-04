import React, { useState, useEffect } from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { paperPlaneOutline } from 'ionicons/icons';
import { UserContext } from '../../context/User.Context';
import Translator from './Translator';

const SendMessageButton = () => {
	const { currentUser } = React.useContext(UserContext);

	return (
		<>
			<div className='ion-text-center mt-4'>
				<IonButton className='ion-text-capitalize'>
					<Translator
						from='en'
						to={currentUser.data.preferredLanguage|| 'en'}
						text='Send Message'
						returnText={true}
						onTextTranslated={() => {}}
					/>

					<IonIcon slot='end' icon={paperPlaneOutline} />
				</IonButton>
			</div>
		</>
	);
};
export default SendMessageButton;
