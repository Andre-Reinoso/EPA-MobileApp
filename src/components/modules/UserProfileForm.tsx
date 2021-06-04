import React, { useEffect, useState } from 'react';
import {
	IonInput,
	IonItem,
	IonIcon,
	IonButton,
	IonLabel,
	IonList,
	IonNote,
} from '@ionic/react';
import {
	mailOutline,
	phonePortraitOutline,
	personOutline,
	earthOutline,
	golfOutline,
} from 'ionicons/icons';
import { UserContext } from '../../context/User.Context';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Translator from '../elements/Translator';
import { db, auth } from '../../config/Firebase.config';

const UserProfileForm: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);

	const { values, isSubmitting, setFieldValue, handleSubmit, errors } =
		useFormik({
			initialValues: {
				district: '',
				province: '',
			},
			onSubmit: () => {
				if (Object.entries(errors).length === 0) {
					updateProfileForm(values);
				}
			},
			validationSchema: Yup.object({
				province: Yup.string().required('Required field'),
				district: Yup.string().required('Required field'),
			}),
		});

	async function updateProfileForm({}) {
		try {
			//actualizar country region distric province
			await db.collection('users').doc(currentUser.data.uid).update({});
		} catch (error) {}
	}

	return (
		<>
			<IonList className='px-2' lines='full'>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='First Name'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						required
						type='text'
						disabled
						value={currentUser.data.firstName}></IonInput>
					<IonIcon slot='start' icon={personOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Last Name'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						required
						type='text'
						disabled
						value={currentUser.data.lastName}></IonInput>
					<IonIcon slot='start' icon={personOutline} />
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Email'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						disabled
						type='email'
						value={auth.currentUser?.email}></IonInput>
					<IonIcon slot='start' icon={mailOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Phone Number'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						disabled
						type='tel'
						value={currentUser.data.phoneNumber}></IonInput>
					<IonIcon slot='start' icon={phonePortraitOutline} />
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Province'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
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
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='District'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
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

				<IonButton
					onClick={() => {
						handleSubmit();
					}}
					expand='block'
					className='mt-4 ion-button-full-rounded ion-text-capitalize fw-bold'>
					<Translator
						from='en'
						to={currentUser.data.preferredLanguage || 'en'}
						text='Save'
						returnText={true}
						onTextTranslated={() => {}}
					/>
				</IonButton>
			</IonList>
		</>
	);
};

export default UserProfileForm;
