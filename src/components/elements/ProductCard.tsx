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
import { Trasnlator } from './';
interface ProductCardType {
	title: string;
	img: string;
	description: string;
	price: number;
	onClick?: (x: React.MouseEvent) => void;
}

const Translator = ({
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
								<Trasnlator
									from='en'
									to={currentUser.data.preferredLanguage}
									text={title}
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</h6>
							<p className='ion-text-size-xs ion-text-lowercase'>
								<Trasnlator
									from='en'
									to={currentUser.data.preferredLanguage}
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
export default Translator;
