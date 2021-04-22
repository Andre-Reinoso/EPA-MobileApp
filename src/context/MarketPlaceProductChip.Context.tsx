import React, { createContext, useState } from 'react';

const MarketPlaceProductChipContext: any = createContext(
	'Apparel, Textiles & Accessories'
);

const MarketPlaceProductChipProvider: React.FC = ({ children }) => {
	const [selectedChip, setSelectedChip] = useState<string>(
		'Apparel, Textiles & Accessories'
	);

	const setChip = (chip: string) => {
		setSelectedChip(chip);
	};

	return (
		<MarketPlaceProductChipContext.Provider value={{ selectedChip, setChip }}>
			{children}
		</MarketPlaceProductChipContext.Provider>
	);
};

export { MarketPlaceProductChipContext, MarketPlaceProductChipProvider };
