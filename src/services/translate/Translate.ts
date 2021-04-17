import { endpoint, location, subscriptionKey } from './translation.config';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { epeApiUrl } from '../epaApi/EpaApi.config';

async function getAllLanguages() {
	try {
		let response = await axios.get(`${epeApiUrl}/language`);

		return response.data;
	} catch (error) {
		console.log(error);
	}
}

async function translateText(text: string, from: string, to: string) {
	try {
		let response = await axios.post(
			`${endpoint}/translate`,
			[
				{
					text,
				},
			],
			{
				headers: {
					'Ocp-Apim-Subscription-Key': subscriptionKey,
					'Ocp-Apim-Subscription-Region': location,
					'Content-type': 'application/json',
					'X-ClientTraceId': uuidv4().toString(),
				},
				params: {
					'api-version': '3.0',
					from,
					to: [to],
				},
				responseType: 'json',
			}
		);
		return response.data[0].translations[0].text;
	} catch (error) {
		console.log(error);
	}
}

export { translateText, getAllLanguages };
