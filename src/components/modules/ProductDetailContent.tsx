import React, { useState } from 'react';
import {} from '@ionic/react';
import ReactMarkdown from 'react-markdown';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements/';
interface ProductDetailType {
	businessImage: string;
	detail: string;
}

const ProductDetailContent = ({ businessImage, detail }: ProductDetailType) => {
	const [textTranslated, setTextTranslated] = useState('');
	const { currentUser } = React.useContext(UserContext);

	return (
		<>
			<h5 className='fw-bolder'>
				<Trasnlator
					from='en'
					to={currentUser.data.preferredLanguage}
					text='Business:'
					returnText={true}
					onTextTranslated={() => {}}
				/>
			</h5>
			<div className='ion-text-center'>
				<img style={{ width: 'auto', height: '75px' }} src={businessImage} />
			</div>
			<h5 className='fw-bolder'>
				<Trasnlator
					from='en'
					to={currentUser.data.preferredLanguage}
					text='Detail:'
					returnText={true}
					onTextTranslated={() => {}}
				/>
			</h5>
			<Trasnlator
				text={detail}
				returnText={false}
				from='en'
				to={currentUser.data.preferredLanguage}
				onTextTranslated={(e: any) => {
					setTextTranslated(e);
				}}
			/>

			<ReactMarkdown>{textTranslated}</ReactMarkdown>
			{/* <ReactMarkdown>{detail}</ReactMarkdown> */}
		</>
	);
};
export default ProductDetailContent;
