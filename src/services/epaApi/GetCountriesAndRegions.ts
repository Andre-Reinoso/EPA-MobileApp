import axios from 'axios';
import { epeApiUrl } from './EpaApi.config';

async function getCountries() {
	try {
		const response = await axios.get(
			'https://restcountries.eu/rest/v2/all?fields=name;capital;nativeName;flag;alpha2Code'
		);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}

async function getRegionsByCode(code: string) {
	try {
		let response = await axios.get(`${epeApiUrl}/regions/${code}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
}

export { getCountries, getRegionsByCode };
