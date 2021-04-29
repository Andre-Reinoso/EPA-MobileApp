import React from 'react';
import { MyProductsLayout } from '../components/layouts';
import MyProductsTemplate from '../components/templates/MyProducts.Template';

const MyProducts: React.FC = () => {
	return (
		<>
			<MyProductsLayout>
				<MyProductsTemplate />	
			</MyProductsLayout>
		</>
	);
};

export default MyProducts;
