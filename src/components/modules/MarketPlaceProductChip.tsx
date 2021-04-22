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

const MarketPlaceProductChip = () => {
	const { selectedChip, setChip } = useContext(MarketPlaceProductChipContext);

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
									{'Apparel, Textiles & Accessories'}
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
									{'Agriculture & Food'}
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
									{'Home, Lights & Construction'}
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
