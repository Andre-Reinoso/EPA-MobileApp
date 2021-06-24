import React, { useContext } from 'react';
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
import Translator from '../components/elements/Translator';
import { UserContext } from '../context/User.Context';
import { useHistory } from 'react-router-dom';
import MyQuotesTemplate from '../components/template/MyQuotes.Template';

const MyQuotes: React.FC = () => {
	const history = useHistory();
	const { currentUser } = useContext(UserContext);
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
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='My Quotes'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>
						<MyQuotesTemplate />
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default MyQuotes;
