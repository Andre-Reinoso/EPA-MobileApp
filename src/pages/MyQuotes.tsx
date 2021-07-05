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
	IonButton,
	IonIcon,
	IonModal,
	IonRow,
	IonCol,
	IonList,
	IonItem,
	IonLabel,
	IonInput,
	useIonAlert,
} from '@ionic/react';
import { chevronBackOutline, addOutline, boatOutline } from 'ionicons/icons';
import Translator from '../components/elements/Translator';
import { UserContext } from '../context/User.Context';
import { useHistory } from 'react-router-dom';
import MyQuotesTemplate from '../components/template/MyQuotes.Template';
import { container } from '../utilities/assets';

const MyQuotes: React.FC = () => {
	const history = useHistory();
	const [showModal, setShowModal] = useState(false);
	const [orderCode, setOrderCode] = useState('');
	const [present] = useIonAlert();
	const { currentUser } = useContext(UserContext);

	const verifyOrderStatus = async () => {
		present({
			cssClass: 'my-css',
			header: 'Alert',
			message: 'alert from hook',
			buttons: [
				'Cancel',
				{ text: 'Ok', handler: (d) => console.log('ok pressed') },
			],
			onDidDismiss: (e) => console.log('did dismiss'),
		});
	};
	return (
		<>
			<IonModal isOpen={showModal}>
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
								<IonButton style={{ color: 'transparent' }}>
									<IonIcon slot='icon-only' icon={boatOutline} />
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='Order Status'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>
						<IonRow>
							<IonCol>
								<IonList>
									<div className='ion-text-center mt-3'>
										<img
											style={{
												width: '100px',
												height: '100px',
												borderRadius: '500px',
												borderStyle: 'solid',
												borderColor: '#e51e2d',
												borderWidth: '5px',
											}}
											src={container}
										/>
									</div>

									<IonItem>
										<p className='ion-text-center mx-5'>
											<Translator
												from='en'
												to={currentUser.data.preferredLanguage || 'en'}
												text='Ingrese su codigo para verificar el estado de su pedido'
												returnText={true}
												onTextTranslated={() => {}}
											/>
										</p>
									</IonItem>
									<IonItem className='mx-5'>
										<IonLabel position='floating'>
											<Translator
												from='en'
												to={currentUser.data.preferredLanguage || 'en'}
												text='Codigo'
												returnText={true}
												onTextTranslated={() => {}}
											/>
										</IonLabel>
										<IonInput
											value={orderCode}
											onIonChange={(e: any) => setOrderCode(e.detail.value)}
											type='text'
											placeholder='ABCD12'
										/>
									</IonItem>
									<IonButton
										onClick={() => {
											verifyOrderStatus();
										}}
										expand='block'
										className='mx-5'
										color='primary'>
										<Translator
											from='en'
											to={currentUser.data.preferredLanguage || 'en'}
											text='Consultar'
											returnText={true}
											onTextTranslated={() => {}}
										/>
									</IonButton>
								</IonList>
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonContent>
			</IonModal>
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
								<IonButton onClick={() => setShowModal(true)}>
									<IonIcon slot='icon-only' icon={boatOutline} />
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='My Quotes'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>
						<MyQuotesTemplate />
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default MyQuotes;
