import axios from 'axios';
import { epaApiEndPoint } from '../../config/EpaApi.Config';

class EpaService {
	async currencyConverter(fromCurrency: string, toCurrency: string) {
		try {
			let response = await axios.post(
				`${epaApiEndPoint}/currency/convertcurrency`,
				{ fromCurrency, toCurrency }
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
	async verifyRuc(ruc: string) {
		try {
			let response = await axios.get(`${epaApiEndPoint}/sunat/ruc/${ruc}`);

			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
	async getAllCountries() {
		try {
			const response = await axios.get(
				'https://restcountries.eu/rest/v2/all?fields=name;nativeName;alpha2Code'
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
	async getCurrenciesByCountry(alpha2Code: string) {
		try {
			const response = await axios.get(
				`https://restcountries.eu/rest/v2/alpha/${alpha2Code}?fields=;currencies`
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}

	async getRegionsByCode(countryCode: string) {
		try {
			let response = await axios.get(`${epaApiEndPoint}/regions/${countryCode}`);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
}
export default EpaService;
