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

const MyChatsTemplate: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);
	const history = useHistory();
	const [myChats, setMyChats] = useState<Array<any>>();


	useEffect(() => {
		db.collection('messages')
			//.where('userSellerId', '==', currentUser.data.userId)
			.onSnapshot((result) => {
				let listOfchats: any = [];
				result.forEach((chat: any) => {
					listOfchats.push({ chatId: chat.id, ...chat.data() });
				});
				setMyChats(listOfchats);
			});
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
											history.push(`/chat/`);
										}}>
										<IonThumbnail
											slot='start'
											style={{ width: '65px', height: '65px' }}>
											<IonImg className='ion-border-radius-sm' src={chat.image} />
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
