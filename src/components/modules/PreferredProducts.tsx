import React, { useState, useEffect } from 'react';
import {
	IonRow,
	IonCol,
	IonSpinner,
	IonRange,
	IonList,
	IonItem,
	IonListHeader,
} from '@ionic/react';
import { db } from '../../config/Firebase.config';
import MarketPlaceProductCard from '../elements/MarketPlaceProductCard';
import { useHistory } from 'react-router';

const PreferredProducts: React.FC = () => {
	const [products, setProducts] = useState<Array<any>>();
	const [loading, setloading] = useState(true);
	const [rangeValue, setRangeValue] = useState<any>({
		lower: 0,
		upper: 300,
	});
	const history = useHistory();

	useEffect(() => {
		const unsubscribe = db
			.collection('products')
			.where('price', '>=', rangeValue.lower)
			.where('price', '<=', rangeValue.upper)
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
						<>
							<IonList>
								<IonItem>
									<h5>Precio</h5>
									<IonRange
										onIonChange={(e) => setRangeValue(e.detail.value as any)}
										value={{
											lower: rangeValue.lower,
											upper: rangeValue.upper,
										}}
										dualKnobs
										min={0}
										max={300}
										step={10}
										pin
										snaps></IonRange>
								</IonItem>
							</IonList>
							{products?.map(
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
							)}
						</>
					)}
				</IonCol>
			</IonRow>
		</>
	);
};

export default PreferredProducts;
