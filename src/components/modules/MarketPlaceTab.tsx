import React, { useEffect, useState, useContext } from 'react';
import { IonGrid, IonCol, IonRow, IonText } from '@ionic/react';
import { MarketPlaceTabContext } from './../../context/MarketPlaceTab.Context';

const MarketPlaceTab = () => {
	const { selectedTab, setTab } = useContext(MarketPlaceTabContext);

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
								Products
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
								Favorites
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
								New Products
							</IonText>
						</p>
					</IonCol>
				</IonRow>
			</IonGrid>
		</>
	);
};

export default MarketPlaceTab;
