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

const AddProductLayout: React.FC = ({ children }) => {
	return (
		<>
			<IonPage>
				<IonContent>
					<IonHeader className='ion-no-border'>
						<IonToolbar color='primary'>
							<IonButtons slot='start'>
								<IonBackButton
									defaultHref='/myProducts'
									icon={chevronBackOutline}
								/>
							</IonButtons>
							<IonButtons slot='secondary'>
								<IonButton>
									<IonIcon
										slot='icon-only'
										icon={saveOutline}
										style={{ color: 'transparent' }}
									/>
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								Add Product
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>{children}</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default AddProductLayout;
