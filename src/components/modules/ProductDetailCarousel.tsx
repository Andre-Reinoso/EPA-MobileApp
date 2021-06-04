import React, { useState } from 'react';
import { IonSlide, IonSlides, IonAvatar, IonImg } from '@ionic/react';

interface ProductCarouselType {
	gallery: Array<string>;
}

const ProductDetailCarousel = ({ gallery }: ProductCarouselType) => {
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
				{gallery.map((image, i) => {
					return (
						<IonSlide key={i}>
							<IonAvatar
								style={{
									width: '100%',
									height: '275px',
								}}
								className='ion-border-radius-sm'>
								<IonImg src={image} />
							</IonAvatar>
						</IonSlide>
					);
				})}
			</IonSlides>
		</>
	);
};

export default ProductDetailCarousel;
