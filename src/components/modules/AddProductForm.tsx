import React, { useState, useEffect, useRef } from 'react';
import {
	IonButton,
	IonList,
	IonItem,
	IonLabel,
	IonInput,
	IonIcon,
	IonTextarea,
	IonSelect,
	IonSelectOption,
} from '@ionic/react';
import { imageOutline, save } from 'ionicons/icons';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements';

const AddProductForm: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);

	const [editorState, setEditorState] = useState<any>(
		EditorState.createEmpty()
	);
	const [inputElement, setInputElement] = useState<HTMLInputElement>();
	const [imageViewer, setImageViewer] = useState<string>('');

	function eventEditor(eventEditorState: any) {
		setEditorState(eventEditorState);
	}
	function openInputFile(event: any) {
		setImageViewer(URL.createObjectURL(event.target.files[0]));
	}

	return (
		<>
			<IonList className='px-2'>
				<IonItem>
					<h3>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Add Product'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</h3>
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Name'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput required type='text'></IonInput>
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Category'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonSelect interface='action-sheet' cancelText='Dismiss'>
						<IonSelectOption value='Agriculture & Food'>
							<Trasnlator
								from='en'
								to={currentUser.data.preferredLanguage|| 'en'}
								text='Agriculture & Food'
								returnText={true}
								onTextTranslated={() => {}}
							/>
						</IonSelectOption>
						<IonSelectOption value='Apparel, Textiles & Accessories'>
							<Trasnlator
								from='en'
								to={currentUser.data.preferredLanguage|| 'en'}
								text='Apparel, Textiles & Accessories'
								returnText={true}
								onTextTranslated={() => {}}
							/>
						</IonSelectOption>
						<IonSelectOption value='Home, Lights & Construction'>
							<Trasnlator
								from='en'
								to={currentUser.data.preferredLanguage|| 'en'}
								text='Home, Lights & Construction'
								returnText={true}
								onTextTranslated={() => {}}
							/>
						</IonSelectOption>
					</IonSelect>
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Description'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonTextarea clearOnEdit={true} rows={2} cols={20}></IonTextarea>
				</IonItem>

				<IonItem className='mt-3'>
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
					fill='outline'
					expand='block'
					onClick={() => inputElement?.click()}
					className='ion-text-capitalize'>
					<input
						accept='image/*'
						multiple
						hidden
						type='file'
						ref={(input) => (input !== null ? setInputElement(input) : null)}
						onChange={openInputFile}
					/>
					<IonIcon slot='start' icon={imageOutline} />
					<Trasnlator
						from='en'
						to={currentUser.data.preferredLanguage|| 'en'}
						text='Choose Images'
						returnText={true}
						onTextTranslated={() => {}}
					/>
				</IonButton>
				<IonItem>
					{imageViewer && (
						<img
							className='m-2'
							src={imageViewer}
							style={{ width: '80px', height: '80px' }}
							alt=''
						/>
					)}
				</IonItem>

				<IonButton
					expand='block'
					className='mt-4 ion-button-full-rounded ion-text-capitalize fw-bold'>
					<Trasnlator
						from='en'
						to={currentUser.data.preferredLanguage|| 'en'}
						text='Save'
						returnText={true}
						onTextTranslated={() => {}}
					/>
					<IonIcon slot='end' icon={save} />
				</IonButton>
			</IonList>
		</>
	);
};

export default AddProductForm;
