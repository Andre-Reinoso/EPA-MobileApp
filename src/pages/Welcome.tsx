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
import { chevronBackOutline, saveOutline } from 'ionicons/icons';
import Translator from './../components/elements/Translator';
import { UserContext } from './../context/User.Context';
import { bannerWelcomeUrl } from '../utilities/assets';
import WelcomeTemplate from '../components/template/WelcomeTemplate';

const Welcome: React.FC = () => {
	const { currentUser } = useContext(UserContext);
	return (
		<>
			<IonPage>
				<IonContent>
					<img
						src={bannerWelcomeUrl}
						style={{
							borderBottomLeftRadius: '40px',
							borderBottomRightRadius: '40px',
							width: '100%',
							height: '250px',
						}}
						alt='granos'
					/>
					<IonGrid>
						<WelcomeTemplate />
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default Welcome;
