import React from 'react';
import {
	IonContent,
	IonGrid,
	IonRow,
	IonCol,
	IonText,
	IonIcon,
	IonButton,
} from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';

const Welcome: React.FC = () => {
	const bannerUrl =
		'https://firebasestorage.googleapis.com/v0/b/explore-peru-from-abroad.appspot.com/o/Assets%2FBanners%2FBanner%20Granos.png?alt=media&token=8d5a56b7-16d7-40ff-8549-1f1510e989ca';
	const logo450 =
		'https://firebasestorage.googleapis.com/v0/b/explore-peru-from-abroad.appspot.com/o/Assets%2FLogos%2FEPA%20Fondo%20Color%20450x450.png?alt=media&token=425f33b5-7f7e-41c3-a680-80e68e069381';
	return (
		<>
			<IonContent>
				<img
					src={bannerUrl}
					style={{
						borderBottomLeftRadius: '40px',
						WebkitBorderBottomRightRadius: '40px',
						width: '100%',
						height: '250px',
					}}
					alt='granos'
				/>
				<IonGrid>
					<IonRow>
						<IonCol>
							<div className='ion-text-center'>
								<img
									className=''
									src={logo450}
									style={{ width: 'auto', height: '150px', marginTop: '-85px' }}
								/>
							</div>
							<h1 className='ion-text-center'>Welcome</h1>
							<p
								className='ion-text-center'
								style={{ paddingLeft: '60px', paddingRight: '60px' }}>
								Vel accumsan a nec adipiscing nisl proin phasellus.Vel accumsan
								a nec adipiscing nisl proin phasellus.
							</p>

							<p className="ion-text-center">
								<IonButton fill='clear' style={{ marginTop: '15%' }}>
									<p
										style={{ fontWeight: 'bold', fontSize: '18px' }}
										className='ion-text-capitalize'>
										Continue
									</p>
									<IonIcon slot='end' icon={arrowForwardOutline} />
								</IonButton>
							</p>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</>
	);
};

export default Welcome;
