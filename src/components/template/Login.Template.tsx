import React from 'react';
import LoginForm from './../modules/LoginForm';
import { IonRow, IonCol, IonButton } from '@ionic/react';
import { logo450 } from './../../utilities/assets';

const LoginTemplate: React.FC = () => {
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
					
				</IonCol>
			</IonRow>
		</>
	);
};

export default LoginTemplate;
