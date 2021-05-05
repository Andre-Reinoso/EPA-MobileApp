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
} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './';
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
					<Trasnlator
						from='en'
						to={currentUser.data.preferredLanguage}
						text='Profile User/Business'
						returnText={true}
						onTextTranslated={() => {}}
					/>
				</IonLabel>
				<IonIcon icon={chevronForwardOutline} />
			</IonItem>
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
					<Trasnlator
						from='en'
						to={currentUser.data.preferredLanguage}
						text='Products'
						returnText={true}
						onTextTranslated={() => {}}
					/>
				</IonLabel>
				<IonIcon icon={chevronForwardOutline} />
			</IonItem>
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
					<Trasnlator
						from='en'
						to={currentUser.data.preferredLanguage}
						text='Language'
						returnText={true}
						onTextTranslated={() => {}}
					/>
				</IonLabel>
				<IonIcon icon={chevronForwardOutline} />
			</IonItem>

			<IonItem
				onClick={() => {
					history.push('/selectCategory');
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
					<Trasnlator
						from='en'
						to={currentUser.data.preferredLanguage}
						text='Preferred categories'
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
						<IonIcon icon={paperPlaneOutline} />
					</IonButton>
				</IonButtons>

				<IonLabel>
					<Trasnlator
						from='en'
						to={currentUser.data.preferredLanguage}
						text='My Chats'
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
