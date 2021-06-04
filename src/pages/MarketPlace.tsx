import React, { useContext, useState } from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonTitle,
	IonBackButton,
	IonRow,
	IonCol,
	IonButton,
	IonIcon,
	IonSearchbar,
} from '@ionic/react';
import {
	personCircleOutline,
	heartOutline,
	searchOutline,
} from 'ionicons/icons';
import Translator from './../components/elements/Translator';
import { UserContext } from './../context/User.Context';
import { logo450 } from '../utilities/assets';
import { useHistory } from 'react-router-dom';
import MarketPlaceTemplate from '../components/template/MarketPlaceTempalte';

const MarketPlace: React.FC = () => {
	const { currentUser } = useContext(UserContext);
	const [searchText, setSearchText] = useState('');
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
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
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
										<Translator
											from='en'
											to={currentUser.data.preferredLanguage || 'en'}
											text='Explore Peru from abroad'
											returnText={true}
											onTextTranslated={() => {}}
										/>
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
									animated
									//enterkeyhint='send'
									className='ion-border-radius-sm'
									value={searchText}
									onIonChange={(e) => setSearchText(e.detail.value!)}
									showCancelButton='never'
									onKeyPress={(e) => {
										if (e.key === 'Enter') {
											history.push(`searchProduct/${searchText}`)
										}
									}}
								/>
							</IonRow>
						</IonGrid>
					</div>
					<IonGrid>
						<MarketPlaceTemplate />
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default MarketPlace;
