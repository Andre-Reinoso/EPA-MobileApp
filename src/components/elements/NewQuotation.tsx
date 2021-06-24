import React, { useState, useEffect } from 'react';
import {
	IonButton,
	IonIcon,
	IonModal,
	IonList,
	IonItem,
	IonLabel,
	IonSelect,
	IonSelectOption,
	IonInput,
	IonTextarea,
	IonNote,
} from '@ionic/react';
import {
	albumsOutline,
	earthOutline,
	cubeOutline,
	cardOutline,
	appsOutline,
	sendOutline,
} from 'ionicons/icons';
import { UserContext } from '../../context/User.Context';
import Translator from './Translator';
import EpaService from '../../services/EPA/Epa.Service';
import QuotationService from '../../services/UseCases/Quotation.Service';
import { useFormik } from 'formik';
import * as Yup from 'yup';
interface PropsNewQuotation {
	productId: string;
	productName: string;
	userSellerId: string;
	price: number;
}

const NewQuotation = ({
	productId,
	productName,
	userSellerId,
	price,
}: PropsNewQuotation) => {
	const { currentUser } = React.useContext(UserContext);
	const [showModal, setShowModal] = useState(false);
	const [countries, setCountries] = useState<Array<any>>([]);

	useEffect(() => {
		const { getAllCountries } = new EpaService();
		getAllCountries().then((result: any) => {
			setCountries(result);
		});
	}, []);

	const addNewQuotation = async (QuotationValues: any) => {
		try {
			const { addQuotation } = new QuotationService();

			await addQuotation(QuotationValues);
			setShowModal(false);
		} catch (error) {
			console.log(error);
		}
	};

	const { values, setFieldValue, handleSubmit, errors } = useFormik({
		initialValues: {
			destiny: '',
			estimateAmount: 0,
			messageAnswered: '',
			paymentTerms: '',
			shippingDate: '', //fecha posible para envio - ingreso por usuario
		},
		onSubmit: () => {
			if (Object.entries(errors).length === 0) {
				let date = new Date();
				let day = date.getDate();
				let month = date.getMonth() + 1;
				let year = date.getFullYear();
				let aplicationDate = ''; //dia del envio de cotizacion - automatico
				if (month < 10) {
					aplicationDate = `${day}/0${month}/${year}`;
				} else {
					aplicationDate = `${day}/${month}/${year}`;
				}
				addNewQuotation({
					productId,
					price,
					userSellerId,
					userId: currentUser.data.userId,
					aplicationDate,
					messageAnsweredTranslate: '',
					messageTranslate: '',
					messageUser: '',
					status: 'Por atender',
					...values,
				});
			}
		},
		validationSchema: Yup.object({
			destiny: Yup.string().required(),
			estimateAmount: Yup.number().min(1).required(),
			messageAnswered: Yup.string(),
			paymentTerms: Yup.string().required(),
			shippingDate: Yup.string().required(),
		}),
	});

	return (
		<>
			<IonModal isOpen={showModal} cssClass='my-custom-class'>
				<IonList>
					<IonItem>
						<h3>New Quotation</h3>
					</IonItem>
					<IonItem className='mt-3'>
						<IonLabel position='floating'>Product</IonLabel>
						<IonInput disabled type='text' value={productName}></IonInput>
						<IonIcon slot='start' icon={cubeOutline} />
					</IonItem>
					<IonItem className='mt-3'>
						<IonLabel position='floating'>Country Destination</IonLabel>
						<IonSelect
							interface='action-sheet'
							value={values.destiny}
							onIonChange={(e: any) => {
								setFieldValue('destiny', e.target.value);
							}}>
							{countries.map((country, i) => {
								return (
									<IonSelectOption key={i} value={country.nativeName}>
										{country.nativeName}
									</IonSelectOption>
								);
							})}
						</IonSelect>
						<IonIcon slot='start' icon={earthOutline} />
						{errors.destiny && (
							<IonNote color='danger'>
								{errors.destiny ? errors.destiny : ''}
							</IonNote>
						)}
					</IonItem>
					<IonItem className='mt-3'>
						<IonLabel position='floating'>Price</IonLabel>
						<IonInput disabled type='number' value={price}></IonInput>
						<IonIcon slot='start' icon={cubeOutline} />
					</IonItem>
					<IonItem className='mt-3'>
						<IonLabel position='floating'>Estimated Amount</IonLabel>
						<IonInput
							type='number'
							value={values.estimateAmount}
							onIonChange={(e: any) => {
								setFieldValue('estimateAmount', e.target.value);
							}}></IonInput>
						<IonIcon slot='start' icon={appsOutline} />
						{errors.estimateAmount && (
							<IonNote color='danger'>
								{errors.estimateAmount ? errors.estimateAmount : ''}
							</IonNote>
						)}
					</IonItem>
					<IonItem className='mt-3'>
						<IonLabel position='floating'>Shipping Date</IonLabel>
						<IonInput
							type='date'
							value={values.shippingDate}
							onIonChange={(e: any) => {
								setFieldValue('shippingDate', e.target.value);
							}}></IonInput>
						<IonIcon slot='start' icon={appsOutline} />
						{errors.shippingDate && (
							<IonNote color='danger'>
								{errors.shippingDate ? errors.shippingDate : ''}
							</IonNote>
						)}
					</IonItem>
					<IonItem className='mt-3'>
						<IonLabel position='floating'>Payment Terms</IonLabel>
						<IonSelect
							interface='action-sheet'
							value={values.paymentTerms}
							onIonChange={(e: any) => {
								setFieldValue('paymentTerms', e.target.value);
							}}>
							{['Deposito CCI', 'Wester Union'].map((paymentTerm, i) => {
								return (
									<IonSelectOption key={i} value={paymentTerm}>
										{paymentTerm}
									</IonSelectOption>
								);
							})}
						</IonSelect>
						<IonIcon slot='start' icon={cardOutline} />
						{errors.paymentTerms && (
							<IonNote color='danger'>
								{errors.paymentTerms ? errors.paymentTerms : ''}
							</IonNote>
						)}
					</IonItem>
					<IonItem className='mt-3'>
						<IonLabel position='floating'>Message Answered</IonLabel>
						<IonTextarea
							onIonChange={(e: any) => {
								setFieldValue('messageAnswered', e.target.value);
							}}></IonTextarea>
						<IonIcon slot='start' icon={sendOutline} />
						{errors.messageAnswered && (
							<IonNote color='danger'>
								{errors.messageAnswered ? errors.messageAnswered : ''}
							</IonNote>
						)}
					</IonItem>
				</IonList>
				<IonButton
					onClick={() => {
						handleSubmit();
					}}>
					Send Quotation
				</IonButton>
			</IonModal>

			<div className='ion-text-center mt-4'>
				<IonButton
					className='ion-text-capitalize'
					onClick={() => setShowModal(true)}>
					<Translator
						from='en'
						to={currentUser.data.preferredLanguage || 'en'}
						text='New Quotation'
						returnText={true}
						onTextTranslated={() => {}}
					/>

					<IonIcon slot='end' icon={albumsOutline} />
				</IonButton>
			</div>
		</>
	);
};
export default NewQuotation;
