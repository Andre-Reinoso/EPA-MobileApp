import React, { useContext } from 'react';
import { render } from '@testing-library/react';

import EpaService from './../services/EPA/Epa.Service';

/* Test Services */
test('EPA Service - VerifyRuc', async () => {
	const { verifyRuc } = new EpaService();
	expect(await verifyRuc('20331066703')).toEqual({
		ruc: '20331066703',
		nombre: 'INRETAIL PHARMA S.A.',
		tipoContribuyente: 'SOCIEDAD ANONIMA',
		profesion: '-',
		nombreComercial: 'INKAFARMA',
		condicionContribuyente: 'HABIDO',
		estadoContribuyente: 'ACTIVO',
		fechaInscripcion: '13/08/1996',
		fechaInicio: '12/08/1996',
		departamento: 'LIMA',
		provincia: 'LIMA',
		distrito: 'CHORRILLOS',
		direccion: 'AV. DEFENSORES DEL MORRO NRO. 1277 (EX FABRICA LUCHETTI)',
		telefono: '-',
		fax: '-',
		comercioExterior: 'IMPORTADOR',
		principal: 'VTA.  MIN. PROD. FARMAC. Y ART. TOCADOR.',
		secundario1: 'VTA. MAY. DE OTROS PRODUCTOS.',
		secundario2: '-',
		rus: 'NO',
		buenContribuyente: '-',
		retencion:
			'SI, incorporado al Régimen de Agentes de Retención de IGV (R.S.037-2002) a partir del 01/06/2002',
		percepcionVinterna: '-',
		percepcionCliquido: '-',
	});
});

test('EPA Service - Currency Converter', async () => {
	const { currencyConverter } = new EpaService();
	expect(await currencyConverter('USD', 'PE'));
});

test('EPA Service - Currency Converter', async () => {
	const { getAllCountries } = new EpaService();
	expect(await getAllCountries());
});

test('EPA Service - Get Regions By Code', async () => {
	const { getRegionsByCode } = new EpaService();
	expect(await getRegionsByCode('PE'));
});

test('EPA Service - Get Currencies By Code', async () => {
	const { getCurrenciesByCountry } = new EpaService();
	expect(await getCurrenciesByCountry('PE')).toEqual({
		currencies: [
			{
				code: 'PEN',
				name: 'Peruvian sol',
				symbol: 'S/.',
			},
		],
	});
});
