import React, { useContext, useState } from 'react';
import {
	IonGrid,
	IonCol,
	IonRow,
	IonText,
	IonLabel,
	IonChip,
	IonAvatar,
	IonIcon,
	IonSlide,
	IonSlides,
} from '@ionic/react';
import {
	bannerTextilUrl,
	bannerCornUrl,
	bannerHomeUrl,
} from './../../utilities/assets';
import { MarketPlaceProductChipContext } from '../../context/MarketPlaceProductChip.Context';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements/';

const MarketPlaceProductChip = () => {
	const { selectedChip, setChip } = useContext(MarketPlaceProductChipContext);
	const { currentUser } = React.useContext(UserContext);

	return (
		<>
			<IonGrid className='my-1'>
				<IonRow>
					<IonSlides
						pager={false}
						scrollbar
						options={{
							zoom: false,
							grabCursor: false,
							slidesPerView: 1.4,
							spaceBetween: -50,
							watchSlidesVisibility: true,
							watchSlidesProgress: true,
							freeMode: true,
						}}>
						<IonSlide>
							<IonChip
								color={`${
									selectedChip === 'Apparel, Textiles & Accessories'
										? 'dark'
										: 'medium'
								}`}
								outline
								onClick={() => {
									setChip('Apparel, Textiles & Accessories');
								}}>
								<IonAvatar>
									<img
										style={{ width: '100px', height: '100%' }}
										src={bannerTextilUrl}
									/>
								</IonAvatar>
								<IonLabel
									color={`${
										selectedChip === 'Apparel, Textiles & Accessories'
											? 'dark'
											: 'medium'
									}`}
									className='fw-bolder'>
									<Trasnlator
										from='en'
										to={currentUser.data.preferredLanguage}
										text='Apparel, Textiles & Accessories'
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</IonLabel>
							</IonChip>
						</IonSlide>
						<IonSlide>
							<IonChip
								color={`${
									selectedChip === 'Agriculture & Food' ? 'dark' : 'medium'
								}`}
								outline
								onClick={() => {
									setChip('Agriculture & Food');
								}}>
								<IonAvatar>
									<img
										src={bannerCornUrl}
										style={{ width: '100px', height: '100%' }}
									/>
								</IonAvatar>
								<IonLabel
									color={`${
										selectedChip === 'Agriculture & Food' ? 'dark' : 'medium'
									}`}
									className='fw-bolder'>
									<Trasnlator
										from='en'
										to={currentUser.data.preferredLanguage}
										text='Agriculture & Food'
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</IonLabel>
							</IonChip>
						</IonSlide>
						<IonSlide>
							<IonChip
								color={`${
									selectedChip === 'Home, Lights & ConstructionF'
										? 'dark'
										: 'medium'
								}`}
								outline
								onClick={() => {
									setChip('Home, Lights & Construction');
								}}>
								<IonAvatar>
									<img
										src={bannerHomeUrl}
										style={{ width: '100px', height: '100%' }}
									/>
								</IonAvatar>
								<IonLabel
									color={`${
										selectedChip === 'Home, Lights & Construction'
											? 'dark'
											: 'medium'
									}`}
									className='fw-bolder'>
									<Trasnlator
										from='en'
										to={currentUser.data.preferredLanguage}
										text='Home, Lights & Construction'
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</IonLabel>
							</IonChip>
						</IonSlide>
					</IonSlides>
				</IonRow>
			</IonGrid>
		</>
	);
};

export default MarketPlaceProductChip;
