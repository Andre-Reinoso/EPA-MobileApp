import React, { useEffect, useState } from 'react';
import { IonRow, IonCol, IonText } from '@ionic/react';

import {
	antojo,
	chocolate2,
	chocolate5,
	chocolate6,
	cocoa,
	cocoa2,
	galletas1,
	gordis,
	logoromex,
	tasas,
	yuyay,
} from '../../utilities/assets';
import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
import ProductDetailCarousel from '../modules/ProductDetailCarousel';
import ConvertCurrency from '../elements/ConvertCurrency';
import SuggestedProduct from '../modules/SuggestedProduct';
import OtherProduct from '../modules/OtherProduct';
import SelectButton from '../elements/SelectButton';
import SendMessageButton from '../elements/SendMessageButton';
import ProductService from '../../services/UseCases/Product.Service';
import MarkDownEditor from '../elements/MarkDownEditor';
import parse from 'html-react-parser';
import NewQuotation from '../elements/NewQuotation';
interface ProductDetailType {
	productId: string;
}

const ProductDetailTemplate = ({ productId }: ProductDetailType) => {
	const { currentUser } = React.useContext(UserContext);
	const [selectedContent, setSelectedContent] = useState('Information');

	const [productDetailData, setProductDetailData] = useState<any>({
		category: '',
		description: '',
		gallery: [''],
		image: '',
		name: '',
		price: '',
		status: '',
		store: '',
		subcategory: '',
	});

	useEffect(() => {
		const { getProductById } = new ProductService();
		getProductById(productId)
			.then((result) => {
				setProductDetailData(result);
			//	console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [productId]);

	return (
		<>
			<ProductDetailCarousel gallery={productDetailData.gallery} />

			<IonRow>
				<IonCol className='px-4'>
					<div>
						<p className='fw-bolder ion-text-size-lg'>
							{productDetailData.name}

							<IonText color='primary' className='fw-bolder ion-float-right'>
								${productDetailData.price}
							</IonText>
						</p>
					</div>
				</IonCol>
			</IonRow>

			<SelectButton
				firstButtonTitle='Information'
				secondButtonTitle='Suggested'
				onSelectedButton={(e: string) => {
					setSelectedContent(e);
				}}
			/>

			<IonRow>
				<IonCol className='px-3'>
					{selectedContent === 'Information' && (
						<>
							<h5 className='fw-bolder'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='Description:'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</h5>

							{productDetailData.description}

							<hr />

							<h5 className='fw-bolder'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='Category:'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</h5>
							{productDetailData.category}
							<hr />

							<h5 className='fw-bolder'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='SubCategory:'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</h5>
							{productDetailData.subcategory || 'Without category'}

							<hr />
							<IonRow>
								<IonCol>
									<SendMessageButton />
								</IonCol>
								<IonCol>
									<NewQuotation
										price={productDetailData.price}
										productId={productDetailData.productId}
										productName={productDetailData.name}
										userSellerId={productDetailData.userSellerId}
									/>
								</IonCol>
							</IonRow>
						</>
					)}
					{selectedContent === 'Suggested' && (
						<>
							<SuggestedProduct
								subcategory={
									productDetailData.subcategory || 'Aceite vegetal y animal'
								}
							/>

							<h3 className='fw-bolder'>Others</h3>
							<OtherProduct
								category={productDetailData.category || 'Alimentos & Bebidas'}
							/>
						</>
					)}
				</IonCol>
			</IonRow>
		</>
	);
};

export default ProductDetailTemplate;
