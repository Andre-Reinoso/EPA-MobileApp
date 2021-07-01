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
	useIonToast,
	IonRow,
	IonCol,
	IonInput,
	IonFooter,
	IonItem,
} from '@ionic/react';
import {
	chevronBackOutline,
	addOutline,
	caretBackSharp,
	send,
} from 'ionicons/icons';
import Translator from './../components/elements/Translator';
import { UserContext } from './../context/User.Context';
import { useParams } from 'react-router';
import { db } from '../config/Firebase.config';

const Chat: React.FC = () => {
	const { currentUser } = useContext(UserContext);
	const [messages, setMessages] = useState<any>([]);

	const [present, dismiss] = useIonToast();
	const [messageText, setMessageText] = useState('');

	const { id } = useParams<any>();
	useEffect(() => {
		const unsubscribe = db
			.collection('messages')
			.where(currentUser.data.isSeller ? 'from' : 'to', '==', id)
			.orderBy('createAt', 'asc')
			.onSnapshot((messages) => {
				let listOfMessages: any = [];
				messages.forEach((message: any) => {
					listOfMessages.push({ ...message.data() });
				});
				setMessages(listOfMessages);
			});
		return () => {
			unsubscribe();
		};
	}, []);

	const sendMessage = async () => {
		if (messageText) {
			try {
				// await db.collection('messages').add({
				// 	createAt: '',
				// 	from: currentUser.data.userId,
				// 	to: id,
				// 	translatedMessage: '',
				// 	messageText: '',
				// 	viewed: false,
				// });
				console.log('mensaje enviado');
				setMessageText('');
			} catch (error) {
				console.log(error);
			}
		} else {
			present({
				buttons: [{ text: 'Cerrar', handler: () => dismiss() }],
				message: 'Ingrese su mensaje',
			});
		}
	};

	return (
		<>
			<IonPage>
				<IonContent>
					<IonHeader className='ion-no-border'>
						<IonToolbar color='primary'>
							<IonButtons slot='start'>
								<IonBackButton
									defaultHref='/dashboard'
									icon={chevronBackOutline}
								/>
							</IonButtons>
							<IonButtons slot='secondary' style={{ color: 'transparent' }}>
								<IonButton>
									<IonIcon slot='icon-only' icon={addOutline} />
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='Chat'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>
						<IonRow>
							<IonCol></IonCol>
						</IonRow>
					</IonGrid>
				</IonContent>
				<IonToolbar>
					<IonFooter>
						<IonItem>
							<IonInput
								value={messageText}
								onIonChange={(e: any) => {
									setMessageText(e.target.value);
								}}
								type='text'
								placeholder='Escribe un mensaje'
							/>
							<IonButton
								disabled={messageText ? false : true}
								onClick={() => {
									sendMessage();
								}}
								slot='end'
								fill='clear'>
								<IonIcon icon={send} />
							</IonButton>
						</IonItem>
					</IonFooter>
				</IonToolbar>
			</IonPage>
		</>
	);
};

export default Chat;
