import axios from 'axios';
import { epeApiUrl } from './EpaApi.config';

async function verifyRuc(ruc: string) {
	try {
		let response = await axios.get(`${epeApiUrl}/sunat/ruc/${ruc}`);

		return response.data;
	} catch (error) {
		console.log(error);
	}
}

export {verifyRuc};
