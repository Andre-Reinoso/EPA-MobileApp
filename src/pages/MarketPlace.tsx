import React from 'react';
import { MarketPlaceLayout } from './../components/layouts';
import {MarketPlaceTemplate} from './../components/templates';

const MarketPlace: React.FC = () => {
	return (
		<>
			<MarketPlaceLayout>
				<MarketPlaceTemplate/>
			</MarketPlaceLayout>
		</>
	);
};

export default MarketPlace;
