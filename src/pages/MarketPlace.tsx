import React, { useState } from 'react';
import axios from 'axios';

const MarketPlace: React.FC = () => {
	const currencyApiKey = 'd744560c3a94f11cee2f';
	const fromCurrency = 'USD';
	const toCurrency = 'PEN';

	const rucExample = '10178520739';
	const rucApiKey =
		'5b251502-7b1e-4112-81d4-2855f659f572-d8153a56-c20d-42c0-8bac-3e230c581bdf';

	const [amount, setAmount] = useState('');
	const [currencyConverted, setCurrencyConverted] = useState('');

	const [ruc, setRuc] = useState('');
	const [rucValidation, setRucValidation] = useState('');

	const handleChange = (e: any) => {
		setAmount(e.target.value);
	};
	const handleChangeRuc = (e: any) => {
		setRuc(e.target.value);
	};

	const converter = async () => {
		try {
			const response = await axios.get(
				`https://free.currconv.com/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${currencyApiKey}`
			);
			let amountConverted: string = (
				response.data.USD_PEN * parseFloat!(amount)
			)
				.toFixed(2)
				.toString();
			setCurrencyConverted(amountConverted);
		} catch (error) {
			console.log(error);
		}
	};

	const convertCurrency = async () => {
		await converter();
	};

	const validation = async () => {
		try {
			const response = await axios.post(
				`https://ruc.com.pe/api/v1/consultas`,
				{
					token: rucApiKey,
					ruc: rucExample,
				},
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
						'Access-Control-Allow-Headers':
							'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
					},
				}
			);
			console.log(response);
			setRucValidation('as');
		} catch (error) {
			console.log(error);
		}
	};
	const validateRuc = async () => {
		await validation();
	};

	return (
		<>
			<h1 className='ion-text-center'>Pruebas API</h1>
			<h1>MarketPlace</h1>
			<input
				type='number'
				placeholder='Amount'
				value={amount}
				onChange={handleChange}
			/>
			<button onClick={convertCurrency}>Convert to USD</button>
			<h5>{currencyConverted}</h5>

			<hr />

			{/* <h1>Validate RUC</h1>
			<input
				type='number'
				placeholder='RUC'
				value={ruc}
				onChange={handleChangeRuc}
			/>

			<button onClick={validateRuc}>Validate RUC</button>
			<h5>{rucValidation}</h5> */}
		</>
	);
};

export default MarketPlace;
