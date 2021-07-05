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
import TranslateService from '../services/Translate/Translate.Service';
import { ChatFeed, Message } from 'react-chat-ui';

const Chat: React.FC = () => {
	const { currentUser } = useContext(UserContext);
	const [messages, setMessages] = useState<any>([]);
	const [otherMessages, setOtherMessages] = useState<any>([]);

	const [present, dismiss] = useIonToast();
	const [messageText, setMessageText] = useState('');

	const [viewMessages, setViewMessages] = useState<any>([]);

	useEffect(() => {
		//mis mensaje
		const unsubscribe = db
			.collection('messages')
			.where('from', '==', 'lziC46Nhxz1BmBimj1oG')
			.where('to', '==', 'PrUWja9cowU77DlebpuGiTEWy0D2')
			.onSnapshot((myMessages) => {
				let listOfMessages: Array<any> = [];
				myMessages.forEach((message: any) => {
					listOfMessages.push({ ...message.data() });
				});
				//setMessages(listOfMessages);
				db.collection('messages')
					.where('from', '==', 'PrUWja9cowU77DlebpuGiTEWy0D2')
					.where('to', '==', 'lziC46Nhxz1BmBimj1oG')
					.onSnapshot((otherMessages) => {
						let listOfOtherMessages: Array<any> = [];
						otherMessages.forEach((message: any) => {
							listOfOtherMessages.push({ ...message.data() });
						});
						//setOtherMessages(listOfOtherMessages);
						for (const i in listOfOtherMessages) {
							listOfMessages.push(listOfOtherMessages[i]);
						}
						const sortedMessages = listOfMessages
							.sort((x: any, y: any) => {
								let a: any = new Date(x.createAt);
								let b: any = new Date(y.createAt);
								return a - b;
							})
							.map((m) => {
								return new Message({
									id: m.from == 'lziC46Nhxz1BmBimj1oG' ? 0 : 1,
									message: `${m.messageText}`,
									senderName: m.createAt,
								});
							});
						setMessages(sortedMessages);
					});
			});

		return () => {
			unsubscribe();
		};
	}, []);

	useEffect(() => {
		//sobreescribir primer array
		//setMessages(sortedMessages);
	}, []);
	useEffect(() => {
		messages.map((message: any, i: any) => {
			setViewMessages(
				new Message({
					id: message.from == 'lziC46Nhxz1BmBimj1oG' ? 0 : 1,
					message: `${message.messageText}`,
					senderName: message.createAt,
				})
			);
		});
	}, []);

	function formatAMPM(date: any) {
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		let ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0' + minutes : minutes;
		seconds = seconds < 10 ? '0' + seconds : seconds;
		let strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
		return strTime;
	}

	const sendMessage = async () => {
		if (messageText) {
			try {
				const monthNames = [
					'Jan',
					'Feb',
					'Mar',
					'Apr',
					'May',
					'Jun',
					'Jul',
					'Aug',
					'Sep',
					'Oct',
					'Nov',
					'Dec',
				];
				let date = new Date();
				let day = date.getDate();
				let month = monthNames[date.getMonth()];
				let year = date.getFullYear();
				const { translateText } = new TranslateService();
				await db.collection('messages').add({
					createAt: `${month} ${day}, ${year}, ${formatAMPM(date)}`,
					from: 'lziC46Nhxz1BmBimj1oG',
					to: 'PrUWja9cowU77DlebpuGiTEWy0D2',
					translatedMessage: await translateText(messageText, 'en', 'es'),
					messageText,
					viewed: false,
				});
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
							<IonCol>
								<ChatFeed
									messages={messages} // Array: list of message objects
									isTyping={false} // Boolean: is the recipient typing
									hasInputField={false} // Boolean: use our input, or use your own
									showSenderName={true} // show the name of the user who sent the message
									bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
									// JSON: Custom bubble styles
									bubbleStyles={{
										text: {
											fontSize: 15,
										},
										chatbubble: {
											borderRadius: 10,
											padding: 10,
											backgroundColor:"#e83542"
										},
									}}
								/>

								{/* {messages.map((message: any, i: any) => {
									return (
										<div key={i}>
											<Translator
												from='en'
												to={currentUser.data.preferredLanguage || 'en'}
												text={message.messageText}
												returnText={true}
												onTextTranslated={() => {}}
											/>
											<br />
											{message.translatedMessage}
											<br />
											{message.createAt}
										</div>
									);
								})} */}
							</IonCol>
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
