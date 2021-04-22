import React, { useState } from 'react';
import {
	IonRow,
	IonCol,
	IonIcon,
	IonText,
	IonButton,
	IonImg,
	IonAvatar,
	IonSlides,
	IonSlide,
	IonCard,
	IonGrid,
	IonCardSubtitle,
	IonCardHeader,
} from '@ionic/react';
import {} from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import {
	SelectButton,
	ProductCarousel,
	ProductDetailContent,
	SuggestedProductCarousel,
	OtherProductCarousel,
} from '../modules';
import { SendMessageButton } from '../elements';

interface ProductDetailType {
	productId: string;
}

const ProductDetail = ({ productId }: ProductDetailType) => {
	const history = useHistory();

	const [selectedContent, setSelectedContent] = useState('Information');

	return (
		<>
			<ProductCarousel
				products={[
					{
						image:
							'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_d6e468b2-1510-4ebf-acd1-389792f89ae5&fileSn=3&thumb=350',
					},
					{
						image:
							'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_cda59ffe-bdda-480e-915a-49b3ac4db1db&fileSn=5&thumb=350',
					},
					{
						image:
							'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_98f91854-4587-4ce4-83d6-c0e79ad55781&fileSn=2&thumb=350',
					},
				]}
			/>

			<IonRow>
				<IonCol className='px-4'>
					<div>
						<p className='fw-bolder ion-text-size-lg'>
							Chocolate Bar with Milk 39% Cacao 100g - Innato
							<IonText color='primary' className='fw-bolder ion-float-right'>
								$30
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
							<ProductDetailContent
								businessImage='https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_2fc9b1bb-570e-4b34-8521-70caeef9971d&fileSn=2&thumb=200'
								detail='
								**Shipping**

- **Port:** By Sea / PE - CALLAO
- **Payment Terms:** WIRE TRANSFER(T/T)

> Chocolate with milk, made with selected ingredients such as: White crystal sugar


								'
							/>
							<SendMessageButton />
						</>
					)}
					{selectedContent === 'Suggested' && (
						<>
							<SuggestedProductCarousel
								products={[
									{
										title: 'Dark Chocolate Bar 72% Cocoa Bar of 50 g Tinkiy',
										image:
											'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_ab0cf2ca-b181-4a32-84cd-b62091d1a11f&fileSn=7&thumb=350',
										price: 50.63,
									},
									{
										title: 'Dark Chocolate Bar 80% Cocoa 70g',
										image:
											'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_4c94bde6-da66-4556-b6fb-160cdf6483ab&fileSn=2&thumb=350',
										price: 25.99,
									},
									{
										title: 'Dark Chocolate Bar with Brazil nut 70% cacao 70g',
										image:
											'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_9db0b498-5b02-44db-b2c5-ed01d071d1a0&fileSn=2&thumb=350',
										price: 31.46,
									},
									{
										title: 'Cocoa Nibs Bathed in Lúcuma 113g',
										image:
											'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_1796f534-62a5-4097-bd95-7f056c861026&fileSn=2&thumb=350',
										price: 80.59,
									},
									{
										title: 'Dark Chocolate Bar 70% with Blueberries Cocoa 70g',
										image:
											'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_d4480207-c8df-4f72-a25a-ef19d2c12023&fileSn=1&thumb=350',
										price: 55.58,
									},
								]}
							/>

							<h3 className='fw-bolder'>Others</h3>
							<OtherProductCarousel
								products={[
									{
										title:
											'Layers of Cookie with Milk Caramel Filling x 450 gr.',
										image:
											'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_31adb4e8-7b62-4d24-8f73-25746eb17ab4&fileSn=1&thumb=350',
										price: 55.58,
										description:
											'Layers of cookie with milk caramel filling x 450 gr.',
									},
									{
										title: 'Gordis Brazilian Nuts Display 12x21g',
										image:
											'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_bd5ad220-b42d-4f2f-9d09-d3ffe58d9196&fileSn=3&thumb=350',
										price: 50.63,
										description: 'Milk chocolate covered brazilian nuts',
									},
									{
										title:
											'Antojo - Layers of Chocolate Flavored Covered Cookie.',
										image:
											'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_c1caeb41-3215-4c58-9580-b942ed7e2b2e&fileSn=2&thumb=350',
										price: 25.99,
										description:
											'ANTOJO - Layers of chocolate s flavor covered cookie with Milk Caramel fillings 12 unit x 30 gr in Display',
									},
									{
										title: 'Dark Chocolate Bar with Brazil nut 70% cacao 70g',
										image:
											'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_fe250599-b74e-4fbc-99b2-22c51533dce3&fileSn=1&thumb=350',
										price: 31.46,
										description:
											'Dark chocolate 70% cocoa including dehydrated blueberries',
									},
									{
										title: 'Conical Jug # 8 - 95gr. - JA090B',
										image:
											'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_30ff8a35-f1db-4873-a463-13bd3e6a8675&fileSn=1&thumb=350',
										price: 80.59,
										description:
											'To serve hot or cold beverages.',
									},
								]}
							/>
						</>
					)}
				</IonCol>
			</IonRow>
		</>
	);
};

export default ProductDetail;
