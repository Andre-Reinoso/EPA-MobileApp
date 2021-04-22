import React, { useState, useEffect } from 'react';
import { currencyConverter } from '../../services/epaApi/CurrencyConverter';

interface ConvertCurrencyType {
	amount: number;
	from: string;
	to: string;
}

const ConvertCurrency = (props: ConvertCurrencyType) => {
	const { amount, from, to } = props;
	const [amountConverted, setAmountConverted] = useState<number>();

	function getCurrencyConverted() {
		currencyConverter(from, to).then((result) => {
			let amountRounded: number = Number(
				(result[`${from}_${to}`] * amount).toFixed(2)
			);
			setAmountConverted(result);
		});
	}

	useEffect(() => {
		getCurrencyConverted();
	}, [to]);

	return <>{amountConverted}</>;
};
export default ConvertCurrency;
