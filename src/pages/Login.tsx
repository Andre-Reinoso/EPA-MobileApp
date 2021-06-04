import React, { useEffect, useState } from 'react';
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
import { bannerLlamasUrl } from './../utilities/assets';
import Translator from './../components/elements/Translator';
import { UserContext } from './../context/User.Context';
import LoginTemplate from '../components/template/Login.Template';

const Login: React.FC = () => {
	return (
		<>
			<IonPage>
				<IonContent>
					<img
						src={bannerLlamasUrl}
						style={{
							borderBottomLeftRadius: '40px',
							borderBottomRightRadius: '40px',
							width: '100%',
							height: '250px',
						}}
						alt='granos'
					/>
					<IonGrid>
						<LoginTemplate />
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default Login;
