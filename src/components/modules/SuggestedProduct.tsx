import React, { useState, useEffect } from 'react';
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
import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
import ProductService from '../../services/UseCases/Product.Service';

interface SuggestedProductType {
	subcategory: string;
}

const SuggestedProduct = ({ subcategory }: SuggestedProductType) => {
	const { currentUser } = React.useContext(UserContext);
	const [products, setProducts] = useState([
		{ image: '', price: '', name: '' },
	]);
	useEffect(() => {
		const { getProductsBySubcategory } = new ProductService();
		getProductsBySubcategory(subcategory)
			.then((result: any) => {
				setProducts(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

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
				{products.map(({ image, price, name }: any, i) => {
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
										<IonText>
											<Translator
												from='en'
												to={currentUser.data.preferredLanguage || 'en'}
												text={name.substring(0, 22)}
												returnText={true}
												onTextTranslated={() => {}}
											/>
										</IonText>

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

export default SuggestedProduct;
