import React from 'react';
import {
	IonInput,
	IonItem,
	IonIcon,
	IonButton,
	IonLabel,
	IonList,
} from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

const LoginForm: React.FC = () => {
	return (
		<>
			<IonList className='px-2'>
				<h3 className='fw-bold'>Login</h3>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Email</IonLabel>
					<IonInput required type='email'></IonInput>
					<IonIcon slot='start' icon={mailOutline} />
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>Password</IonLabel>
					<IonInput required type='password'></IonInput>
					<IonIcon slot='start' icon={lockClosedOutline} />
				</IonItem>

				<IonButton
					expand='block'
					className='mt-4 ion-button-full-rounded ion-text-capitalize fw-bold'>
					Sign In
				</IonButton>
			</IonList>
		</>
	);
};

export default LoginForm;
