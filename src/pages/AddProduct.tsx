import React from 'react';
import { AddProductLayout } from '../components/layouts';
import {AddProductTemplate} from '../components/templates/';

const AddProduct: React.FC = () => {
	return (
		<>
			<AddProductLayout>
				<AddProductTemplate />
			</AddProductLayout>
		</>
	);
};

export default AddProduct;
