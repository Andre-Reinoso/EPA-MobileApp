import React from 'react';
import { LoginForm } from '../modules';
import {
	IonRow,
	IonCol,
	IonSearchbar,
	IonList,
	IonItem,
	IonLabel,
	IonItemSliding,
	IonItemOptions,
	IonItemOption,
	IonAvatar,
	IonImg,
	IonListHeader,
	IonText,
	IonBadge,
} from '@ionic/react';
import { logo450 } from './../../utilities/assets';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements';
const MyChatsTemplate: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);

	const history = useHistory();
	return (
		<>
			<IonRow>
				<IonCol>
					<IonSearchbar
						className='ion-border-radius-sm'
						showCancelButton='never'></IonSearchbar>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<IonList lines='none'>
						<IonListHeader>
							<h4>
								<Trasnlator
									from='en'
									to={currentUser.data.preferredLanguage|| 'en'}
									text='Messages'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</h4>
						</IonListHeader>
						<IonItem
							onClick={() => {
								history.push('/chat');
							}}>
							<IonAvatar slot='start' style={{ width: '50px', height: '50px' }}>
								<IonImg src='http://www.apeamac.com/wp-content/uploads/2017/06/LOGO-FRESCAVO-ORIGINAL-PARA-WEB_opt-2.jpg' />
							</IonAvatar>
							<IonLabel>
								<h2 className='fw-bolder'>
									<Trasnlator
										from='en'
										to={currentUser.data.preferredLanguage|| 'en'}
										text='example company or person'
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</h2>
								<p>
									<IonText>
										<Trasnlator
											from='en'
											to={currentUser.data.preferredLanguage|| 'en'}
											text='This is an example message'
											returnText={true}
											onTextTranslated={() => {}}
										/>
									</IonText>
								</p>
							</IonLabel>
							<IonBadge color='success' slot='end'>
								80
							</IonBadge>
						</IonItem>
						<IonItem>
							<IonAvatar slot='start' style={{ width: '50px', height: '50px' }}>
								<IonImg src='https://pipuentealto.com/wp-content/uploads/2020/09/logo-puente-alto.png' />
							</IonAvatar>
							<IonLabel>
								<h2 className='fw-bolder'>
									<Trasnlator
										from='en'
										to={currentUser.data.preferredLanguage|| 'en'}
										text='example company or person'
										returnText={true}
										onTextTranslated={() => {}}
									/>
									.
								</h2>
								<p>
									<IonText>
										<Trasnlator
											from='en'
											to={currentUser.data.preferredLanguage|| 'en'}
											text='This is an example message'
											returnText={true}
											onTextTranslated={() => {}}
										/>
									</IonText>
								</p>
							</IonLabel>
							<IonBadge color='success' slot='end'>
								80
							</IonBadge>
						</IonItem>
						<IonItem>
							<IonAvatar slot='start' style={{ width: '50px', height: '50px' }}>
								<IonImg src='https://clubmarketingmediterraneo.com/wp-content/uploads/2015/03/logo-OMM1-4.png' />
							</IonAvatar>
							<IonLabel>
								<h2 className='fw-bolder'>
									<Trasnlator
										from='en'
										to={currentUser.data.preferredLanguage|| 'en'}
										text='example company or person'
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</h2>
								<p>
									<IonText>
										<Trasnlator
											from='en'
											to={currentUser.data.preferredLanguage|| 'en'}
											text='This is an example message'
											returnText={true}
											onTextTranslated={() => {}}
										/>
									</IonText>
								</p>
							</IonLabel>
							<IonBadge color='success' slot='end'>
								80
							</IonBadge>
						</IonItem>
						<IonItem>
							<IonAvatar slot='start' style={{ width: '50px', height: '50px' }}>
								<IonImg src='https://www.apexpanama.com/wp-content/uploads/2018/07/Open-Blue-Logo-Javier-Visuetti-825x510.jpg' />
							</IonAvatar>
							<IonLabel>
								<h2 className='fw-bolder'>
									<Trasnlator
										from='en'
										to={currentUser.data.preferredLanguage|| 'en'}
										text='example company or person'
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</h2>
								<p>
									<IonText>
										<Trasnlator
											from='en'
											to={currentUser.data.preferredLanguage|| 'en'}
											text='This is an example message'
											returnText={true}
											onTextTranslated={() => {}}
										/>
									</IonText>
								</p>
							</IonLabel>
							<IonBadge color='success' slot='end'>
								80
							</IonBadge>
						</IonItem>
					</IonList>
				</IonCol>
			</IonRow>
		</>
	);
};

export default MyChatsTemplate;
