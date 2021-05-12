import React, { useState } from 'react';
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
	earthOutline,
	golfOutline,
	personOutline,
} from 'ionicons/icons';
import { auth, db } from './../../services/firebase/firebase.config';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { verifyRuc } from '../../services/epaApi';
import { ModalSelectCountry, ModalSelectRegion } from '../elements';

const SignUpSellerForm: React.FC = () => {
	const [present, dismiss] = useIonToast();

	const [selectedCountry, setSelectedCountry] = useState<any>({
		alpha2Code: 'PE',
		flag: 'https://restcountries.eu/data/per.svg',
		nativeName: 'Perú',
	});

	const [selectedRegion, setSelectedRegion] = useState<any>();

	async function signUpSeller({
		companyName,
		ruc,
		phoneNumber,
		firstName,
		lastName,
		password,
		email,
		province,
		district,
	}: any) {
		const verifiedRuc = await verifyRuc(ruc);
		try {
			if (verifiedRuc.message === 'Invalid RUC') throw new Error('Invalid RUC');

			const responseRuc = await db
				.collection('usersSeller')
				.where('ruc', '==', ruc)
				.get();
			if (!responseRuc.empty) throw new Error('The Ruc is already registered');

			const responsePhoneNumber = await db
				.collection('users')
				.where('phoneNumber', '==', phoneNumber)
				.get();
			if (!responsePhoneNumber.empty)
				throw new Error('The Phone Number is already registered');

			const responseAuth = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await db.collection('users').doc(responseAuth.user?.uid).set({
				firstName,
				lastName,
				phoneNumber,
				status: 'active',
				preferredLanguage: 'en',
				isSeller: true,
				country: selectedCountry,
				deparment: selectedRegion,
				province,
				district,
			});
			await db.collection('usersSeller').doc().set({
				userId: responseAuth.user?.uid,
				companyName,
				ruc,
			});
		} catch (error) {
			//console.log(error);
			present({
				buttons: [{ text: 'Hide', handler: () => dismiss() }],
				message: error.message,
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
			ruc: '',
			firstName: '',
			lastName: '',
			phoneNumber: '',
			email: '',
			password: '',
			confirmPassword: '',
			district: '',
			province: '',
		},
		onSubmit: () => {
			if (Object.entries(errors).length === 0) {
				signUpSeller(values);
			}
		},
		validationSchema: Yup.object({
			companyName: Yup.string().required('Required field'),
			province: Yup.string().required('Required field'),
			district: Yup.string().required('Required field'),
			ruc: Yup.string()
				.matches(/^[0-9]+$/, 'Must be only digits')
				.min(11, 'Min 11 characters')
				.max(11, 'Max 11 characters')
				.required('Required field'),
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
					<IonLabel position='floating'>Ruc</IonLabel>
					<IonInput
						required
						type='number'
						color={errors.ruc ? 'danger' : 'default'}
						onIonInput={(e: any) => {
							setFieldValue('ruc', e.target.value);
						}}></IonInput>
					<IonIcon slot='start' icon={businessOutline} />
					{errors.ruc && (
						<IonNote color='danger'>{errors.ruc ? errors.ruc : ''}</IonNote>
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
					<ModalSelectCountry
						defaultCountry={selectedCountry}
						onSelectedCountry={(e: any) => {
							setSelectedCountry(e);
						}}
					/>
					<IonIcon slot='start' icon={earthOutline} />
				</IonItem>

				<IonItem className='mt-3'>
					<IonIcon slot='start' icon={golfOutline} />
					<ModalSelectRegion
						onSelectedRegion={(e: any) => {
							setSelectedRegion(e);
						}}
						alpha2Code={selectedCountry!.alpha2Code}
					/>
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>Province</IonLabel>
					<IonInput
						color={errors.province ? 'danger' : 'default'}
						type='text'
						onIonInput={(e: any) => {
							setFieldValue('province', e.target.value);
						}}></IonInput>
					<IonIcon slot='start' icon={golfOutline} />
					{errors.province && (
						<IonNote color='danger'>
							{errors.province ? errors.province : ''}
						</IonNote>
					)}
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>District</IonLabel>
					<IonInput
						color={errors.district ? 'danger' : 'default'}
						type='text'
						onIonInput={(e: any) => {
							setFieldValue('district', e.target.value);
						}}></IonInput>
					<IonIcon slot='start' icon={golfOutline} />
					{errors.district && (
						<IonNote color='danger'>
							{errors.district ? errors.district : ''}
						</IonNote>
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

export default SignUpSellerForm;
