import { endpoint, location, subscriptionKey } from './translation.config';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

async function detectLanguage(text: string) {
	try {
		let response = await axios.post(
			`${endpoint}/detect`,
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
				},
				responseType: 'json',
			}
		);
		return response.data[0].language;
	} catch (error) {
		console.log(error);
	}
}

export { detectLanguage };
