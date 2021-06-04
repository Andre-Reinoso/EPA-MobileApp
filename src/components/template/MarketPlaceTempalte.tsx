import React, { useContext } from 'react';

import MarketPlaceTab from '../modules/MarketPlaceTab';
import { MarketPlaceTabContext } from '../../context/MarketPlaceTab.Context';
import PreferredProducts from '../modules/PreferredProducts';
import FavoriteProducts from '../modules/FavoriteProducts';
import NewProducts from '../modules/NewProducts';

const MarketPlaceTemplate: React.FC = () => {
	const { selectedTab } = useContext(MarketPlaceTabContext);

	return (
		<>
			<MarketPlaceTab />
			{selectedTab === 'Products' && (
				<>
					<PreferredProducts />
				</>
			)}
			{selectedTab === 'Favorites' && (
				<>
					<FavoriteProducts />
				</>
			)}
			{selectedTab === 'New Products' && (
				<>
					<NewProducts />
				</>
			)}
		</>
	);
};

export default MarketPlaceTemplate;
