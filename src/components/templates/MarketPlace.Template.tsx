import React, { useContext } from 'react';

import { IonRow, IonCol } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { MarketPlaceTab, MarketPlaceProductChip } from './../modules/';

import { ProductCard } from './../elements/';
import { MarketPlaceTabContext } from '../../context/MarketPlaceTab.Context';

const MarketPlaceTemplate: React.FC = () => {
	const products = [
		{
			title: 'Chocolate Bar with Milk 39% Cacao 100g - Innato',
			description: 'Chocolate with milk at 39% cocoa weight 100 grams',
			img:
				'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_cda59ffe-bdda-480e-915a-49b3ac4db1db&fileSn=5&thumb=350',
			price: 65.5,
		},
		{
			title: 'Dark Chocolate Bar with Brazil nut 70% cacao 70g',
			description: '70% cacao Organic',
			img:
				'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_9db0b498-5b02-44db-b2c5-ed01d071d1a0&fileSn=2&thumb=350',
			price: 30.5,
		},
		{
			title: 'Brazil Nuts Oil Extra Virgin 250ml Manutata',
			description:
				'WILD AND ECOLOGICAL EXTRA VIRGIN AMAZON CHESTNUT OIL WITH OMEGA 6 AND 9.',
			img:
				'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_21615d3e-e206-4424-912a-6c5a99211dec&fileSn=1&thumb=350',
			price: 15.5,
		},

		{
			title: 'Cotton Shirt with Bag Contrast',
			description: 'Classic shirt 80111',
			img:
				'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_d055e859-4f27-43b8-abef-de31565cf466&fileSn=7&thumb=350',
			price: 15.5,
		},
		{
			title: 'Selected Pearl Quinoa. INCASUR',
			description: 'Selected Pearled Quinoa of 250 grams',
			img:
				'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_652093ba-041d-49db-a883-02d16a12c622&fileSn=1&thumb=350',
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
									description:
										'Plate in different designs to contain food.',
									img:
										'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_23a461ff-61af-4ede-ac6a-0d71392610e8&fileSn=2&thumb=350',
									price: 15.5,
								},

								{
									title: 'Cotton Shirt with Bag Contrast',
									description: 'Classic shirt 80111',
									img:
										'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_d055e859-4f27-43b8-abef-de31565cf466&fileSn=7&thumb=350',
									price: 15.5,
								},
								{
									title: 'Blue Folk Earrings - Code AP0501A',
									description: 'Fashion earrings Folk trend.',
									img:
										'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_dc3c0fd2-9e61-431d-afee-024d04c7107b&fileSn=1&thumb=350',
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
