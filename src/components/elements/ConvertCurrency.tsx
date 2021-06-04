import { useState, useEffect } from 'react';
import EpaService from './../../services/EPA/Epa.Service';

interface TypeConvertCurreny {
	from: string;
	to: string;
	amount: string;
}

const ConvertCurrency = ({ amount, from, to }: TypeConvertCurreny) => {
	const [amountConverted, setAmountConverted] = useState<number>();
	function getCurrencyConverted() {
		const { currencyConverter } = new EpaService();
		currencyConverter(from, to).then((result) => {
			setAmountConverted(
				Number((result[`${from}_${to}`] * Number(amount)).toFixed(2))
			);
		});
	}
	useEffect(() => {
		getCurrencyConverted();
	}, [to]);

	return <>{amountConverted}</>;
};
export default ConvertCurrency;
