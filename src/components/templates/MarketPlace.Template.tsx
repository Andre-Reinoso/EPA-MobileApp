import React, { useContext, useEffect, useState } from 'react';

import { IonRow, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { MarketPlaceTab, MarketPlaceProductChip } from './../modules/';

import { ProductCard } from './../elements/';
import { MarketPlaceTabContext } from '../../context/MarketPlaceTab.Context';
import { aretes, camisa, platos } from '../../utilities/assets';
import { db } from '../../services/firebase/firebase.config';

const MarketPlaceTemplate: React.FC = () => {
	const [products, setProducts] = useState<Array<any>>();

	useEffect(() => {
		let unsubscribe = db.collection('products').onSnapshot((products) => {
			let listOfProducts: any = [];
			products.forEach((product) => {
				listOfProducts.push({ productId: product.id, ...product.data() });
			});
			setProducts(listOfProducts);

			return () => {
				unsubscribe();
			};
		});
	}, [products]);
	const history = useHistory();

	const { selectedTab } = useContext(MarketPlaceTabContext);
	return (
		<>
			<IonRow>
				<IonCol>
					<MarketPlaceTab />

					{selectedTab === 'Products' && (
						<>
							<MarketPlaceProductChip />
							{products?.map(
								({ productId, image, name, price, description }, i) => {
									return (
										<ProductCard
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
					{selectedTab === 'Favorites' && (
						<>
							{[
								{
									title: 'Spread Plate #24 - 105gr. - PT240M',
									description: 'Plate in different designs to contain food.',
									img: platos,
									price: 15.5,
								},

								{
									title: 'Cotton Shirt with Bag Contrast',
									description: 'Classic shirt 80111',
									img: camisa,
									price: 15.5,
								},
								{
									title: 'Blue Folk Earrings - Code AP0501A',
									description: 'Fashion earrings Folk trend.',
									img: aretes,
									price: 15.5,
								},
							].map(({ title, description, img, price }, i) => {
								return (
									<ProductCard
										key={i}
										title={title}
										description={description}
										img={img}
										price={price}
										onClick={() => {}}
									/>
								);
							})}
						</>
					)}
					{selectedTab === 'New Products' && (
						<>
							{products?.map(({ image, name, price, description }, i) => {
								return (
									<ProductCard
										key={i}
										title={name}
										description={description}
										img={image}
										price={price}
									/>
								);
							})}
						</>
					)}
				</IonCol>
			</IonRow>
		</>
	);
};

export default MarketPlaceTemplate;
