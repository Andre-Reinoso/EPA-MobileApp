import React, { useContext } from 'react';

import { IonRow, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { MarketPlaceTab, MarketPlaceProductChip } from './../modules/';

import { ProductCard } from './../elements/';
import { MarketPlaceTabContext } from '../../context/MarketPlaceTab.Context';
import {
	aretes,
	camisa,
	chocolate1,
	chocolate2,
	nuez,
	platos,
	quinua,
} from '../../utilities/assets';

const MarketPlaceTemplate: React.FC = () => {
	const products = [
		{
			title: 'Chocolate Bar with Milk 39% Cacao 100g - Innato',
			description: 'Chocolate with milk at 39% cocoa weight 100 grams',
			img: chocolate1,
			price: 65.5,
		},
		{
			title: 'Dark Chocolate Bar with Brazil nut 70% cacao 70g',
			description: '70% cacao Organic',
			img: chocolate2,
			price: 30.5,
		},
		{
			title: 'Brazil Nuts Oil Extra Virgin 250ml Manutata',
			description:
				'WILD AND ECOLOGICAL EXTRA VIRGIN AMAZON CHESTNUT OIL WITH OMEGA 6 AND 9.',
			img: nuez,
			price: 15.5,
		},

		{
			title: 'Cotton Shirt with Bag Contrast',
			description: 'Classic shirt 80111',
			img: camisa,
			price: 15.5,
		},
		{
			title: 'Selected Pearl Quinoa. INCASUR',
			description: 'Selected Pearled Quinoa of 250 grams',
			img: quinua,
			price: 15.5,
		},
	];
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
							{products.map(({ title, description, img, price }, i) => {
								return (
									<ProductCard
										key={i}
										title={title}
										description={description}
										img={img}
										price={price}
										onClick={() => {
											history.push(`/productDetail/${i}`);
										}}
									/>
								);
							})}
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
							{products.map(({ title, description, img, price }, i) => {
								return (
									<ProductCard
										key={i}
										title={title}
										description={description}
										img={img}
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
