import React from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonTitle,
	IonBackButton,
	IonButton,
	IonIcon,
} from '@ionic/react';
import { chevronBackOutline, saveOutline } from 'ionicons/icons';
import Translator from './../components/elements/Translator';
import { UserContext } from './../context/User.Context';
import { logo450 } from '../utilities/assets';
import SignUpTemplate from '../components/template/SignUp.Template';

const SignUp: React.FC = () => {
	return (
		<>
			<IonPage>
				<IonContent>
					<IonHeader className='ion-no-border'>
						<IonToolbar>
							<IonButtons slot='start'>
								<IonBackButton
									defaultHref='/'
									color='primary'
									icon={chevronBackOutline}
								/>
							</IonButtons>
						</IonToolbar>
					</IonHeader>
					<div className='ion-text-center'>
						<img src={logo450} style={{ width: 'auto', height: '150px' }} />
					</div>
					<IonGrid>
						<SignUpTemplate/>
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default SignUp;
