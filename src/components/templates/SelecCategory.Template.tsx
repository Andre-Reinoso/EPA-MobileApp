import React, { useState } from 'react';
import { SelectCategoryForm } from '../modules';
import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const SelectCategoryTemplate: React.FC = () => {
	const history = useHistory();
	function routeToMarketPlace() {
		history.push('/marketPlace');
	}

	return (
		<>
			<IonRow>
				<IonCol>
					<h1>Select your preferred categories:</h1>
					<SelectCategoryForm />
					<div className='ion-text-center'>
						<IonButton
							onClick={routeToMarketPlace}
							className='ion-text-capitalize fw-bold mt-3'
							fill='clear'
							style={{
								fontSize: '18px',
							}}>
							Continue
							<IonIcon slot='end' icon={arrowForwardOutline} />
						</IonButton>
					</div>
				</IonCol>
			</IonRow>
		</>
	);
};

export default SelectCategoryTemplate;
