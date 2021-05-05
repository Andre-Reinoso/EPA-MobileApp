import React from 'react';
import {
	IonInput,
	IonItem,
	IonIcon,
	IonButton,
	IonLabel,
	IonList,
	useIonToast,
	IonNote,
} from '@ionic/react';
import {
	mailOutline,
	businessOutline,
	lockClosedOutline,
	phonePortraitOutline,
	personOutline,
} from 'ionicons/icons';
import { auth, db } from './../../services/firebase/firebase.config';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { translateText } from './../../services/translate/';

const SignUpBuyerForm: React.FC = () => {
	const [present, dismiss] = useIonToast();

	async function signUpBuyer({
		companyName,
		phoneNumber,
		firstName,
		lastName,
		password,
		email,
	}: any) {
		try {
			const response = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await db.collection('users').doc(response.user?.uid).set({
				companyName,
				phoneNumber,
				firstName,
				lastName,
				status:"active"
			});
		} catch (error) {
			present({
				buttons: [{ text: 'Hide', handler: () => dismiss() }],
				message: await translateText(error.message, 'en', 'es'),
			});
		}
	}
	const {
		values,
		isSubmitting,
		setFieldValue,
		handleSubmit,
		errors,
	} = useFormik({
		initialValues: {
			companyName: '',
			firstName: '',
			lastName: '',
			phoneNumber: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		onSubmit: () => {
			if (Object.entries(errors).length === 0) {
				signUpBuyer(values);
			}
		},
		validationSchema: Yup.object({
			companyName: Yup.string().required('Required field'),
			firstName: Yup.string().required('Required field'),
			lastName: Yup.string().required('Required field'),
			phoneNumber: Yup.number().required('Required field'),
			email: Yup.string().email('Invalid Email').required('Required field'),
			password: Yup.string()
				.min(6, 'Min 6 characters')
				.required('Required field'),
			confirmPassword: Yup.string()
				.min(6, 'Min 6 characters')
				.oneOf([Yup.ref('password'), null], 'Passwords must match')
				.required('Required field'),
		}),
	});
	return (
		<>
			<IonList className='px-2'>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Company Name</IonLabel>
					<IonInput
						required
						type='text'
						color={errors.companyName ? 'danger' : 'default'}
						onIonInput={(e: any) => {
							setFieldValue('companyName', e.target.value);
						}}></IonInput>
					<IonIcon slot='start' icon={businessOutline} />
					{errors.companyName && (
						<IonNote color='danger'>
							{errors.companyName ? errors.companyName : ''}
						</IonNote>
					)}
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>First Name</IonLabel>
					<IonInput
						required
						type='text'
						color={errors.firstName ? 'danger' : 'default'}
						onIonInput={(e: any) => {
							setFieldValue('firstName', e.target.value);
						}}></IonInput>
					<IonIcon slot='start' icon={personOutline} />
					{errors.firstName && (
						<IonNote color='danger'>
							{errors.firstName ? errors.firstName : ''}
						</IonNote>
					)}
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Last Name</IonLabel>
					<IonInput
						required
						type='text'
						color={errors.lastName ? 'danger' : 'default'}
						onIonInput={(e: any) => {
							setFieldValue('lastName', e.target.value);
						}}></IonInput>
					<IonIcon slot='start' icon={personOutline} />
					{errors.lastName && (
						<IonNote color='danger'>
							{errors.lastName ? errors.lastName : ''}
						</IonNote>
					)}
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Phone Number</IonLabel>
					<IonInput
						required
						type='tel'
						color={errors.phoneNumber ? 'danger' : 'default'}
						onIonInput={(e: any) => {
							setFieldValue('phoneNumber', e.target.value);
						}}></IonInput>
					<IonIcon slot='start' icon={phonePortraitOutline} />
					{errors.phoneNumber && (
						<IonNote color='danger'>
							{errors.phoneNumber ? errors.phoneNumber : ''}
						</IonNote>
					)}
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Email</IonLabel>
					<IonInput
						required
						type='email'
						color={errors.email ? 'danger' : 'default'}
						onIonInput={(e: any) => {
							setFieldValue('email', e.target.value);
						}}></IonInput>
					<IonIcon slot='start' icon={mailOutline} />
					{errors.email && (
						<IonNote color='danger'>{errors.email ? errors.email : ''}</IonNote>
					)}
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Password</IonLabel>
					<IonInput
						required
						type='password'
						color={errors.password ? 'danger' : 'default'}
						onIonInput={(e: any) => {
							setFieldValue('password', e.target.value);
						}}></IonInput>
					<IonIcon slot='start' icon={lockClosedOutline} />
					{errors.password && (
						<IonNote color='danger'>
							{errors.password ? errors.password : ''}
						</IonNote>
					)}
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Confirm Password</IonLabel>
					<IonInput
						required
						type='password'
						color={errors.confirmPassword ? 'danger' : 'default'}
						onIonInput={(e: any) => {
							setFieldValue('confirmPassword', e.target.value);
						}}></IonInput>
					<IonIcon slot='start' icon={lockClosedOutline} />
					{errors.confirmPassword && (
						<IonNote color='danger'>
							{errors.confirmPassword ? errors.confirmPassword : ''}
						</IonNote>
					)}
				</IonItem>

				<IonButton
					onClick={() => {
						handleSubmit();
					}}
					disabled={Object.entries(errors).length !== 0}
					expand='block'
					className='mt-4 ion-button-full-rounded ion-text-capitalize fw-bold'>
					Sign Up
				</IonButton>
			</IonList>
		</>
	);
};

export default SignUpBuyerForm;
