import React, { useState } from 'react';
import {} from '@ionic/react';
import ReactMarkdown from 'react-markdown';
import Translator from '../elements/Trasnlator';

interface ProductDetailType {
	businessImage: string;
	detail: string;
}

const ProductDetailContent = ({ businessImage, detail }: ProductDetailType) => {
	const [textTranslated, setTextTranslated] = useState('');
	return (
		<>
			<h5 className='fw-bolder'>Business:</h5>
			<div className='ion-text-center'>
				<img style={{ width: 'auto', height: '75px' }} src={businessImage} />
			</div>
			<h5 className='fw-bolder'>Detail:</h5>
			{/* <Translator
				text={detail}
				returnText={false}
				from='en'
				to='es'
				onTextTranslated={(e: any) => {
					setTextTranslated(e);
				}}
			/>

			<ReactMarkdown>{textTranslated}</ReactMarkdown> */}
			<ReactMarkdown>{detail}</ReactMarkdown>
		</>
	);
};
export default ProductDetailContent;
