import React, { useState, useEffect } from 'react';
import {
	IonInput,
	IonItem,
	IonIcon,
	IonButton,
	IonLabel,
	IonList,
	useIonToast,
	IonNote,
	IonSelect,
	IonSelectOption,
} from '@ionic/react';
import {
	mailOutline,
	lockClosedOutline,
	phonePortraitOutline,
	personOutline,
	earthOutline,
	golfOutline,
} from 'ionicons/icons';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import UserService from './../../services/UseCases/User.Service';
import EpaService from './../../services/EPA/Epa.Service';
const SignUpBuyerForm: React.FC = () => {
	const [present, dismiss] = useIonToast();
	const [countries, setCountries] = useState<Array<any>>([]);
	const [regions, setRegions] = useState<Array<any>>([]);

	const { values, setFieldValue, handleSubmit, errors } = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			phoneNumber: '',
			email: '',
			password: '',
			confirmPassword: '',
			country: {
				alpha2Code: '',
				name: '',
				nativeName: '',
			},
			deparment: {
				name: '',
				iso_36166_2: '',
			},
			district: '',
			province: '',
		},
		onSubmit: () => {
			if (Object.entries(errors).length === 0) {
				console.log(values);
				signUpBuyer(values);
			}
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required('Required field'),
			lastName: Yup.string().required('Required field'),
			phoneNumber: Yup.number().required('Required field'),
			email: Yup.string().email('Invalid Email').required('Required field'),
			province: Yup.string().required('Required field'),
			country: Yup.object().required('Required field'),
			deparment: Yup.object().required('Required field'),
			district: Yup.string().required('Required field'),
			password: Yup.string()
				.min(6, 'Min 6 characters')
				.required('Required field'),
			confirmPassword: Yup.string()
				.min(6, 'Min 6 characters')
				.oneOf([Yup.ref('password'), null], 'Passwords must match')
				.required('Required field'),
		}),
	});

	useEffect(() => {
		const { getAllCountries } = new EpaService();
		getAllCountries().then((result: any) => {
			setCountries(result);
		});
	}, []);

	useEffect(() => {
		const { getRegionsByCode } = new EpaService();
		getRegionsByCode(values.country.alpha2Code || 'PE').then((result) => {
			setRegions(result);
		});
	}, [values.country.alpha2Code]);

	async function signUpBuyer({
		phoneNumber,
		firstName,
		lastName,
		password,
		email,
		province,
		district,
		country,
		deparment,
	}: any) {
		try {
			const { verifyRegisteredPhoneNumber, signUpUser, createUser } =
				new UserService();
			try {
				await verifyRegisteredPhoneNumber(phoneNumber);
				const { user } = await signUpUser({ email, password });
				await createUser(
					{
						phoneNumber,
						firstName,
						email,
						lastName,
						isSeller: false,
						status: 'active',
						preferredLanguage: 'en',
						country,
						deparment,
						province,
						district,
						favoriteProduct: [],
						commercialLine: [],
					},
					user?.uid || ''
				);
			} catch (error) {
				present({
					buttons: [{ text: 'Hide', handler: () => dismiss() }],
					message: error.message,
				});
			}
		} catch (error) {}
	}

	return (
		<>
			<IonList className='px-2'>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>First Name</IonLabel>
					<IonInput
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
					<IonLabel position='floating'>Country</IonLabel>
					<IonSelect
						color={errors.country ? 'danger' : 'default'}
						interface='action-sheet'
						value={values.country}
						onIonChange={(e: any) => {
							setFieldValue('country', e.target.value);
							setFieldValue('deparment', {});
						}}>
						{countries.map((country, i) => {
							return (
								<IonSelectOption key={i} value={country}>
									{country.nativeName}
								</IonSelectOption>
							);
						})}
					</IonSelect>
					<IonIcon slot='start' icon={earthOutline} />
					{errors.country && (
						<IonNote color='danger'>
							{errors.country ? errors.country : ''}
						</IonNote>
					)}
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>Deparment</IonLabel>
					<IonSelect
						color={errors.deparment ? 'danger' : 'default'}
						interface='action-sheet'
						value={values.deparment}
						onIonChange={(e: any) => {
							setFieldValue('deparment', e.target.value);
						}}>
						{regions.map((region, i) => {
							return (
								<IonSelectOption key={i} value={region}>
									{region.name}
								</IonSelectOption>
							);
						})}
					</IonSelect>
					<IonIcon slot='start' icon={golfOutline} />
					{errors.deparment && (
						<IonNote color='danger'>
							{errors.deparment ? errors.deparment : ''}
						</IonNote>
					)}
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
