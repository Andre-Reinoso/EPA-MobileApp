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
	const favoriteProductsIds: Array<string> = currentUser.data.favoriteProduct;
	useEffect(() => {
		if (favoriteProductsIds.length !== 0) {
			db.collection('products')
				.where('productId', 'in', favoriteProductsIds)
				.get()
				.then((result) => {
					let allFavoriteProducts: any = [];
					result.forEach((products) => {
						allFavoriteProducts.push({
							...products.data(),
						});
					});
					setFavoriteProducts(allFavoriteProducts);
					setloading(false);
				})
				.catch((err) => {
					console.log(err);
					setloading(false);
				});
			// db.collection('products')
			// 	.where('productId', 'in', favoriteProductsIds)
			// 	.onSnapshot((result) => {
			// 		let allFavoriteProducts: any = [];
			// 		result.forEach((products) => {
			// 			allFavoriteProducts.push({ ...products.data() });
			// 		});
			// 		setFavoriteProducts(allFavoriteProducts);
			// 		setloading(false);
			// 	});
		}
	}, [favoriteProducts]);

	return (
		<>
			<IonRow>
				<IonCol>
					{favoriteProductsIds.length === 0 && (
						<h1>You don't have favorite products</h1>
					)}
					{loading ? (
						<div className='ion-text-center'>
							<IonSpinner color='primary' />
						</div>
					) : (
						favoriteProducts.map((product, i) => {
							return (
								<MarketPlaceProductCard
									key={i}
									title={product.name}
									description={product.description}
									img={product.image}
									price={product.price}
									onClick={() => {
										history.push(`/productDetail/${product.productId}`);
									}}
								/>
							);
						})
					)}
				</IonCol>
			</IonRow>
		</>
	);
};

export default FavoriteProducts;
