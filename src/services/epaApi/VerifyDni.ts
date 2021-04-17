import axios from 'axios';
import { epeApiUrl } from './EpaApi.config';

async function verifyDni(dni: string) {
	try {
		let response = await axios.get(`${epeApiUrl}/reniec/dni/${dni}`);

		return response.data;
	} catch (error) {
		console.log(error);
	}
}

export { verifyDni };
