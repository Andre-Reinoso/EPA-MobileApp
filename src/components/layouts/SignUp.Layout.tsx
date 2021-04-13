import React from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonBackButton,
} from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { logo450 } from '../../utilities/assets';

const SignUpLayout: React.FC = ({ children }) => {
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
					<IonGrid>{children}</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default SignUpLayout;
