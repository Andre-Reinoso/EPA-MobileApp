import React, { useState, useEffect } from 'react';
import TranslateService from './../../services/Translate/Translate.Service';

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

	useEffect(() => {
		const { translateText } = new TranslateService();
		translateText(text, from, to).then((translated) => {
			onTextTranslated(translated);
			setTranslatedText(translated);
		});
	}, [to]);

	return <>{returnText && translatedText}</>;
};
export default Translator;
