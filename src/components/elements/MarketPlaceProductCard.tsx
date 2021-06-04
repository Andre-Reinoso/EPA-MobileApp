import React, { useState, useEffect } from 'react';
import {
	IonGrid,
	IonCol,
	IonRow,
	IonAvatar,
	IonImg,
	IonText,
} from '@ionic/react';
import { UserContext } from '../../context/User.Context';
import Translator from './Translator';
interface ProductCardType {
	title: string;
	img: string;
	description: string;
	price: number;
	onClick?: (x: React.MouseEvent) => void;
}

const MarketPlaceProductCard = ({
	title,
	img,
	price,
	description,
	...props
}: ProductCardType) => {
	const { currentUser } = React.useContext(UserContext);

	return (
		<>
			<IonGrid>
				<IonRow {...props}>
					<IonCol>
						<IonAvatar
							style={{
								width: '100%',
								height: '145px',
							}}
							className='ion-border-radius-sm'>
							<IonImg src={img} />
						</IonAvatar>
					</IonCol>
					<IonCol size='7'>
						<div className=''>
							<h6 className='fw-bolder m-0'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text={title}
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</h6>
							<p className='ion-text-size-xs ion-text-lowercase'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text={description}
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</p>
							<p>
								<IonText color='primary' className='fw-bolder ion-text-size-md'>
									${price}
								</IonText>
							</p>
						</div>
					</IonCol>
				</IonRow>
			</IonGrid>
		</>
	);
};
export default MarketPlaceProductCard;
