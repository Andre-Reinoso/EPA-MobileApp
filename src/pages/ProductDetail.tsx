import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetailLayout } from '../components/layouts';
import { ProductDetailTemplate } from '../components/templates';

interface paramType {
	productId: string;
}

const ProductDetail: React.FC = () => {
	const { productId } = useParams<paramType>();
	return (
		<>
			<ProductDetailLayout>
				<ProductDetailTemplate productId={productId} />
			</ProductDetailLayout>
		</>
	);
};

export default ProductDetail;
