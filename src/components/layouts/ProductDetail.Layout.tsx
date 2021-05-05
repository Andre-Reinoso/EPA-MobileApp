import React, { useState } from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
	IonHeader,
	IonButton,
	IonButtons,
	IonIcon,
	IonToolbar,
	IonTitle,
	IonBackButton,
} from '@ionic/react';
import { chevronBackOutline, heartOutline } from 'ionicons/icons';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements/';
const ProductDetailLayout: React.FC = ({ children }) => {
	const { currentUser } = React.useContext(UserContext);

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
							<IonButtons slot='secondary'>
								<IonButton>
									<IonIcon slot='icon-only' icon={heartOutline} />
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Trasnlator
									from='en'
									to={currentUser.data.preferredLanguage}
									text='Product Detail'
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

export default ProductDetailLayout;
