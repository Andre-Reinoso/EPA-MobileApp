import React, { useState } from 'react';

import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { arrowForwardOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
import SearchProductsByName from '../modules/SearchProductsByName';
interface PropsSearchProduct {
	name: string;
}

const SearchProductTemplate = ({ name }: PropsSearchProduct) => {
	const history = useHistory();
	const { currentUser } = React.useContext(UserContext);

	return (
		<>
			<IonRow>
				<IonCol>
					<SearchProductsByName name={name} />
				</IonCol>
			</IonRow>
		</>
	);
};

export default SearchProductTemplate;
