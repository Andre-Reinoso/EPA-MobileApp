import React from 'react';
import { SelectLanguageLayout } from './../components/layouts';
import { SelecLanguageTemplate } from './../components/templates';

const SelectLanguage: React.FC = () => {
	return (
		<>
			<SelectLanguageLayout>
				<SelecLanguageTemplate />
			</SelectLanguageLayout>
		</>
	);
};

export default SelectLanguage;
