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

const DashboardActionList = () => {
	const history = useHistory();

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

				<IonLabel>Profile User/Business</IonLabel>
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

				<IonLabel>Products</IonLabel>
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

				<IonLabel>Language</IonLabel>
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

				<IonLabel>Preferred categories</IonLabel>
				<IonIcon icon={chevronForwardOutline} />
			</IonItem>

			<IonItem>
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

				<IonLabel>Chat</IonLabel>
				<IonIcon icon={chevronForwardOutline} />
			</IonItem>
		</IonList>
	);
};
export default DashboardActionList;
