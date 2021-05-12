import React, { useState } from 'react';
import { SelectCategoryForm } from '../modules';
import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements';
const SelectCategoryTemplate: React.FC = () => {
	const history = useHistory();
	const { currentUser } = React.useContext(UserContext);

	function routeToMarketPlace() {
		history.push('/marketPlace');
	}

	return (
		<>
			<IonRow>
				<IonCol>
					<h1>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Select your preferred categories:'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</h1>
					<SelectCategoryForm />
					<div className='ion-text-center'>
						<IonButton
							onClick={routeToMarketPlace}
							className='ion-text-capitalize fw-bold mt-3'
							fill='clear'
							style={{
								fontSize: '18px',
							}}>
							<Trasnlator
								from='en'
								to={currentUser.data.preferredLanguage|| 'en'}
								text='Continue'
								returnText={true}
								onTextTranslated={() => {}}
							/>

							<IonIcon slot='end' icon={arrowForwardOutline} />
						</IonButton>
					</div>
				</IonCol>
			</IonRow>
		</>
	);
};

export default SelectCategoryTemplate;
