/*import React, { useEffect, useState } from 'react';
import {
	IonToolbar,
	IonButtons,
	IonTitle,
	IonIcon,
	IonButton,
	IonMenuButton,
} from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

//Editor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

//
import { convertToRaw, EditorState } from 'draft-js';

//MarkDown view
import ReactMarkdown from 'react-markdown';
import { draftToMarkdown } from 'markdown-draft-js';

const Login: React.FC = () => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const history = useHistory();
	return (
		<>
			<IonToolbar color='primary'>
				<IonButtons slot='start'>
					<IonMenuButton autoHide={false} />
				</IonButtons>
				<IonButtons slot='secondary'>
					<IonButton>
						<IonIcon slot='icon-only' icon={heartOutline} />
					</IonButton>
				</IonButtons>
				<IonTitle size='small' className='ion-text-center'>
					Market Place
				</IonTitle>
			</IonToolbar>

			<IonButton
				onClick={() => {
					history.push('/welcome');
				}}>
				Welcome
			</IonButton>
			<IonButton
				onClick={() => {
					history.push('/selectLanguage');
				}}>
				language
			</IonButton>

			<Editor
				editorState={editorState}
				toolbarClassName='toolbarClassName'
				wrapperClassName='wrapperClassName'
				editorClassName='editorClassName'
				onEditorStateChange={(eventEditorState) => {
					setEditorState(eventEditorState);
				}}
				toolbar={{
					options: ['history', , 'blockType', 'inline', 'list', 'textAlign'],
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

			<h1>Resultado en MarkDown</h1>
			<textarea
				disabled
				value={
					editorState &&
					draftToMarkdown(convertToRaw(editorState.getCurrentContent()))
				}
			/>

			<h1>Resultado Renderizado</h1>
			<ReactMarkdown>
				{draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
			</ReactMarkdown>
		</>
	);
};

export default Login;
*/

import React from 'react';
import { LoginLayout } from './../components/layouts';
import { LoginTemplate } from './../components/templates';

const Login: React.FC = () => {
	return (
		<>
			<LoginLayout>
				<LoginTemplate />
			</LoginLayout>
		</>
	);
};

export default Login;
