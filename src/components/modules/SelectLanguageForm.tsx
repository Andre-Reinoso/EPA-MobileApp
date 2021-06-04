import React, { useContext, useEffect, useState } from 'react';
import {
	IonCard,
	IonAvatar,
	IonCardTitle,
	IonItem,
	IonButton,
	IonIcon,
} from '@ionic/react';
import { UserContext } from '../../context/User.Context';
import { useHistory } from 'react-router-dom';
import { arrowForwardOutline } from 'ionicons/icons';
import TranslateService from '../../services/Translate/Translate.Service';
import UserService from '../../services/UseCases/User.Service';

interface langaugeType {
	iso639_1: string;
	iso639_2: string;
	name: string;
	nativeName: string;
	flag: string;
}

const SelectLanguageForm: React.FC = () => {
	const { currentUser, updateCurrentUser } = useContext(UserContext);
	const history = useHistory();

	const [selectedLanguage, setSelectecLanguage] = useState(
		currentUser.data.preferredLanguage
	);
	const [languages, setLanguages] = useState<[langaugeType]>();

	async function routeToWelcome() {
		try {
			const { updateFieldUser } = new UserService();
			await updateFieldUser(
				'preferredLanguage',
				selectedLanguage,
				currentUser.data.userId
			);
			updateCurrentUser('preferredLanguage', selectedLanguage);
			history.push('/welcome');
		} catch (error) {}
	}

	useEffect(() => {
		try {
			const { getAllLanguages } = new TranslateService();
			getAllLanguages().then((result) => {
				setLanguages(result);
			});
		} catch (error) {
			console.log(error);
		}
	}, [languages]);

	return (
		<>
			{languages?.map(({ flag, iso639_1, nativeName }, index) => {
				return (
					<IonCard
						className='my-3'
						color={`${selectedLanguage === iso639_1 ? 'primary' : ''}`}
						key={index}
						onClick={() => {
							setSelectecLanguage(iso639_1);
						}}>
						<IonItem color='transparent' lines="none">
							<IonAvatar slot='start'>
								<img src={`${flag}`} />
							</IonAvatar>
							<IonCardTitle>{nativeName}</IonCardTitle>
						</IonItem>
					</IonCard>
				);
			})}
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
		</>
	);
};

export default SelectLanguageForm;
