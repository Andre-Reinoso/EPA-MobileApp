import React, { useEffect, useState, useContext } from 'react';
import { IonGrid, IonCol, IonRow, IonText } from '@ionic/react';
import { MarketPlaceTabContext } from './../../context/MarketPlaceTab.Context';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements/';
const MarketPlaceTab = () => {
	const { selectedTab, setTab } = useContext(MarketPlaceTabContext);
	const { currentUser } = React.useContext(UserContext);

	return (
		<>
			<IonGrid className='my-1'>
				<IonRow>
					<IonCol>
						<p
							onClick={() => {
								setTab('Products');
							}}
							className={`${
								selectedTab === 'Products'
									? 'ion-text-size-md ion-border-bottom fw-bold'
									: 'ion-text-size-sm fw-bolder'
							}  ion-text-center  m-0`}>
							<IonText
								color={`${selectedTab === 'Products' ? 'dark' : 'medium'}`}>
								<Trasnlator
									from='en'
									to={currentUser.data.preferredLanguage}
									text='Products'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonText>
						</p>
					</IonCol>
					<IonCol>
						<p
							onClick={() => {
								setTab('Favorites');
							}}
							className={`${
								selectedTab === 'Favorites'
									? 'ion-text-size-md ion-border-bottom fw-bold'
									: 'ion-text-size-sm fw-bolder'
							}  ion-text-center  m-0`}>
							<IonText
								color={`${selectedTab === 'Favorites' ? 'dark' : 'medium'}`}>
								<Trasnlator
									from='en'
									to={currentUser.data.preferredLanguage}
									text='Favorites'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonText>
						</p>
					</IonCol>
					<IonCol>
						<p
							onClick={() => {
								setTab('New Products');
							}}
							className={`${
								selectedTab === 'New Products'
									? 'ion-text-size-md ion-border-bottom fw-bold'
									: 'ion-text-size-sm fw-bolder'
							}  ion-text-center  m-0`}>
							<IonText
								color={`${selectedTab === 'New Products' ? 'dark' : 'medium'}`}>
								<Trasnlator
									from='en'
									to={currentUser.data.preferredLanguage}
									text='New Products'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonText>
						</p>
					</IonCol>
				</IonRow>
			</IonGrid>
		</>
	);
};

export default MarketPlaceTab;
