import axios from 'axios';
import {
	MicrosoftCognitiveEndPoint,
	MicrosoftCognitiveSubscriptionKey,
	MicrosoftCognitiveLocation,
} from '../../config/MicrosoftCognitive.Config';
import { v4 as uuidv4 } from 'uuid';
import { epaApiEndPoint } from '../../config/EpaApi.Config';

class TranslateService {
	async getAllLanguages() {
		try {
			let response = await axios.get(`${epaApiEndPoint}/language`);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}

	async translateText(text: string, from: string, to: string) {
		try {
			let response = await axios.post(
				`${MicrosoftCognitiveEndPoint}/translate`,
				[
					{
						text,
					},
				],
				{
					headers: {
						'Ocp-Apim-Subscription-Key': MicrosoftCognitiveSubscriptionKey,
						'Ocp-Apim-Subscription-Region': MicrosoftCognitiveLocation,
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

	async detectLanguage(text: string) {
		try {
			let response = await axios.post(
				`${MicrosoftCognitiveEndPoint}/detect`,
				[
					{
						text,
					},
				],
				{
					headers: {
						'Ocp-Apim-Subscription-Key': MicrosoftCognitiveSubscriptionKey,
						'Ocp-Apim-Subscription-Region': MicrosoftCognitiveLocation,
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
}
export default TranslateService;
