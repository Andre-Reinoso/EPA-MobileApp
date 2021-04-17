import React, { useState } from 'react';
import { SelectLanguageForm } from '../modules';
import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';

const SelectLanguageTemplate: React.FC = () => {
	const history = useHistory();
	function routeToWelcome() {
		history.push('/welcome');
	}

	return (
		<>
			<IonRow>
				<IonCol>
					<h1>Select your language:</h1>
					<SelectLanguageForm />
					<div className='ion-text-center'>
						<IonButton
							onClick={routeToWelcome}
							className='ion-text-capitalize'
							fill='clear'
							style={{
								marginTop: '15%',
								fontWeight: 'bold',
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

export default SelectLanguageTemplate;
