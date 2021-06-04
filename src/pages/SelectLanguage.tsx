import React, { useContext } from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonTitle,
	IonBackButton,
	IonButton,
	IonIcon,
} from '@ionic/react';
import { chevronBackOutline, saveOutline } from 'ionicons/icons';
import Translator from './../components/elements/Translator';
import { UserContext } from './../context/User.Context';
import { logo450 } from '../utilities/assets';
import SelectLanguageTemplate from '../components/template/SelectLanguage.Template';

const SelectLanguage: React.FC = () => {
	const { currentUser } = useContext(UserContext);
	return (
		<>
			<IonPage>
				<IonContent>
					<div className='ion-text-center'>
						<img src={logo450} style={{ width: 'auto', height: '130px' }} />
					</div>
					<IonGrid>
						<SelectLanguageTemplate />
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default SelectLanguage;
