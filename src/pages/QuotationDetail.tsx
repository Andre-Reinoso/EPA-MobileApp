import React, { useContext, useEffect, useState } from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonTitle,
	IonBackButton,
	IonButton,
	IonIcon,
	IonRow,
	IonCol,
	IonSpinner,
	IonSlides,
	IonSlide,
	IonImg,
	IonAvatar,
	IonList,
	IonItem,
	IonText,
} from '@ionic/react';
import {
	chevronBackOutline,
	addOutline,
	barcodeOutline,
	calendarOutline,
	cardOutline,
	earthOutline,
	appsOutline,
	cashOutline,
    bookOutline,
    bookmarkOutline,
    bookmarksOutline,
} from 'ionicons/icons';
import Translator from './../components/elements/Translator';
import { UserContext } from './../context/User.Context';
import { useParams } from 'react-router';
import { db } from '../config/Firebase.config';
import SelectButton from '../components/elements/SelectButton';

const QuotationDetail: React.FC = () => {
	const { currentUser } = useContext(UserContext);
	const [isLoading, setIsLoading] = useState(true);
	const [quotationDetail, setQuotationDetail] = useState<any>();
	const [productDetail, setProductDetail] = useState<any>();
	const [selectedContent, setSelectedContent] = useState('Quotation');

	const { id } = useParams<any>();
	useEffect(() => {
		db.collection('quotation')
			.doc(id)
			.get()
			.then((result) => {
				setQuotationDetail(result.data());
				return db.collection('products').doc(result.data()?.productId).get();
			})
			.then((result) => {
				setProductDetail(result.data());
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
		<>
			<IonPage>
				<IonContent>
					<IonHeader className='ion-no-border'>
						<IonToolbar color='primary'>
							<IonButtons slot='start'>
								<IonBackButton
									defaultHref='/myQuotes'
									icon={chevronBackOutline}
								/>
							</IonButtons>
							<IonButtons slot='secondary' style={{ color: 'transparent' }}>
								<IonButton>
									<IonIcon slot='icon-only' icon={addOutline} />
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='Quotation Detail'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>
						<IonRow>
							<IonCol>
								{isLoading ? (
									<div className='ion-text-center'>
										<IonSpinner color='primary' name='crescent' />
									</div>
								) : (
									<>
										<IonSlides
											pager={true}
											options={{
												zoom: true,
												grabCursor: true,
												slidesPerView: 1.8,
												spaceBetween: 15,
												freeMode: true,
												centeredSlides: true,
												initialSlide: 1,
											}}>
											{productDetail.gallery.map((image: any, i: any) => {
												return (
													<IonSlide key={i}>
														<IonAvatar
															style={{
																width: '100%',
																height: '275px',
															}}
															className='ion-border-radius-sm'>
															<IonImg src={image} />
														</IonAvatar>
													</IonSlide>
												);
											})}
										</IonSlides>
										<br />
										<IonList>
											<SelectButton
												firstButtonTitle='Quotation'
												secondButtonTitle='Product'
												onSelectedButton={(e: string) => {
													setSelectedContent(e);
												}}
											/>
										</IonList>
										{selectedContent === 'Quotation' && (
											<>
												<IonList>
													<IonItem>
														<IonIcon
															className='mx-2'
															slot='start'
															icon={barcodeOutline}
															color='primary'
														/>{' '}
														<Translator
															from='en'
															to={currentUser.data.preferredLanguage || 'en'}
															text={`Status: ${quotationDetail.status}`}
															returnText={true}
															onTextTranslated={() => {}}
														/>
													</IonItem>
													<IonItem>
														<IonIcon
															className='mx-2'
															slot='start'
															icon={calendarOutline}
														/>
														<Translator
															from='en'
															to={currentUser.data.preferredLanguage || 'en'}
															text={`Date: ${quotationDetail.aplicationDate}`}
															returnText={true}
															onTextTranslated={() => {}}
														/>
													</IonItem>
													<IonItem>
														<IonIcon
															className='mx-2'
															slot='start'
															icon={earthOutline}
														/>
														<Translator
															from='en'
															to={currentUser.data.preferredLanguage || 'en'}
															text={`Destiny: ${quotationDetail.destiny}`}
															returnText={true}
															onTextTranslated={() => {}}
														/>
													</IonItem>
													<IonItem>
														<IonIcon
															className='mx-2'
															slot='start'
															icon={appsOutline}
														/>
														<Translator
															from='en'
															to={currentUser.data.preferredLanguage || 'en'}
															text={`Estimate Amount: ${quotationDetail.estimateAmount}`}
															returnText={true}
															onTextTranslated={() => {}}
														/>
													</IonItem>
													<IonItem>
														<IonIcon
															className='mx-2'
															slot='start'
															icon={cardOutline}
														/>
														<Translator
															from='en'
															to={currentUser.data.preferredLanguage || 'en'}
															text={`Payment Terms: ${quotationDetail.paymentTerms}`}
															returnText={true}
															onTextTranslated={() => {}}
														/>
													</IonItem>
												</IonList>
											</>
										)}
										{selectedContent === 'Product' && (
											<>
												<IonList>
													<IonItem>
														<IonIcon
															className='mx-2'
															slot='start'
															icon={cashOutline}
														/>
														${productDetail.price}
													</IonItem>
													<IonItem>
														<IonIcon
															className='mx-2'
															slot='start'
															icon={bookOutline}
														/>

														<Translator
															from='en'
															to={currentUser.data.preferredLanguage || 'en'}
															text={productDetail.description}
															returnText={true}
															onTextTranslated={() => {}}
														/>
													</IonItem>
													<IonItem>
														<IonIcon
															className='mx-2'
															slot='start'
															icon={bookmarksOutline}
														/>
														<Translator
															from='en'
															to={currentUser.data.preferredLanguage || 'en'}
															text={productDetail.category}
															returnText={true}
															onTextTranslated={() => {}}
														/>
													</IonItem>
													<IonItem>
														<IonIcon
															className='mx-2'
															slot='start'
															icon={bookmarksOutline}
														/>
														<Translator
															from='en'
															to={currentUser.data.preferredLanguage || 'en'}
															text={
																productDetail.subcategory || 'Without category'
															}
															returnText={true}
															onTextTranslated={() => {}}
														/>
													</IonItem>
												</IonList>
											</>
										)}
									</>
								)}
							</IonCol>
						</IonRow>
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default QuotationDetail;
