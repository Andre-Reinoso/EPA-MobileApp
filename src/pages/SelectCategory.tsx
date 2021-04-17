import React from 'react';
import { SelectCategoryLayout } from './../components/layouts';
import { SelecCategoryTemplate } from './../components/templates';

const SelectCategory: React.FC = () => {
	return (
		<>
			<SelectCategoryLayout>
				<SelecCategoryTemplate />
			</SelectCategoryLayout>
		</>
	);
};

export default SelectCategory;
