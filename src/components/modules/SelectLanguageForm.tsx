import React, { useState } from 'react';
import { IonCard, IonAvatar, IonCardTitle, IonItem } from '@ionic/react';

const SelectLanguageForm: React.FC = () => {
	const [selectedLanguage, setSelectecLanguage] = useState('en');
	let languages = [
		{
			iso639_1: 'en',
			nativeName: 'English',
			img: 'https://restcountries.eu/data/gbr.svg',
		},
		{
			iso639_1: 'es',
			nativeName: 'Español',
			img: 'https://restcountries.eu/data/esp.svg',
		},
		{
			iso639_1: 'ja',
			nativeName: '日本語 (にほんご)',
			img: 'https://restcountries.eu/data/jpn.svg',
		},
	];

	return (
		<>
			{languages.map((language, index) => {
				return (
					<IonCard
						className='my-3'
						color={`${
							selectedLanguage === language.iso639_1 ? 'primary' : 'light'
						}`}
						key={index}
						onClick={() => {
							setSelectecLanguage(language.iso639_1);
						}}>
						<IonItem color='transparent'>
							<IonAvatar slot='start'>
								<img src={`${language.img}`} />
							</IonAvatar>
							<IonCardTitle>{language.nativeName}</IonCardTitle>
						</IonItem>
					</IonCard>
				);
			})}
		</>
	);
};

export default SelectLanguageForm;
