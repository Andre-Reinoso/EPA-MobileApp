import React from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
} from '@ionic/react';
import { bannerLlamasUrl } from '../../utilities/assets';

const LoginLayout: React.FC = ({ children }) => {
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
					<IonGrid>{children}</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default LoginLayout;
