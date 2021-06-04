import React, { useEffect, useState } from 'react';
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
import Translator from '../elements/Translator';
import ProductService from '../../services/UseCases/Product.Service';

interface OtherProductType {
	category: string;
}

const OtherProduct = ({ category }: OtherProductType) => {
	const { currentUser } = React.useContext(UserContext);
	const [products, setProducts] = useState([
		{ image: '', price: '', name: '', description: '' },
	]);
	useEffect(() => {
		const { getProductsByCategory } = new ProductService();
		getProductsByCategory(category)
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
					slidesPerView: 1.1,
					spaceBetween: 2,
					freeMode: true,
					centeredSlides: false,
					initialSlide: 0,
				}}>
				{products.map(({ image, price, name, description }, i) => {
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
												<Translator
													from='en'
													to={currentUser.data.preferredLanguage || 'en'}
													text={name.substring(0, 22)}
													returnText={true}
													onTextTranslated={() => {}}
												/>
											</h6>
											<p className='ion-text-size-xs'>
												<Translator
													from='en'
													to={currentUser.data.preferredLanguage || 'en'}
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

export default OtherProduct;
