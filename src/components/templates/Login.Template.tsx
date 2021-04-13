import React from 'react';
import { LoginForm } from '../modules';
import { IonRow, IonCol, IonButton } from '@ionic/react';
import { logo450 } from './../../utilities/assets';
import { useHistory } from 'react-router-dom';

const LoginTemplate: React.FC = () => {
	const history = useHistory();
	return (
		<>
			<IonRow>
				<IonCol>
					<div className='ion-text-center'>
						<img
							src={logo450}
							style={{ width: 'auto', height: '150px', marginTop: '-85px' }}
						/>
					</div>
					<LoginForm />
					<IonButton
						onClick={() => {
							history.push('/signup');
						}}
						expand='block'
						fill='clear'
						className='ion-button-shadow-sm mt-3 ion-button-full-rounded ion-text-capitalize fw-bold'>
						Sign Up
					</IonButton>
				</IonCol>
			</IonRow>
		</>
	);
};

export default LoginTemplate;
