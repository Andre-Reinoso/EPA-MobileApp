import React from 'react';
import {
	IonContent,
	IonGrid,
	IonRow,
	IonCol,
	IonCard,
	IonCardHeader,
	IonCardTitle,
	IonAvatar,
	IonChip,
	IonItem,
	IonLabel,
} from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';

const SelectLanguage: React.FC = () => {
	const logo450 =
		'https://firebasestorage.googleapis.com/v0/b/explore-peru-from-abroad.appspot.com/o/Assets%2FLogos%2FEPA%20Fondo%20Color%20450x450.png?alt=media&token=425f33b5-7f7e-41c3-a680-80e68e069381';

	return (
		<>
			<IonContent>
				<IonGrid>
					<IonRow>
						<IonCol>
							<div className='ion-text-center'>
								<img
									className=''
									src={logo450}
									style={{ width: 'auto', height: '150px' }}
								/>
							</div>
							<h1>Select your language:</h1>
							<IonCard color='primary'>
								<IonItem color='transparent'>
									<IonAvatar slot='start'>
										<img src='https://ecodescalk.eu/wp-content/uploads/2018/03/United-Kingdom-Flag-PNG-Image.png' />
									</IonAvatar>
									<IonCardTitle>English</IonCardTitle>
								</IonItem>
							</IonCard>
							<IonCard color='light'>
								<IonItem color='transparent'>
									<IonAvatar slot='start'>
										<img src='https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png' />
									</IonAvatar>
									<IonCardTitle>Spanish</IonCardTitle>
								</IonItem>
							</IonCard>

							<IonCard color='light'>
								<IonItem color='transparent'>
									<IonAvatar slot='start'>
										<img src='https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg' />
									</IonAvatar>
									<IonCardTitle>Japanese </IonCardTitle>
								</IonItem>
							</IonCard>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</>
	);
};

export default SelectLanguage;
