import React, { useEffect, useState } from 'react';
import {
	IonInput,
	IonItem,
	IonIcon,
	IonButton,
	IonLabel,
	IonList,
	IonNote,
	useIonLoading,
} from '@ionic/react';

import { businessOutline, calendarOutline } from 'ionicons/icons';

import { UserContext } from '../../context/User.Context';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { db } from '../../config/Firebase.config';
import Translator from '../elements/Translator';
import MarkDownEditor from '../elements/MarkDownEditor';
import UserService from '../../services/UseCases/User.Service';
import { useHistory } from 'react-router';

const BusinessProfileForm: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);
	const [presentLoading, dismissLoading] = useIonLoading();
	const history = useHistory();

	async function updateBussinesProfileForm({
		yearStablished,
		foundationYear,
		description,
	}: any) {
		try {
			presentLoading({
				message: 'Loading ...',
				translucent: true,
				spinner: 'bubbles',
				id: 'loadingSpiner',
			});
			const { mergeUserSeller } = new UserService();
			await mergeUserSeller(
				{ yearStablished, foundationYear, description },
				currentUser.data.userSeller.docId
			);

			dismissLoading();
			history.goBack();
		} catch (error) {
			console.log(error);
			dismissLoading();
		}
	}

	const { values, isSubmitting, setFieldValue, handleSubmit, errors } =
		useFormik({
			initialValues: {
				yearStablished: '',
				foundationYear: '',
				description: '',
			},
			onSubmit: () => {
				if (Object.entries(errors).length === 0) {
					updateBussinesProfileForm(values);
				}
			},
			validationSchema: Yup.object({
				yearStablished: Yup.date(),
				foundationYear: Yup.date(),
				description: Yup.string(),
			}),
		});

	return (
		<>
			<IonList className='px-2' lines='full'>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Company Name'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						disabled
						type='text'
						value={currentUser.data.userSeller.companyName}></IonInput>
					<IonIcon slot='start' icon={businessOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Ruc'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						disabled
						type='number'
						value={currentUser.data.userSeller.ruc}></IonInput>
					<IonIcon slot='start' icon={businessOutline} />
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='stacked'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Year Stablished'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						value={currentUser.data.userSeller.yearStablished}
						onIonInput={(e: any) => {
							setFieldValue('yearStablished', e.target.value);
						}}
						type='date'></IonInput>
					<IonIcon slot='start' icon={calendarOutline} />
					{errors.yearStablished && (
						<IonNote color='danger'>
							{errors.yearStablished ? errors.yearStablished : ''}
						</IonNote>
					)}
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='stacked'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Foundation Year'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						value={currentUser.data.userSeller.foundationYear}
						onIonInput={(e: any) => {
							setFieldValue('foundationYear', e.target.value);
						}}
						type='date'></IonInput>
					<IonIcon slot='start' icon={calendarOutline} />
					{errors.foundationYear && (
						<IonNote color='danger'>
							{errors.foundationYear ? errors.foundationYear : ''}
						</IonNote>
					)}
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='stacked' className='mb-2'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Description'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<div className='my-2'>
						<MarkDownEditor
							onTextChange={(e: any) => {
								setFieldValue('description', e);
							}}
							defaultValue={currentUser.data.userSeller.description || ''}
							showRenderContent={false}
						/>
						{errors.description && (
							<IonNote color='danger'>
								{errors.description ? errors.description : ''}
							</IonNote>
						)}
					</div>
				</IonItem>

				<IonButton
					onClick={() => {
						handleSubmit();
					}}
					disabled={Object.entries(errors).length !== 0}
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

export default BusinessProfileForm;
