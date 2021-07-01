import React, { useEffect, useState } from 'react';
import {
	IonCol,
	IonItem,
	IonLabel,
	IonList,
	IonRow,
	IonImg,
	IonThumbnail,
	IonIcon,
	IonItemSliding,
	IonItemOptions,
	IonItemOption,
} from '@ionic/react';
import PieTotalSalesProduct from '../modules/PieTotalSalesProduct';
import BarTotalSalesProduct from '../modules/BarTotalSalesProduct';
import { chevronForwardOutline, trashOutline } from 'ionicons/icons';

import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
import { db } from '../../config/Firebase.config';
import { useHistory } from 'react-router';
import UserService from '../../services/UseCases/User.Service';

const MyChatsTemplate: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);
	const history = useHistory();
	const [myChats, setMyChats] = useState<Array<any>>();

	useEffect(() => {
		db.collection('quotation')
			.where(
				currentUser.data.isSeller ? 'userSellerId' : 'userId',
				'==',
				currentUser.data.userId
			)
			.onSnapshot((result) => {
				let listOfquotations: any = [];
				result.forEach((quotation: any) => {
					listOfquotations.push({
						docId: quotation.id,
						id: quotation.data().userSellerId,
					});
				});
				setMyChats(listOfquotations);
			});

		// db.collection('messages')
		// 	//	.where('userSellerId', '==', currentUser.data.userId)
		// 	.onSnapshot((result) => {
		// 		let listOfchats: any = [];
		// 		result.forEach((chat: any) => {
		// 			listOfchats.push({ chatId: chat.id, ...chat.data() });
		// 		});
		// 		setMyChats(listOfchats);
		// 	});
	}, []);

	return (
		<>
			<IonRow>
				<IonCol>
					<IonList>
						<IonItem>
							<h3>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='My Chats'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</h3>
						</IonItem>
						{myChats?.map((chat, i) => {
							return (
								<IonItemSliding key={i}>
									<IonItem
										onClick={() => {
											history.push(`/chat/${chat.id}`);
										}}>
										<IonThumbnail
											slot='start'
											style={{ width: '65px', height: '65px' }}>
											<IonImg
												className='ion-border-radius-sm'
												src={"https://firebasestorage.googleapis.com/v0/b/explore-peru-from-abroad.appspot.com/o/Assets%2Fuser%20icon.png?alt=media&token=31e6e8ce-1a28-47d4-8fd8-b6c9b60b518b"}
											/>
										</IonThumbnail>
										<IonLabel>
											<h3>
												<Translator
													from='en'
													to={currentUser.data.preferredLanguage || 'en'}
													text={chat.name}
													returnText={true}
													onTextTranslated={() => {}}
												/>
											</h3>
										</IonLabel>
										<IonIcon icon={chevronForwardOutline} />
									</IonItem>
								</IonItemSliding>
							);
						})}
					</IonList>
				</IonCol>
			</IonRow>
		</>
	);
};

export default MyChatsTemplate;
