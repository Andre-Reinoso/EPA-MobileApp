import React from 'react';

import { IonRow, IonCol, IonCard, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../services/firebase/firebase.config';

const MarketPlaceTemplate: React.FC = () => {
	const history = useHistory();
	return (
		<>
			<IonRow>
				<IonCol>
					<div>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
						praesentium, consequatur eligendi harum laudantium eius? Ullam
						commodi provident cupiditate tenetur harum necessitatibus sed
						voluptate minima rem, saepe facilis laudantium possimus!
					</div>
					<IonButton
						onClick={() => {
							auth.signOut();
						}}>
						Cerrar sesion
					</IonButton>
				</IonCol>
			</IonRow>
		</>
	);
};

export default MarketPlaceTemplate;
