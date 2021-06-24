import React, { createContext, useEffect, useState } from 'react';

const DashboardContext: any = createContext({});

const DashboardProvider: React.FC = ({ children }) => {
	function radomNumbers(max: number = 280, min: number = 35) {
		return Math.floor(Math.random() * (max + 1 - min)) + min;
	}

	const [quantity1, setQuantity1] = useState<number>();
	const [quantity2, setQuantity2] = useState<number>();
	const [quantity3, setQuantity3] = useState<number>();

	const [dashboardChartData, setdashboardChartData] = useState<Array<number>>();

	const [totalSalesDashboardValue, setTotalSalesDashboardValue] =
		useState<number>();

	const [pieChartValue, setPieChartValue] = useState<number>();

	useEffect(() => {
		setQuantity1(radomNumbers());
		setQuantity3(radomNumbers());
		setQuantity2(radomNumbers());
		setdashboardChartData([
			radomNumbers(10, 20),
			radomNumbers(10, 20),
			radomNumbers(10, 20),
			radomNumbers(10, 20),
			radomNumbers(10, 20),
			radomNumbers(10, 20),
			radomNumbers(10, 20),
			radomNumbers(10, 20),
			radomNumbers(10, 20),
			radomNumbers(10, 20),
			radomNumbers(10, 20),
			radomNumbers(10, 20),
		]);
		setTotalSalesDashboardValue(radomNumbers(150, 80));
		setPieChartValue(radomNumbers(100, 50));
	}, []);

	return (
		<DashboardContext.Provider
			value={{
				totalSalesDashboardValue,
				dashboardChartData,
				quantity1,
				quantity2,
				quantity3,
				pieChartValue,
			}}>
			{children}
		</DashboardContext.Provider>
	);
};

export { DashboardContext, DashboardProvider };
