import React, { useContext } from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
	IonButton,
	IonButtons,
	IonHeader,
	IonToolbar,
	IonIcon,
	IonTitle,
	IonBackButton,
} from '@ionic/react';
import { addOutline, chevronBackOutline } from 'ionicons/icons';
import Translator from '../components/elements/Translator';
import { UserContext } from '../context/User.Context';
import MyAlertsTemplate from '../components/template/MyAlerts.Template';

const MyAlerts: React.FC = () => {
	const { currentUser } = useContext(UserContext);
	return (
		<>
			<IonPage>
				<IonContent>
					<IonHeader className='ion-no-border'>
						<IonToolbar color='primary'>
							<IonButtons slot='start'>
								<IonBackButton
									defaultHref='/dashboard'
									icon={chevronBackOutline}
								/>
							</IonButtons>
							<IonButtons slot='secondary' style={{ color: 'transparent' }}>
								<IonButton>
									<IonIcon slot='icon-only' icon={addOutline} />
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='My Alerts'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>
						<MyAlertsTemplate />
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default MyAlerts;
