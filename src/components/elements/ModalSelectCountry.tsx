import React, { FC, useEffect, useState } from 'react';
import {
	IonItem,
	IonButton,
	IonLabel,
	IonList,
	IonModal,
	IonAvatar,
	IonContent,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonNote,
} from '@ionic/react';
import { UserContext } from '../../context/User.Context';
import Translator from './../elements/Translator';
import EpaService from '../../services/EPA/Epa.Service';

interface selectedCountryType {
	nativeName: string;
	flag: string;
	alpha2Code: string;
}

interface ModalSelectCountryType {
	onSelectedCountry?: Function;
	defaultCountry: selectedCountryType;
}

const ModalSelectCountry = ({
	onSelectedCountry,
	defaultCountry,
}: ModalSelectCountryType) => {
	const [showModalCountries, setShowModalCountries] = useState<boolean>(false);
	const [countries, setCountries] = useState<Array<any>>([]);
	const [selectedCountry, setSelectecCountry] = useState<selectedCountryType>({
		...defaultCountry,
	});
	const { currentUser } = React.useContext(UserContext);

	useEffect(() => {
		const { getAllCountries } = new EpaService();
		getAllCountries().then((result) => {
			setCountries(result);
		});
	}, []);

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
									<Translator
										from='en'
										to={currentUser.data.preferredLanguage || 'en'}
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
										if (onSelectedCountry) onSelectedCountry({ ...country });
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

			<IonButton
				className='ion-text-capitalize ion-text-size-xs '
				color='medium'
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
					<Translator
						from='en'
						to={currentUser.data.preferredLanguage || 'en'}
						text='Select Country'
						returnText={true}
						onTextTranslated={() => {}}
					/>
				)}
			</IonButton>
		</>
	);
};
export default ModalSelectCountry;
