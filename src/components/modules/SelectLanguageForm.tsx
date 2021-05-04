import React, { useEffect, useState } from 'react';
import { IonCard, IonAvatar, IonCardTitle, IonItem } from '@ionic/react';
import { getAllLanguages } from './../../services/translate/';

interface langaugeType {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
	flag: string;
}

const SelectLanguageForm: React.FC = () => {
	const [selectedLanguage, setSelectecLanguage] = useState('es');
	const [languages, setLanguages] = useState<[langaugeType]>();

	useEffect(() => {
		try {
			getAllLanguages()
				.then((result) => {
					setLanguages(result);
				})
				.catch((err) => {});
		} catch (error) {
			console.log(error);
		}
	}, [languages]);

	return (
		<>
			{languages?.map(({ flag, iso639_1, nativeName }, index) => {
				return (
					<IonCard
						className='my-3'
						color={`${selectedLanguage === iso639_1 ? 'primary' : 'light'}`}
						key={index}
						onClick={() => {
							setSelectecLanguage(iso639_1);
						}}>
						<IonItem color='transparent'>
							<IonAvatar slot='start'>
								<img src={`${flag}`} />
							</IonAvatar>
							<IonCardTitle>{nativeName}</IonCardTitle>
						</IonItem>
					</IonCard>
				);
			})}
		</>
	);
};

export default SelectLanguageForm;
