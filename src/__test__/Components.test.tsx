import React, { useContext } from 'react';
import { render } from '@testing-library/react';

import Translator from '../components/elements/Translator';

/* Test components */
test('Trasnlator - render without crashing', () => {
	const { baseElement } = render(
		<Translator
			from='es'
			to='en'
			text='Hi World'
			returnText={true}
			onTextTranslated={() => {}}
		/>
	);
	expect(baseElement).toBeDefined();
});
