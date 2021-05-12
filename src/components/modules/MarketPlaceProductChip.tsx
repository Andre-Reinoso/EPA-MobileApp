import React, { useContext, useEffect, useState } from 'react';
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
import { db } from '../../services/firebase/firebase.config';

const MarketPlaceProductChip = () => {
	const { selectedChip, setChip } = useContext(MarketPlaceProductChipContext);
	const { currentUser } = React.useContext(UserContext);
	const [categories, setCategories] = useState<Array<any>>();
	useEffect(() => {
		let unsubscribe = db.collection('categories').onSnapshot((categories) => {
			let listOfCategories: any = [];
			categories.forEach((category) => {
				listOfCategories.push(category.data());
			});
			setCategories(listOfCategories);

			return () => {
				unsubscribe();
			};
		});
	}, []);

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
							slidesPerView: 2.2,
							spaceBetween: 5,
							watchSlidesVisibility: true,
							watchSlidesProgress: true,
							freeMode: true,
						}}>
						{categories?.map(({ name }, i) => {
							return (
								<IonSlide key={i}>
									<IonChip
										color={`${selectedChip === name ? 'dark' : 'medium'}`}
										outline
										onClick={() => {
											setChip(name);
										}}>
										<IonLabel
											color={`${selectedChip === name ? 'dark' : 'medium'}`}
											className='fw-bolder'>
											<Trasnlator
												from='es'
												to={currentUser.data.preferredLanguage || 'en'}
												text={name}
												returnText={true}
												onTextTranslated={() => {}}
											/>
										</IonLabel>
									</IonChip>
								</IonSlide>
							);
						})}
					</IonSlides>
				</IonRow>
			</IonGrid>
		</>
	);
};

export default MarketPlaceProductChip;
