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
	IonSearchbar,
} from '@ionic/react';
import { personCircleOutline, heartOutline } from 'ionicons/icons';

const MarketPlaceLayout: React.FC = ({ children }) => {
	const [searchText, setSearchText] = useState('');
	return (
		<>
			<IonPage>
				<IonContent>
					<IonHeader className='ion-no-border'>
						<IonToolbar color='primary'>
							<IonButtons slot='start'>
								<IonButton>
									<IonIcon slot='icon-only' icon={personCircleOutline} />
								</IonButton>
							</IonButtons>
							<IonButtons slot='secondary' style={{ color: 'transparent' }}>
								<IonButton>
									<IonIcon slot='icon-only' icon={heartOutline} />
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								Market Place
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<div
						className='m-0'
						style={{ margin: 0, backgroundColor: '#e51e2d' }}>
						<IonSearchbar
							value={searchText}
							onIonChange={(e) => setSearchText(e.detail.value!)}
							showCancelButton='never'></IonSearchbar>
					</div>
					<IonGrid>{children}</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default MarketPlaceLayout;
