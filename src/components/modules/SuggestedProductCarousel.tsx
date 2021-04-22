import React, { useState } from 'react';
import {
	IonSlide,
	IonSlides,
	IonAvatar,
	IonImg,
	IonCard,
	IonCardHeader,
	IonCardSubtitle,
	IonText,
} from '@ionic/react';

interface ProductType {
	image: string;
	title: string;
	price: number;
}

interface SuggestedProductCarouselType {
	products: Array<ProductType>;
}

const ProductCarousel = ({ products }: SuggestedProductCarouselType) => {
	return (
		<>
			<IonSlides
				pager={false}
				options={{
					zoom: true,
					grabCursor: true,
					slidesPerView: 1.7,
					spaceBetween: 2,
					freeMode: true,
					centeredSlides: false,
					initialSlide: 0,
				}}>
				{products.map(({ image, price, title }, i) => {
					return (
						<IonSlide key={i}>
							<IonCard>
								<IonAvatar
									style={{
										width: '100%',
										height: '170px',
									}}
									className='ion-border-radius-sm'>
									<IonImg src={image} />
								</IonAvatar>

								<IonCardHeader>
									<IonCardSubtitle className='fw-bolder ion-text-left'>
										<IonText color='dark'>{title.substring(0, 22)}...</IonText>

										<IonText
											color='primary'
											className='fw-bolder ion-float-right my-1'>
											{price}
										</IonText>
									</IonCardSubtitle>
								</IonCardHeader>
							</IonCard>
						</IonSlide>
					);
				})}
			</IonSlides>
		</>
	);
};

export default ProductCarousel;
