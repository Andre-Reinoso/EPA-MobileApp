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

import { businessOutline, calendarOutline } from 'ionicons/icons';

import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements/';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { db } from '../../services/firebase/firebase.config';

import { draftToMarkdown } from 'markdown-draft-js';

const BusinessProfileForm: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);

	const [editorState, setEditorState] = useState<any>(
		EditorState.createEmpty()
	);

	function eventEditor(eventEditorState: any) {
		setEditorState(eventEditorState);
	}

	async function updateBussinesProfileForm({
		yearStablished,
		foundationYear,
	}: any) {
		try {
			//year stablished fundation and description
			await db
				.collection('usersSeller')
				.doc(currentUser.data.usersSellerInfo.docId)
				.update({
					yearStablished,
					foundationYear,
					description: draftToMarkdown(
						convertToRaw(editorState.getCurrentContent())
					),
				});
		} catch (error) {}
	}

	const {
		values,
		isSubmitting,
		setFieldValue,
		handleSubmit,
		errors,
	} = useFormik({
		initialValues: {
			yearStablished: '',
			foundationYear: '',
		},
		onSubmit: () => {
			if (Object.entries(errors).length === 0) {
				updateBussinesProfileForm(values);
			}
		},
		validationSchema: Yup.object({
			yearStablished: Yup.date().required('Required field'),
			foundationYear: Yup.date().required('Required field'),
		}),
	});

	return (
		<>
			<IonList className='px-2' lines='full'>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Company Name'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						disabled
						type='text'
						value={currentUser.data.usersSellerInfo.companyName}></IonInput>
					<IonIcon slot='start' icon={businessOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Ruc'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						disabled
						type='number'
						value={currentUser.data.usersSellerInfo.ruc}></IonInput>
					<IonIcon slot='start' icon={businessOutline} />
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='stacked'>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Year Stablished'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						value={currentUser.data.usersSellerInfo.yearStablished}
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
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Foundation Year'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						value={currentUser.data.usersSellerInfo.foundationYear}
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
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Description'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<Editor
						editorState={editorState}
						toolbarClassName='toolbarClassName'
						wrapperClassName='wrapperClassName'
						editorClassName='editorClassName'
						onEditorStateChange={eventEditor}
						toolbar={{
							options: [
								'history',
								,
								'blockType',
								'inline',
								'list',
								'textAlign',
							],
							inline: {
								options: ['bold', 'italic', 'underline'],
							},
							list: {
								options: ['unordered', 'ordered'],
							},
							textAlign: {
								options: ['left', 'center', 'right'],
							},
							blockType: {
								inDropdown: true,
								options: [
									'Normal',
									'H1',
									'H2',
									'H3',
									'H4',
									'H5',
									'H6',
									'Blockquote',
								],
							},
						}}
					/>
				</IonItem>

				<IonButton
					onClick={() => {
						handleSubmit();
					}}
					disabled={Object.entries(errors).length !== 0}
					expand='block'
					className='mt-4 ion-button-full-rounded ion-text-capitalize fw-bold'>
					<Trasnlator
						from='en'
						to={currentUser.data.preferredLanguage|| 'en'}
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
