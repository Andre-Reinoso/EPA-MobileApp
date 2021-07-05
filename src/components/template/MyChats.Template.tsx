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
	IonSpinner,
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
	const [isLoading, setIsLoading] = useState(true);
	const [myChats, setMyChats] = useState<any>();

	useEffect(() => {
		db.collection('users')
			.doc('PrUWja9cowU77DlebpuGiTEWy0D2')
			.onSnapshot((result) => {
				setMyChats(result.data());
				setIsLoading(false);
			});
		//PrUWja9cowU77DlebpuGiTEWy0D2 usuario a buscar
		//lziC46Nhxz1BmBimj1oG  mi usuario
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

						{isLoading ? (
							<div className='ion-text-center'>
								<IonSpinner color='primary' name="crescent" />
							</div>
						) : (
							<IonItemSliding>
								<IonItem
									onClick={() => {
										history.push(`/chat/${myChats.uid}`);
									}}>
									<IonThumbnail
										slot='start'
										style={{ width: '65px', height: '65px' }}>
										<IonImg
											className='ion-border-radius-full'
											src={
												'https://firebasestorage.googleapis.com/v0/b/explore-peru-from-abroad.appspot.com/o/Assets%2Fuser%20icon.png?alt=media&token=31e6e8ce-1a28-47d4-8fd8-b6c9b60b518b'
											}
										/>
									</IonThumbnail>
									<IonLabel>
										<h3>{myChats.email}</h3>
									</IonLabel>
									<IonIcon icon={chevronForwardOutline} />
								</IonItem>
							</IonItemSliding>
						)}
					</IonList>
				</IonCol>
			</IonRow>
		</>
	);
};

export default MyChatsTemplate;
