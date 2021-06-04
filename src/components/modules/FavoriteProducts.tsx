import React, { useState, useEffect, useContext } from 'react';
import { IonRow, IonCol, IonSpinner, IonCard } from '@ionic/react';
import MarketPlaceProductCard from '../elements/MarketPlaceProductCard';
import { db } from '../../config/Firebase.config';
import { useHistory } from 'react-router';
import ProductService from '../../services/UseCases/Product.Service';
import { UserContext } from '../../context/User.Context';

const FavoriteProducts: React.FC = () => {
	const history = useHistory();
	const [favoriteProducts, setFavoriteProducts] = useState<Array<any>>([]);
	const [loading, setloading] = useState(true);
	const { currentUser } = useContext(UserContext);
	let listOfProducts: Array<any> = currentUser.data.favoriteProduct;
	const idsFavoriteProducts: Array<any> = currentUser.data.favoriteProduct;

	useEffect(() => {
		if (idsFavoriteProducts.length !== 0) {
			let allFavoriteProducts: any = [];
			for (let index = 0; index < idsFavoriteProducts.length; index++) {
				db.collection('products')
					.doc(idsFavoriteProducts[index])
					.get()
					.then((result) => {
						allFavoriteProducts.push({
							productId: result.id,
							...result.data(),
						});
					})
					.catch((err) => {});
			}
			console.log(allFavoriteProducts);
			setFavoriteProducts(allFavoriteProducts);
			setloading(false);
		}
		setloading(false);
	}, [listOfProducts]);

	return (
		<>
			<IonRow>
				<IonCol>
					{idsFavoriteProducts.length === 0 && <h1>no products</h1>}

					{loading ? (
						<div className='ion-text-center'>
							<IonSpinner color='primary' />
						</div>
					) : (
						favoriteProducts?.map(
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

export default FavoriteProducts;
