import React, { createContext, useState } from 'react';

const MarketPlaceTabContext: any = createContext('Products');

const MarketPlaceTabProvider: React.FC = ({ children }) => {
	const [selectedTab, setSelectedTab] = useState<string>('Products');

	const setTab = (tab: string) => {
		setSelectedTab(tab);
	};

	return (
		<MarketPlaceTabContext.Provider value={{ selectedTab, setTab }}>
			{children}
		</MarketPlaceTabContext.Provider>
	);
};

export { MarketPlaceTabContext, MarketPlaceTabProvider };
