import React, { useState } from 'react';
import { IonRow, IonCol, IonText } from '@ionic/react';
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
import {
	antojo,
	chocolate1,
	chocolate2,
	chocolate3,
	chocolate4,
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
import { Trasnlator } from './../elements';
interface ProductDetailType {
	productId: string;
}

const ProductDetail = ({ productId }: ProductDetailType) => {
	const history = useHistory();
	const { currentUser } = React.useContext(UserContext);

	const [selectedContent, setSelectedContent] = useState('Information');

	return (
		<>
			<ProductCarousel
				products={[
					{
						image: chocolate3,
					},
					{
						image: chocolate1,
					},
					{
						image: chocolate4,
					},
				]}
			/>

			<IonRow>
				<IonCol className='px-4'>
					<div>
						<p className='fw-bolder ion-text-size-lg'>
							<Trasnlator
								from='en'
								to={currentUser.data.preferredLanguage}
								text='Chocolate Bar with Milk 39% Cacao 100g - Innato'
								returnText={true}
								onTextTranslated={() => {}}
							/>

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
								businessImage={logoromex}
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
										image: cocoa,
										price: 50.63,
									},
									{
										title: 'Dark Chocolate Bar 80% Cocoa 70g',
										image: chocolate5,
										price: 25.99,
									},
									{
										title: 'Dark Chocolate Bar with Brazil nut 70% cacao 70g',
										image: chocolate2,
										price: 31.46,
									},
									{
										title: 'Cocoa Nibs Bathed in Lúcuma 113g',
										image: cocoa2,
										price: 80.59,
									},
									{
										title: 'Dark Chocolate Bar 70% with Blueberries Cocoa 70g',
										image: chocolate6,
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
										image: galletas1,
										price: 55.58,
										description:
											'Layers of cookie with milk caramel filling x 450 gr.',
									},
									{
										title: 'Gordis Brazilian Nuts Display 12x21g',
										image: gordis,
										price: 50.63,
										description: 'Milk chocolate covered brazilian nuts',
									},
									{
										title:
											'Antojo - Layers of Chocolate Flavored Covered Cookie.',
										image: antojo,
										price: 25.99,
										description:
											'ANTOJO - Layers of chocolate s flavor covered cookie with Milk Caramel fillings 12 unit x 30 gr in Display',
									},
									{
										title: 'Dark Chocolate Bar with Brazil nut 70% cacao 70g',
										image: yuyay,
										price: 31.46,
										description:
											'Dark chocolate 70% cocoa including dehydrated blueberries',
									},
									{
										title: 'Conical Jug # 8 - 95gr. - JA090B',
										image: tasas,
										price: 80.59,
										description: 'To serve hot or cold beverages.',
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
