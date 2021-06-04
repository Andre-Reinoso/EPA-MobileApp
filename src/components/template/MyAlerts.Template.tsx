import React from 'react';
import LoginForm from './../modules/LoginForm';
import { IonRow, IonCol, IonButton } from '@ionic/react';
import { logo450 } from './../../utilities/assets';
import ListOfAlerts from '../modules/ListOfAlerts';

const MyAlertsTemplate: React.FC = () => {
	return (
		<>
			<IonRow>
				<IonCol>
					<ListOfAlerts />
				</IonCol>
			</IonRow>
		</>
	);
};

export default MyAlertsTemplate;
