import React, { useContext } from 'react';
import { render } from '@testing-library/react';

import TranslateService from './../services/Translate/Translate.Service';

test('Translate Service - Get All Languages', async () => {
	const { getAllLanguages } = new TranslateService();
	expect(await getAllLanguages());
});

test('Translate Service - Translate Text', async () => {
	const { translateText } = new TranslateService();
	expect(await translateText('hello', 'en', 'es')).toEqual('Hola');
});

test('Translate Service - Detect Language Translate', async () => {
	const { detectLanguage } = new TranslateService();
	expect(await detectLanguage('Hello World')).toEqual('en');
});
