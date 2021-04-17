import axios from 'axios';
import { epeApiUrl } from './EpaApi.config';

async function currencyConverter(fromCurrency: string, toCurrency: string) {
	try {
		let response = await axios.post(
			`${epeApiUrl}/currency/convertcurrency`,

			{
				fromCurrency,
				toCurrency,
			}
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}

export { currencyConverter };
