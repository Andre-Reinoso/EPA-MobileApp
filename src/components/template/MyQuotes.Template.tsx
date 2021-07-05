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
import {
	barcodeOutline,
	calendarOutline,
	chevronForwardOutline,
	trashOutline,
} from 'ionicons/icons';

import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
import { db } from '../../config/Firebase.config';
import { DashboardContext } from '../../context/Dashboard.Context';
import { useHistory } from 'react-router';
import ProductService from '../../services/UseCases/Product.Service';
import QuotationService from '../../services/UseCases/Quotation.Service';
import UserService from '../../services/UseCases/User.Service';

const MyQuotesTemplate: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);
	const history = useHistory();
	const [quotes, setQuotes] = useState<Array<any>>([]);
	const { deleteQuotationById } = new QuotationService();
	useEffect(() => {
		const { getUserSellerById } = new UserService();
		db.collection('quotation')
			.where('userId', '==', currentUser.data.userId)
			.onSnapshot((result) => {
				let listOfquotations: any = [];
				result.forEach((quotation: any) => {
					listOfquotations.push({ docId: quotation.id, ...quotation.data() });
				});
				setQuotes(listOfquotations);
			});
	}, []);

	return (
		<>
			<IonRow>
				<IonCol>
					<IonList>
						<IonItem>
							<h3>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='My Quotes'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</h3>
						</IonItem>
						{quotes?.map((quote, i) => {
							return (
								<IonItemSliding key={i}>
									<IonItem
										onClick={() => {
											history.push(`/quotationDetail/${quote.docId}`)
										}}>
										<IonLabel>
											<h3>{quote.productName}</h3>
											<p>
												<IonIcon
													className='mx-2'
													slot='start'
													icon={barcodeOutline}
													color='primary'
												/>{' '}
												{quote.status} <br />
												<IonIcon
													className='mx-2'
													slot='start'
													icon={calendarOutline}
												/>
												{quote.aplicationDate}
											</p>
										</IonLabel>
										<IonIcon icon={chevronForwardOutline} />
									</IonItem>
									<IonItemOptions>
										<IonItemOption
											color='primary'
											onClick={() => {
												deleteQuotationById(quote.docId);
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

export default MyQuotesTemplate;
