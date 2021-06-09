import React, { createContext, useState } from 'react';

interface RangeValueType {
	lower: number;
	upper: number;
}

interface FiltersType {
	selectedCategory: string;
	selectedCompany: string;
	rangeValue: RangeValueType;
	setCategory: Function;
	setCompany: Function;
	setRange: Function;
}

const MarketPlaceFiltersContext: any = createContext('Products');

const MarketPlaceFiltersProvider: React.FC = ({ children }) => {
	const [selectedCategory, setSelectedCategory] = useState('');
	const [selectedCompany, setSelectedCompany] = useState('');
	const [rangeValue, setRangeValue] = useState<any>({
		lower: 0,
		upper: 300,
	});

	const setCategory = (category: string) => {
		setSelectedCategory(category);
	};
	const setCompany = (userSellerId: string) => {
		setSelectedCompany(userSellerId);
	};
	const setRange = (value: any) => {
		setRangeValue(value);
	};

	let values: FiltersType = {
		rangeValue,
		selectedCompany,
		selectedCategory,
		setCategory,
		setCompany,
		setRange,
	};

	return (
		<MarketPlaceFiltersContext.Provider value={values}>
			{children}
		</MarketPlaceFiltersContext.Provider>
	);
};

export { MarketPlaceFiltersContext, MarketPlaceFiltersProvider };
