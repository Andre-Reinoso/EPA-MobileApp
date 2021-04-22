import React, { useState } from 'react';
import { IonSlide, IonSlides, IonAvatar, IonImg } from '@ionic/react';

interface ProductType {
	image: string;
}

interface ProductCarouselType {
	products: Array<ProductType>;
}

const ProductCarousel = ({ products }: ProductCarouselType) => {
	return (
		<>
			<IonSlides
				pager={true}
				options={{
					zoom: true,
					grabCursor: true,
					slidesPerView: 1.8,
					spaceBetween: 15,
					freeMode: true,
					centeredSlides: true,
					initialSlide: 1,
				}}>
				{products.map((value, i) => {
					return (
						<IonSlide key={i}>
							<IonAvatar
								style={{
									width: '100%',
									height: '275px',
								}}
								className='ion-border-radius-sm'>
								<IonImg src={value.image} />
							</IonAvatar>
						</IonSlide>
					);
				})}
			</IonSlides>
		</>
	);
};

export default ProductCarousel;
