import React from 'react';
import { render } from '@testing-library/react';
import { Login } from './pages/';
import { Trasnlator, ConvertCurrency } from './components/elements/';
import { verifyDni } from './services/epaApi';

/* Test renderizacion de Interfaces */
test('Login Page - render without crashing', () => {
	const { baseElement } = render(<Login />);
	expect(baseElement).toBeDefined();
});

test('Trasnlator - render without crashing', () => {
	const { baseElement } = render(
		<Trasnlator
			from='es'
			to='en'
			text='Hi World'
			returnText={true}
			onTextTranslated={() => {}}
		/>
	);
	expect(baseElement).toBeDefined();
});

test('ConvertCurrency - render without crashing', () => {
	const { baseElement } = render(
		<ConvertCurrency from='PEN' to='USD' amount={1} />
	);
	expect(baseElement).toBeDefined();
});

