import React from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
} from '@ionic/react';
import { chevronBackOutline } from 'ionicons/icons';
import { logo450 } from '../../utilities/assets';

const SelectLanguageLayout: React.FC = ({ children }) => {
	return (
		<>
			<IonPage>
				<IonContent>
					<div className='ion-text-center'>
						<img src={logo450} style={{ width: 'auto', height: '130px' }} />
					</div>
					<IonGrid>{children}</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default SelectLanguageLayout;
