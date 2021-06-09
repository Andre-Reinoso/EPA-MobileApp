import React, { useState, useEffect } from 'react';
import {
	IonRow,
	IonCol,
	IonSpinner,
	IonRange,
	IonList,
	IonItem,
	IonModal,
	IonButton,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonButtons,
	IonContent,
	IonLabel,
	IonSelect,
	IonSelectOption,
	IonGrid,
	IonIcon,
} from '@ionic/react';

import { db } from '../../config/Firebase.config';
import MarketPlaceProductCard from '../elements/MarketPlaceProductCard';
import { useHistory } from 'react-router';
import Translator from '../elements/Translator';
import CategoryService from '../../services/UseCases/Category.Service';
import { UserContext } from '../../context/User.Context';
import { MarketPlaceFiltersContext } from '../../context/MarketPlaceFilters.Context';
import { filterOutline } from 'ionicons/icons';

const PreferredProducts: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);
	const { rangeValue, selectedCategory, setCategory, setRange } =
		React.useContext(MarketPlaceFiltersContext);

	const [showModal, setShowModal] = useState(false);
	const [categories, setCategories] = useState<Array<any>>();
	const [products, setProducts] = useState<Array<any>>();
	const [loading, setloading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		setRange({ lower: 0, upper: 300 });
		const { getAllCategories } = new CategoryService();
		getAllCategories().then((result) => {
			setCategories(result);
		});
	}, []);

	useEffect(() => {
		const unsubscribe = db
			.collection('products')
			.onSnapshot((productsCollection) => {
				let allProducts: any = [];
				productsCollection.forEach((productDoc) => {
					allProducts.push({
						productId: productDoc.id,
						...productDoc.data(),
					});
				});
				setProducts(allProducts);
				setloading(false);
			});
		return () => {
			unsubscribe();
		};
	}, [products, selectedCategory]);

	return (
		<>
			<IonRow>
				<IonCol>
					{loading ? (
						<div className='ion-text-center'>
							<IonSpinner color='primary' />
						</div>
					) : (
						<>
							<IonModal isOpen={showModal} cssClass='my-custom-class'>
								<IonHeader>
									<IonToolbar>
										<IonTitle>
											<Translator
												from='en'
												to={currentUser.data.preferredLanguage || 'en'}
												text={'Filters'}
												returnText={true}
												onTextTranslated={() => {}}
											/>
										</IonTitle>
										<IonButtons slot='end'>
											<IonButton onClick={() => setShowModal(false)}>
												close
											</IonButton>
										</IonButtons>
									</IonToolbar>
								</IonHeader>
								<IonContent fullscreen>
									<IonList>
										<IonItem className='my-3'>
											<IonLabel position='fixed'>
												<Translator
													from='en'
													to={currentUser.data.preferredLanguage || 'en'}
													text={'Price'}
													returnText={true}
													onTextTranslated={() => {}}
												/>
											</IonLabel>
											<IonRange
												onIonChange={(e) => setRange(e.detail.value as any)}
												value={{
													lower: rangeValue.lower,
													upper: rangeValue.upper,
												}}
												dualKnobs
												min={0}
												max={300}
												step={10}
												pin
												snaps></IonRange>
										</IonItem>
									</IonList>
								</IonContent>
							</IonModal>

							<IonGrid>
								<IonRow>
									<IonCol size='9'>
										<IonSelect
											interface='action-sheet'
											cancelText='Dismiss'
											onIonChange={(e: any) => {
												setCategory(e.target.value);
											}}
											value={selectedCategory}>
											<IonSelectOption value={''}>
												<Translator
													from='en'
													to={currentUser.data.preferredLanguage || 'en'}
													text={'Category'}
													returnText={true}
													onTextTranslated={() => {}}
												/>
											</IonSelectOption>
											{categories?.map((category, i) => {
												return (
													<IonSelectOption key={i} value={category.name}>
														<Translator
															from='en'
															to={currentUser.data.preferredLanguage || 'en'}
															text={category.name}
															returnText={true}
															onTextTranslated={() => {}}
														/>
													</IonSelectOption>
												);
											})}
										</IonSelect>
									</IonCol>
									<IonCol size='3'>
										<IonButton onClick={() => setShowModal(true)}>
											<IonIcon icon={filterOutline} />
										</IonButton>
									</IonCol>
								</IonRow>
							</IonGrid>

							{products
								?.filter((product) => product.price >= rangeValue.lower)
								.filter((product) => product.price <= rangeValue.upper)
								.filter((product) => {
									if (selectedCategory) {
										return product.category === selectedCategory;
									}else{
										return true
									}
									return false;
								})
								?.map(
									({ name, description, image, price, productId }: any, i) => {
										//console.log(name);
										return (
											<MarketPlaceProductCard
												key={i}
												title={name}
												description={description}
												img={image}
												price={price}
												onClick={() => {
													history.push(`/productDetail/${productId}`);
												}}
											/>
										);
									}
								)}
						</>
					)}
				</IonCol>
			</IonRow>
		</>
	);
};

export default PreferredProducts;
