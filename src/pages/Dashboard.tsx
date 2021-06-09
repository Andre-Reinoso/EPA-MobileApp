import React, { useContext, useEffect, useState } from 'react';
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
	useIonActionSheet,
	IonModal,
	IonNote,
	IonImg,
	IonFab,
	useIonLoading,
	IonFabButton,
} from '@ionic/react';
import {
	cameraOutline,
	chevronBackOutline,
	imageOutline,
} from 'ionicons/icons';
import Translator from './../components/elements/Translator';
import { UserContext } from './../context/User.Context';
import DashboardTemplate from '../components/template/DashboardTemplate';
import StorageService from '../services/UseCases/Storage.Service';
import { auth } from '../config/Firebase.config';
import { Plugins, CameraResultType } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { useHistory } from 'react-router';

const Dashboard: React.FC = () => {
	const history = useHistory();
	const { Camera } = Plugins;
	const { currentUser } = useContext(UserContext);
	const [present, dismiss] = useIonActionSheet();
	const [presentLoading, dismissLoading] = useIonLoading();

	const [showModal, setShowModal] = useState(false);
	const [photo, setPhoto] = useState<any>();
	const [photoBase64, setPhotoBase64] = useState<any>();
	useEffect(() => {
		defineCustomElements(window);
	}, []);

	const addUserPhoto = async () => {
		const { uploadFileFromString, getDownloadURL } = new StorageService();
		presentLoading({
			message: 'Loading ...',
			translucent: true,
			spinner: 'bubbles',
			id: 'loadingSpiner',
		});
		try {
			if (photoBase64) {
				const filename = await uploadFileFromString(
					photoBase64.base64String,
					photoBase64.format,
					'users'
				);
				const urlImage = await getDownloadURL(filename, 'users');
				console.log(urlImage);
				auth.currentUser?.updateProfile({
					photoURL: urlImage,
				});
				dismissLoading();
				history.goBack();
			} else {
			}
		} catch (error) {
			console.log(error);
		}
	};
	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Base64,
		});

		setPhotoBase64(image);
		setPhoto(`data:image/${image.format};base64,${image.base64String}`);
	};
	return (
		<>
			<IonModal isOpen={showModal}>
				<IonHeader>
					<IonToolbar>
						<IonTitle>
							<Translator
								from='en'
								to={currentUser.data.preferredLanguage || 'en'}
								text='Update Photo'
								returnText={true}
								onTextTranslated={() => {}}
							/>
						</IonTitle>
						<IonButtons slot='start'>
							<IonButton
								onClick={() => {
									addUserPhoto();
								}}>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='Save'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonButton>
						</IonButtons>
						<IonButtons slot='end'>
							<IonButton
								onClick={() => {
									setShowModal(false);
								}}>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='Cancel'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonGrid>
						<IonImg
							style={{ border: '1px solid black', minHeight: '100px' }}
							src={
								photo
									? photo
									: 'https://firebasestorage.googleapis.com/v0/b/explore-peru-from-abroad.appspot.com/o/Assets%2Fpicture%20icon.png?alt=media&token=f2201255-c5f2-4ff2-8122-f4e2b70a1ce0'
							}
						/>
					</IonGrid>

					<IonFab
						color='primary'
						vertical='bottom'
						horizontal='center'
						slot='fixed'>
						<IonFabButton color='primary' onClick={() => takePicture()}>
							<IonIcon icon={cameraOutline} />
						</IonFabButton>
					</IonFab>
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
								<IonButton
									onClick={() => {
										present({
											buttons: [
												{
													text: 'Update Photo',
													handler: () => {
														setShowModal(true);
													},
												},
												{
													text: 'Cancel',
													handler: () => {},
												},
											],
											header: 'Action Sheet',
										});
									}}>
									<IonIcon slot='icon-only' icon={imageOutline} />
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='Dashboard'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>
						<DashboardTemplate />
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default Dashboard;
