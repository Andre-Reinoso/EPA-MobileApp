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
import { chevronBackOutline, addOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements/';
const ProfileLayout: React.FC = ({ children }) => {
	const { currentUser } = React.useContext(UserContext);

	const history = useHistory();
	return (
		<>
			<IonPage>
				<IonContent>
					<IonHeader className='ion-no-border'>
						<IonToolbar color='primary'>
							<IonButtons slot='start'>
								<IonBackButton
									defaultHref='/marketPlace'
									icon={chevronBackOutline}
								/>
							</IonButtons>
							<IonButtons slot='secondary' style={{ color: 'transparent' }}>
								<IonButton>
									<IonIcon slot='icon-only' icon={addOutline} />
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Trasnlator
									from='en'
									to={currentUser.data.preferredLanguage|| 'en'}
									text='Profile'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>{children}</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default ProfileLayout;
