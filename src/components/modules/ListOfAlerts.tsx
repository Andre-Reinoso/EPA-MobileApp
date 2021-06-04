import React, { useContext, useEffect, useState } from 'react';
import {
	IonList,
	IonItem,
	IonLabel,
	IonListHeader,
	IonButton,
} from '@ionic/react';
import { useHistory } from 'react-router';
import Translator from '../elements/Translator';
import { UserContext } from '../../context/User.Context';

const ListOfAlerts: React.FC = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<>
			<IonList lines='full'>
				<IonListHeader>
					<h3>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Alerts'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</h3>
				</IonListHeader>
				<IonItem>
					<IonButton expand='full' onClick={() => {}}>
						Push Notification
					</IonButton>
				</IonItem>
			</IonList>
		</>
	);
};

export default ListOfAlerts;
