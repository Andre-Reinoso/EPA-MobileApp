import React from 'react';
import SelectLanguageForm from './../modules/SelectLanguageForm';
import { IonRow, IonCol } from '@ionic/react';

const SelectLanguageTemplate: React.FC = () => {
	return (
		<>
			<IonRow>
				<IonCol>
					<h1>Select your language:</h1>
					<SelectLanguageForm />
				</IonCol>
			</IonRow>
		</>
	);
};

export default SelectLanguageTemplate;
