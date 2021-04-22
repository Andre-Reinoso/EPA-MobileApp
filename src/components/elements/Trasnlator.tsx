import React, { useState, useEffect } from 'react';
import { translateText } from '../../services/translate';

interface transtaldorType {
	text: string;
	from: string;
	to: string;
	returnText: boolean;
	onTextTranslated: Function;
}

const Translator = (props: transtaldorType) => {
	const { text, from, to, onTextTranslated, returnText } = props;
	const [translatedText, setTranslatedText] = useState('');

	function getTranslation() {
		translateText(text, from, to).then((translated) => {
			onTextTranslated(translated);
			setTranslatedText(translated);
		});
	}

	useEffect(() => {
		getTranslation();
	}, [to]);

	return <>{returnText && translatedText}</>;
};
export default Translator;
