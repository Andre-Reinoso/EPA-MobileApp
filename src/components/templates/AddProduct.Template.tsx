import React, { useState, useEffect, useRef } from 'react';
import {
	IonRow,
	IonCol,
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
import { cubeOutline, imageOutline, save } from 'ionicons/icons';
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const AddProductTemplate: React.FC = () => {
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
			<IonRow>
				<IonCol>
					<IonList className='px-2'>
						<IonItem>
							<h3>Add Product</h3>
						</IonItem>
						<IonItem className='mt-3'>
							<IonLabel position='floating'>Name</IonLabel>
							<IonInput required type='text'></IonInput>
						</IonItem>

						<IonItem className='mt-3'>
							<IonLabel>Category</IonLabel>
							<IonSelect interface='action-sheet' cancelText='Dismiss'>
								<IonSelectOption value='Agriculture & Food'>
									Agriculture & Food
								</IonSelectOption>
								<IonSelectOption value='Apparel, Textiles & Accessories'>
									Apparel, Textiles & Accessories
								</IonSelectOption>
								<IonSelectOption value='Home, Lights & Construction'>
									Home, Lights & Construction
								</IonSelectOption>
							</IonSelect>
						</IonItem>

						<IonItem className='mt-3'>
							<IonLabel position='floating'>Description</IonLabel>
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
								ref={(input) =>
									input !== null ? setInputElement(input) : null
								}
								onChange={openInputFile}
							/>
							<IonIcon slot='start' icon={imageOutline} />
							Choose Images
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
							Save
							<IonIcon slot='end' icon={save} />
						</IonButton>
					</IonList>
				</IonCol>
			</IonRow>
		</>
	);
};

export default AddProductTemplate;
