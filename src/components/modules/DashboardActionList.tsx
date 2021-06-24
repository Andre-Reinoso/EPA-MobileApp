import React, { useState, useEffect } from 'react';
import {
	IonButton,
	IonList,
	IonItem,
	IonLabel,
	IonIcon,
	IonButtons,
} from '@ionic/react';
import {
	albumsOutline,
	business,
	chevronForwardOutline,
	cubeOutline,
	languageOutline,
	paperPlaneOutline,
	pushOutline,
	chatboxOutline,
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
const DashboardActionList = () => {
	const history = useHistory();
	const { currentUser } = React.useContext(UserContext);

	return (
		<IonList>
			<IonItem
				onClick={() => {
					history.push('/profile');
				}}>
				<IonButtons slot='start'>
					<IonButton
						style={{
							backgroundColor: '#e51e2d',
							borderRadius: '50%',
							color: 'white',
							width: '40px',
							height: '40px',
						}}>
						<IonIcon icon={business} />
					</IonButton>
				</IonButtons>

				<IonLabel>
					<Translator
						from='en'
						to={currentUser.data.preferredLanguage || 'en'}
						text='Profile User/Business'
						returnText={true}
						onTextTranslated={() => {}}
					/>
				</IonLabel>
				<IonIcon icon={chevronForwardOutline} />
			</IonItem>
			{currentUser.data.isSeller && (
				<IonItem
					onClick={() => {
						history.push('/myProducts');
					}}>
					<IonButtons slot='start'>
						<IonButton
							style={{
								backgroundColor: '#ffc409',
								borderRadius: '50%',
								color: 'white',
								width: '40px',
								height: '40px',
							}}>
							<IonIcon icon={cubeOutline} />
						</IonButton>
					</IonButtons>

					<IonLabel>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Products'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonIcon icon={chevronForwardOutline} />
				</IonItem>
			)}

			<IonItem
				onClick={() => {
					history.push('/selectLanguage');
				}}>
				<IonButtons slot='start'>
					<IonButton
						style={{
							backgroundColor: '#5260ff',
							borderRadius: '50%',
							color: 'white',
							width: '40px',
							height: '40px',
						}}>
						<IonIcon icon={languageOutline} />
					</IonButton>
				</IonButtons>

				<IonLabel>
					<Translator
						from='en'
						to={currentUser.data.preferredLanguage || 'en'}
						text='Language'
						returnText={true}
						onTextTranslated={() => {}}
					/>
				</IonLabel>
				<IonIcon icon={chevronForwardOutline} />
			</IonItem>
			
				<IonItem
					onClick={() => {
						history.push('/myQuotes');
					}}>
					<IonButtons slot='start'>
						<IonButton
							style={{
								backgroundColor: '#3dc2ff',
								borderRadius: '50%',
								color: 'white',
								width: '40px',
								height: '40px',
							}}>
							<IonIcon icon={albumsOutline} />
						</IonButton>
					</IonButtons>

					<IonLabel>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Quotes'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonIcon icon={chevronForwardOutline} />
				</IonItem>
		
			<IonItem
				onClick={() => {
					history.push('/myChats');
				}}>
				<IonButtons slot='start'>
					<IonButton
						style={{
							backgroundColor: '#2dd36f',
							borderRadius: '50%',
							color: 'white',
							width: '40px',
							height: '40px',
						}}>
						<IonIcon icon={chatboxOutline} />
					</IonButton>
				</IonButtons>

				<IonLabel>
					<Translator
						from='en'
						to={currentUser.data.preferredLanguage || 'en'}
						text='My Chats'
						returnText={true}
						onTextTranslated={() => {}}
					/>
				</IonLabel>
				<IonIcon icon={chevronForwardOutline} />
			</IonItem>

			<IonItem
				onClick={() => {
					history.push('/myAlerts');
				}}>
				<IonButtons slot='start'>
					<IonButton
						style={{
							backgroundColor: '#eb445a',
							borderRadius: '50%',
							color: 'white',
							width: '40px',
							height: '40px',
						}}>
						<IonIcon icon={pushOutline} />
					</IonButton>
				</IonButtons>

				<IonLabel>
					<Translator
						from='en'
						to={currentUser.data.preferredLanguage || 'en'}
						text='Alerts'
						returnText={true}
						onTextTranslated={() => {}}
					/>
				</IonLabel>
				<IonIcon icon={chevronForwardOutline} />
			</IonItem>
		</IonList>
	);
};
export default DashboardActionList;
