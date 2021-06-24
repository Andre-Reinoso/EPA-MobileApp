import React, { useEffect, useState } from 'react';
import {
	IonCol,
	IonItem,
	IonLabel,
	IonList,
	IonRow,
	IonImg,
	IonThumbnail,
	IonIcon,
	IonItemSliding,
	IonItemOptions,
	IonItemOption,
} from '@ionic/react';
import PieTotalSalesProduct from '../modules/PieTotalSalesProduct';
import BarTotalSalesProduct from '../modules/BarTotalSalesProduct';
import { chevronForwardOutline, trashOutline } from 'ionicons/icons';

import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
import { db } from '../../config/Firebase.config';
import { DashboardContext } from '../../context/Dashboard.Context';
import { useHistory } from 'react-router';
import ProductService from '../../services/UseCases/Product.Service';

const MyProductsTemplate: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);
	const history = useHistory();
	const [myProducts, setMyProducts] = useState<Array<any>>();

	const { dashboardChartData, quantity1, quantity2 } =
		React.useContext(DashboardContext);

	const { deleteProductById } = new ProductService();
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
							labels: ['Quantity 1', 'Quantity 2'],
							datasets: [
								{
									label: '# of Red Votes',
									data: [quantity1, quantity2],
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
									data: dashboardChartData,
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
						{myProducts?.map(({ productId, name, image }, i) => {
							return (
								<IonItemSliding key={i}>
									<IonItem
										onClick={() => {
											history.push(`/updateProduct/${productId}`);
										}}>
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
									<IonItemOptions>
										<IonItemOption
											color='primary'
											onClick={() => {
												deleteProductById(productId)
													.then((result) => {
														history.goBack();
													})
													.catch((err) => {});
											}}>
											<IonIcon slot='start' icon={trashOutline} />
											Delete
										</IonItemOption>
									</IonItemOptions>
								</IonItemSliding>
							);
						})}
					</IonList>
				</IonCol>
			</IonRow>
		</>
	);
};

export default MyProductsTemplate;
