import React, { useEffect, useState } from 'react';
import {
	IonInput,
	IonItem,
	IonIcon,
	IonButton,
	IonLabel,
	IonList,
	IonModal,
	IonAvatar,
	IonContent,
	IonHeader,
	IonToolbar,
	IonButtons,
} from '@ionic/react';
import {
	businessOutline,
	calendarOutline,
	earthOutline,
	golfOutline,
} from 'ionicons/icons';
import { getCountries, getRegionsByCode } from '../../services/epaApi';

import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements/';

interface selectedCountryType {
	nativeName: string;
	flag: string;
	alpha2Code: string;
}

interface selectedRegionType {
	name: string;
	ISO_3166_2: string;
}

const BusinessProfileForm: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);

	const [showModalCountries, setShowModalCountries] = useState<boolean>(false);
	const [countries, setCountries] = useState<Array<any>>([]);
	const [selectedCountry, setSelectecCountry] = useState<selectedCountryType>();

	const [showModalregions, setShowModalregions] = useState<boolean>(false);
	const [regions, setRegions] = useState<Array<any>>([]);
	const [selectedRegion, setSelectedRegion] = useState<selectedRegionType>();

	const [editorState, setEditorState] = useState<any>(
		EditorState.createEmpty()
	);

	function eventEditor(eventEditorState: any) {
		setEditorState(eventEditorState);
	}

	useEffect(() => {
		let isCancelled = false;

		getCountries().then((result) => {
			if (!isCancelled) {
				setCountries(result);
			}
		});
		return () => {
			isCancelled = true;
		};
	}, [countries, setCountries]);

	useEffect(() => {
		let isCancelled = false;
		if (selectedCountry?.alpha2Code !== undefined) {
			getRegionsByCode(selectedCountry!.alpha2Code).then((result) => {
				if (!isCancelled) {
					setRegions(result);
				}
			});
		}
		return () => {
			isCancelled = true;
		};
	}, [selectedCountry?.alpha2Code]);
	return (
		<>
			<IonModal
				isOpen={showModalCountries}
				animated
				backdropDismiss
				showBackdrop>
				<IonContent>
					<IonHeader translucent className='ion-no-border'>
						<IonToolbar>
							<IonButtons slot='end'>
								<IonButton
									fill='clear'
									color='primary'
									onClick={() => {
										setShowModalCountries(false);
									}}>
									<Trasnlator
										from='en'
										to={currentUser.data.preferredLanguage}
										text='Save'
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</IonButton>
							</IonButtons>
						</IonToolbar>
					</IonHeader>

					<IonList lines='full'>
						{countries?.map((country, index) => {
							return (
								<IonItem
									key={index}
									color={`${
										selectedCountry?.alpha2Code === country.alpha2Code
											? 'primary'
											: ''
									}`}
									onClick={() => {
										setSelectecCountry({ ...country });
										setSelectedRegion({ name: '', ISO_3166_2: '' });
									}}>
									<IonAvatar slot='start'>
										<img src={country.flag} />
									</IonAvatar>
									<IonLabel>{country.nativeName}</IonLabel>
								</IonItem>
							);
						})}
					</IonList>
				</IonContent>
			</IonModal>

			<IonModal isOpen={showModalregions} animated backdropDismiss showBackdrop>
				<IonContent>
					<IonHeader translucent className='ion-no-border'>
						<IonToolbar>
							<IonButtons slot='end'>
								<IonButton
									fill='clear'
									color='primary'
									onClick={() => {
										setShowModalregions(false);
									}}>
									<Trasnlator
										from='en'
										to={currentUser.data.preferredLanguage}
										text='Save'
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</IonButton>
							</IonButtons>
						</IonToolbar>
					</IonHeader>

					<IonList lines='full'>
						{regions.map((region, index) => {
							return (
								<IonItem
									key={index}
									color={`${
										selectedRegion?.ISO_3166_2 === region.ISO_3166_2
											? 'primary'
											: ''
									}`}
									onClick={() => {
										setSelectedRegion({ ...region });
									}}>
									<IonLabel>{region.name}</IonLabel>
								</IonItem>
							);
						})}
					</IonList>
				</IonContent>
			</IonModal>

			<IonList className='px-2' lines='full'>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage}
							text='Company Name'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput required type='text'></IonInput>
					<IonIcon slot='start' icon={businessOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage}
							text='Ruc'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput required type='number'></IonInput>
					<IonIcon slot='start' icon={businessOutline} />
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='stacked'>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage}
							text='Year Stablished'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput required type='date'></IonInput>
					<IonIcon slot='start' icon={calendarOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='stacked'>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage}
							text='Foundation Year'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput required type='date'></IonInput>
					<IonIcon slot='start' icon={calendarOutline} />
				</IonItem>

				<IonItem className='mt-3'>
					<IonButton
						className='ion-text-capitalize ion-text-size-xs '
						color='dark'
						expand='full'
						fill='clear'
						onClick={() => setShowModalCountries(true)}>
						{selectedCountry ? (
							<>
								<img
									src={selectedCountry?.flag}
									style={{ width: '40px', height: '30px' }}
									alt=''
									className='me-3'
								/>
								{selectedCountry?.nativeName}
							</>
						) : (
							'Select Country'
						)}
					</IonButton>
					<IonIcon slot='start' icon={earthOutline} />
				</IonItem>

				<IonItem className='mt-3'>
					<IonButton
						className='ion-text-capitalize ion-text-size-xs'
						color='dark'
						expand='full'
						fill='clear'
						onClick={() => setShowModalregions(true)}>
						{selectedRegion?.name ? (
							<>{selectedRegion?.name}</>
						) : (
							'Select Region'
						)}
					</IonButton>
					<IonIcon slot='start' icon={golfOutline} />
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='stacked' className='mb-2'>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage}
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
					expand='block'
					className='mt-4 ion-button-full-rounded ion-text-capitalize fw-bold'>
					<Trasnlator
						from='en'
						to={currentUser.data.preferredLanguage}
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
