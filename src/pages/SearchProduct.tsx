import React, { useContext } from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonButtons,
	IonButton,
	IonIcon,
	IonBackButton,
} from '@ionic/react';

import { useParams } from 'react-router';
import Translator from '../components/elements/Translator';
import { UserContext } from '../context/User.Context';
import { chevronBackOutline, heartOutline } from 'ionicons/icons';
import SearchProductTemplate from '../components/template/SearchProduct.Template';

const SearchProduct: React.FC = () => {
	const { name } = useParams<any>();
	const { currentUser } = useContext(UserContext);
	return (
		<>
			<IonPage>
				<IonContent>
					<IonHeader className='ion-no-border'>
						<IonToolbar color='primary'>
							<IonButtons slot='start'>
								<IonBackButton
									defaultHref='/marketPlace'
									icon={chevronBackOutline}
								/>
							</IonButtons>
							<IonButtons slot='secondary' style={{ color: 'transparent' }}>
								<IonButton>
									<IonIcon slot='icon-only' icon={heartOutline} />
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='Search by Name'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>
						<SearchProductTemplate name={name} />
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default SearchProduct;
