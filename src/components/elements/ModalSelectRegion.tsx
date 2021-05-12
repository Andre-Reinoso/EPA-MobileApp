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
import { getRegionsByCode } from '../../services/epaApi';
import { Trasnlator } from './../elements/';
import { UserContext } from '../../context/User.Context';

interface selectedRegionType {
	name: string;
	ISO_3166_2: string;
}

interface ModalSelectRegionType {
	alpha2Code: string;
	onSelectedRegion?: Function;
}
const ModalSelectRegion = ({
	alpha2Code,
	onSelectedRegion,
}: ModalSelectRegionType) => {
	const [showModalregions, setShowModalregions] = useState<boolean>(false);
	const [regions, setRegions] = useState<Array<any>>([]);
	const [selectedRegion, setSelectedRegion] = useState<selectedRegionType>();
	const { currentUser } = React.useContext(UserContext);
	useEffect(() => {
		let isCancelled = false;
		if (alpha2Code !== undefined) {
			getRegionsByCode(alpha2Code).then((result) => {
				if (!isCancelled) {
					setRegions(result);
				}
			});
		}
		return () => {
			isCancelled = true;
		};
	}, [alpha2Code, regions]);

	return (
		<>
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
										if (onSelectedRegion) onSelectedRegion({ ...region });
									}}>
									<IonLabel>{region.name}</IonLabel>
								</IonItem>
							);
						})}
					</IonList>
				</IonContent>
			</IonModal>

			<IonButton
				className='ion-text-capitalize ion-text-size-xs'
				color='dark'
				expand='full'
				fill='clear'
				onClick={() => setShowModalregions(true)}>
				{selectedRegion?.name ? (
					<>{selectedRegion?.name}</>
				) : (
					<Trasnlator
						from='en'
						to={currentUser.data.preferredLanguage || 'en'}
						text='Select Region'
						returnText={true}
						onTextTranslated={() => {}}
					/>
				)}
			</IonButton>
		</>
	);
};
export default ModalSelectRegion;
