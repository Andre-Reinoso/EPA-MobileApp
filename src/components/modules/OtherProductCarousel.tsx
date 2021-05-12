import React, { useState } from 'react';
import {
	IonSlide,
	IonSlides,
	IonAvatar,
	IonImg,
	IonGrid,
	IonRow,
	IonCol,
	IonText,
} from '@ionic/react';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements/';
interface ProductType {
	image: string;
	title: string;
	price: number;
	description: string;
}

interface ProductCarouselType {
	products: Array<ProductType>;
}

const OtherProductCarousel = ({ products }: ProductCarouselType) => {
	const { currentUser } = React.useContext(UserContext);

	return (
		<>
			<IonSlides
				pager={false}
				options={{
					zoom: true,
					grabCursor: true,
					slidesPerView: 1.1,
					spaceBetween: 2,
					freeMode: true,
					centeredSlides: false,
					initialSlide: 0,
				}}>
				{products.map(({ image, price, title, description }, i) => {
					return (
						<IonSlide key={i}>
							<IonGrid>
								<IonRow>
									<IonCol>
										<IonAvatar
											style={{
												width: '100%',
												height: '100px',
											}}
											className='ion-border-radius-sm'>
											<IonImg src={image} />
										</IonAvatar>
									</IonCol>
									<IonCol size='8'>
										<div className='ion-text-left p-0'>
											<h6 className='fw-bolder m-0'>
												<Trasnlator
													from='en'
													to={currentUser.data.preferredLanguage|| 'en'}
													text={title.substring(0, 22)}
													returnText={true}
													onTextTranslated={() => {}}
												/>
											</h6>
											<p className='ion-text-size-xs'>
												<Trasnlator
													from='en'
													to={currentUser.data.preferredLanguage|| 'en'}
													text={description.substring(0, 35)}
													returnText={true}
													onTextTranslated={() => {}}
												/>
											</p>
											<p className=''>
												<IonText color='primary' className='fw-bolder '>
													${price}
												</IonText>
											</p>
										</div>
									</IonCol>
								</IonRow>
							</IonGrid>
						</IonSlide>
					);
				})}
			</IonSlides>
		</>
	);
};

export default OtherProductCarousel;
