import React, { useEffect, useState } from 'react';
import { IonRow, IonCol, IonButton, IonSpinner, IonCard } from '@ionic/react';
import { db } from '../../config/Firebase.config';
import MarketPlaceProductCard from '../elements/MarketPlaceProductCard';
import { useHistory } from 'react-router';

const NewProducts: React.FC = () => {
	const history = useHistory();
	const [products, setProducts] = useState<Array<any>>();
	const [loading, setloading] = useState(true);
	useEffect(() => {
		const unsubscribe = db
			.collection('products')
			.onSnapshot((productsCollection) => {
				let allProducts: any = [];
				productsCollection.forEach((productDoc) => {
					allProducts.push({
						productId: productDoc.id,
						...productDoc.data(),
					});
				});
				setloading(false);
				setProducts(allProducts);
			});
		return () => {
			unsubscribe();
		};
	}, [products]);

	return (
		<>
			<IonRow>
				<IonCol>
					{loading ? (
						<div className='ion-text-center'>
							<IonSpinner color='primary' />
						</div>
					) : (
						products?.map(
							({ name, description, image, price, productId }: any, i) => {
								return (
									<MarketPlaceProductCard
										key={i}
										title={name}
										description={description}
										img={image}
										price={price}
										onClick={() => {
											history.push(`/productDetail/${productId}`);
										}}
									/>
								);
							}
						)
					)}
				</IonCol>
			</IonRow>
		</>
	);
};

export default NewProducts;
