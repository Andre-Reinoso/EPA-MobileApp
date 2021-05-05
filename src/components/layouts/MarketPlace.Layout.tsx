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
	IonRow,
	IonCol,
} from '@ionic/react';
import { personCircleOutline, heartOutline } from 'ionicons/icons';
import { logo450 } from './../../utilities/assets';
import { useHistory } from 'react-router';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements/';

const MarketPlaceLayout: React.FC = ({ children }) => {
	const [searchText, setSearchText] = useState('');
	const { currentUser } = React.useContext(UserContext);

	const history = useHistory();
	return (
		<>
			<IonPage>
				<IonContent>
					<IonHeader className='ion-no-border'>
						<IonToolbar color='primary'>
							<IonButtons slot='start'>
								<IonButton
									onClick={() => {
										history.push('/dashboard');
									}}>
									<IonIcon slot='icon-only' icon={personCircleOutline} />
								</IonButton>
							</IonButtons>
							<IonButtons slot='secondary' style={{ color: 'transparent' }}>
								<IonButton>
									<IonIcon slot='icon-only' icon={heartOutline} />
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Trasnlator
									from='en'
									to={currentUser.data.preferredLanguage}
									text='Market Place'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<div
						className='m-0'
						style={{
							margin: 0,
							backgroundColor: '#e51e2d',
							borderBottomRightRadius: '20px',
							borderBottomLeftRadius: '20px',
						}}>
						<IonGrid className=' '>
							<IonRow className='px-3 mt-2'>
								<IonCol size='8'>
									<h3
										className='fw-bolder'
										style={{ margin: 0, color: '#fff' }}>
										Explore Peru from abroad
									</h3>
								</IonCol>
								<IonCol>
									<div className='ion-text-right'>
										<img
											src={logo450}
											style={{ width: 'auto', height: '80px' }}
										/>
									</div>
								</IonCol>
							</IonRow>
							<IonRow className='px-3'>
								<IonSearchbar
									className='ion-border-radius-sm'
									value={searchText}
									onIonChange={(e) => setSearchText(e.detail.value!)}
									showCancelButton='never'></IonSearchbar>
							</IonRow>
						</IonGrid>
					</div>
					<IonGrid>{children}</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default MarketPlaceLayout;
