import React, { useEffect, useState } from 'react';
import {
	IonCol,
	IonItem,
	IonLabel,
	IonList,
	IonRow,
	IonSearchbar,
	IonImg,
	IonThumbnail,
	IonIcon,
} from '@ionic/react';
import PieTotalSalesProduct from '../modules/PieTotalSalesProduct';
import BarTotalSalesProduct from '../modules/BarTotalSalesProduct';
import { cafe, chevronForwardOutline } from 'ionicons/icons';
import { aceituna, chalina, chocolate1, oliva } from '../../utilities/assets';
import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
import ProductService from '../../services/UseCases/Product.Service';
import { db } from '../../config/Firebase.config';

const MyProductsTemplate: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);
	const [myProducts, setMyProducts] = useState<Array<any>>();

	useEffect(() => {
		db.collection('products')
			.where('userSellerId', '==', currentUser.data.userId)
			.onSnapshot((products) => {
				let listOfProducts: any = [];
				products.forEach((product: any) => {
					listOfProducts.push({ productId: product.id, ...product.data() });
				});
				setMyProducts(listOfProducts);
			});
	}, []);

	return (
		<>
			<IonRow>
				<IonCol size='6' className='p-0'>
					<PieTotalSalesProduct
						data={{
							labels: ['Ene', 'Feb'],
							datasets: [
								{
									label: '# of Red Votes',
									data: [50, 30],
									backgroundColor: [
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
									],
									borderWidth: [0, 0],
								},
							],
						}}
					/>
				</IonCol>
				<IonCol size='6' className='p-0'>
					<BarTotalSalesProduct
						data={{
							labels: [
								'Ene',
								'Feb',
								'Mar',
								'Abe',
								'May',
								'Jun',
								'Jul',
								'Ago',
								'Sep',
								'Oct',
								'Nov',
								'Dic',
							],
							datasets: [
								{
									label: '# of Red Votes',
									data: [18, 16, 20, 17, 14, 17, 19, 14, 20, 15, 14, 13],
									backgroundColor: [
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
									],
								},
							],
						}}
					/>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<IonSearchbar
						className='ion-border-radius-sm'
						showCancelButton='never'></IonSearchbar>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<IonList>
						<IonItem>
							<h3>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='My Products'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</h3>
						</IonItem>
						{myProducts?.map(({ name, image }, i) => {
							return (
								<div key={i}>
									<IonItem>
										<IonThumbnail
											slot='start'
											style={{ width: '65px', height: '65px' }}>
											<IonImg className='ion-border-radius-sm' src={image} />
										</IonThumbnail>
										<IonLabel>
											<h3>
												<Translator
													from='en'
													to={currentUser.data.preferredLanguage || 'en'}
													text={name}
													returnText={true}
													onTextTranslated={() => {}}
												/>
											</h3>
										</IonLabel>
										<IonIcon icon={chevronForwardOutline} />
									</IonItem>
								</div>
							);
						})}
					</IonList>
				</IonCol>
			</IonRow>
		</>
	);
};

export default MyProductsTemplate;
