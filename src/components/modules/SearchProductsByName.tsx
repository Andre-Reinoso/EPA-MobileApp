import React, { useState, useEffect } from 'react';
import { IonRow, IonCol, IonSpinner } from '@ionic/react';
import { db } from '../../config/Firebase.config';
import MarketPlaceProductCard from '../elements/MarketPlaceProductCard';
import { useHistory } from 'react-router';

interface PropsSearchProductByName {
	name: string;
}

const SearchProductsByName = ({ name }: PropsSearchProductByName) => {
	const [products, setProducts] = useState<Array<any>>();
	const [loading, setloading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		const unsubscribe = db
			.collection('products')
			.orderBy('name')
			.startAt(name)
			.endAt(name + '\uf8ff')
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

export default SearchProductsByName;
