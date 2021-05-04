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
	mailOutline,
	phonePortraitOutline,
	personOutline,
	earthOutline,
	golfOutline,
} from 'ionicons/icons';
import { getCountries, getRegionsByCode } from '../../services/epaApi';

interface selectedCountryType {
	nativeName: string;
	flag: string;
	alpha2Code: string;
}

interface selectedRegionType {
	name: string;
	ISO_3166_2: string;
}

const UserProfileForm: React.FC = () => {
	const [showModalCountries, setShowModalCountries] = useState<boolean>(false);
	const [countries, setCountries] = useState<Array<any>>([]);
	const [selectedCountry, setSelectecCountry] = useState<selectedCountryType>();

	const [showModalregions, setShowModalregions] = useState<boolean>(false);
	const [regions, setRegions] = useState<Array<any>>([]);
	const [selectedRegion, setSelectedRegion] = useState<selectedRegionType>();

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
									Save
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
									Save
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
					<IonLabel position='floating'>First Name</IonLabel>
					<IonInput required type='text'></IonInput>
					<IonIcon slot='start' icon={personOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Last Name</IonLabel>
					<IonInput required type='text'></IonInput>
					<IonIcon slot='start' icon={personOutline} />
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>Email</IonLabel>
					<IonInput required type='email'></IonInput>
					<IonIcon slot='start' icon={mailOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Phone Number</IonLabel>
					<IonInput required type='tel'></IonInput>
					<IonIcon slot='start' icon={phonePortraitOutline} />
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
						{selectedRegion?.name  ? (
							<>{selectedRegion?.name}</>
						) : (
							'Select Region'
						)}
					</IonButton>
					<IonIcon slot='start' icon={golfOutline} />
				</IonItem>

				<IonButton
					expand='block'
					className='mt-4 ion-button-full-rounded ion-text-capitalize fw-bold'>
					Save
				</IonButton>
			</IonList>
		</>
	);
};

export default UserProfileForm;
