import React, { useContext } from 'react';
import {
	IonRow,
	IonImg,
	IonAvatar,
	IonCol,
	IonText,
	IonButton,
	IonIcon,
} from '@ionic/react';
import { logomarket } from '../../utilities/assets';
import { powerOutline } from 'ionicons/icons';
import { UserContext } from '../../context/User.Context';
import Translator from './../elements/Translator';
import { auth } from '../../config/Firebase.config';
import DashboardActionList from '../modules/DashboardActionList';
import TotalSalesDashboard from '../modules/TotalSalesDashboard';

const DashboardTemplate = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<>
			<IonRow>
				<IonCol>
					<IonAvatar
						style={{
							width: '100%',
							height: '100%',
						}}
						className='ion-border-radius-sm'>
						<IonImg src={logomarket} />
					</IonAvatar>
				</IonCol>
				<IonCol size='7'>
					<div className='ms-2'>
						<h3 className='fw-bolder my-3'>
							{currentUser.data.isSeller
								? currentUser.data.userSeller.companyName
								: currentUser.data.firstName}
						</h3>
						{currentUser.data.isSeller && (
							<IonText className='my-3' color='medium'>
								Ruc:{currentUser.data.userSeller.ruc}
							</IonText>
						)}

						<IonButton
							size='small'
							color='primary'
							className='my-3 ion-button-full-rounded ion-text-capitalize fw-bold'>
							<p className='px-4'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text={currentUser.data.isSeller ? 'Seller' : 'Buyer'}
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</p>
						</IonButton>
					</div>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<div className='ion-text-center'>
						<IonText color='' className='fw-bolder'>
							100
						</IonText>
						<br />
						<IonText color='medium'>
							<Translator
								from='en'
								to={currentUser.data.preferredLanguage || 'en'}
								text='Cantidad'
								returnText={true}
								onTextTranslated={() => {}}
							/>
						</IonText>
					</div>
				</IonCol>
				<IonCol>
					<div className='ion-text-center'>
						<IonText color='' className='fw-bolder'>
							350
						</IonText>
						<br />
						<IonText color='medium'>
							<Translator
								from='en'
								to={currentUser.data.preferredLanguage || 'en'}
								text='Cantidad'
								returnText={true}
								onTextTranslated={() => {}}
							/>
						</IonText>
					</div>
				</IonCol>
				<IonCol>
					<div className='ion-text-center'>
						<IonText color='' className='fw-bolder'>
							250
						</IonText>
						<br />
						<IonText color='medium'>
							<Translator
								from='en'
								to={currentUser.data.preferredLanguage || 'en'}
								text='Cantidad'
								returnText={true}
								onTextTranslated={() => {}}
							/>
						</IonText>
					</div>
				</IonCol>
			</IonRow>

			<TotalSalesDashboard
				totalValue={'120k'}
				dashboardBarChartData={{
					labels: [
						'Ene',
						'Feb',
						'Mar',
						'Abe',
						'May',
						'Jun',
						'Jul',
						'Ago',
						'Sep',
						'Oct',
						'Nov',
						'Dic',
					],
					datasets: [
						{
							label: '# of Red Votes',
							data: [18, 16, 20, 17, 14, 17, 19, 14, 20, 15, 14, 13],
							backgroundColor: [
								'rgb(255, 255, 255)',
								'rgba(255, 255, 255, 0.5)',
								'rgb(255, 255, 255)',
								'rgba(255, 255, 255, 0.5)',
								'rgb(255, 255, 255)',
								'rgba(255, 255, 255, 0.5)',
								'rgb(255, 255, 255)',
								'rgba(255, 255, 255, 0.5)',
								'rgb(255, 255, 255)',
								'rgba(255, 255, 255, 0.5)',
								'rgb(255, 255, 255)',
								'rgba(255, 255, 255, 0.5)',
							],
						},
					],
				}}
			/>
			<DashboardActionList />
			<div className='ion-text-center my-3'>
				<IonButton
					className='ion-text-capitalize'
					onClick={() => {
						auth.signOut();
					}}>
					<Translator
						from='en'
						to={currentUser.data.preferredLanguage || 'en'}
						text='Log out'
						returnText={true}
						onTextTranslated={() => {}}
					/>
					<IonIcon slot='end' icon={powerOutline} />
				</IonButton>
			</div>
		</>
	);
};
export default DashboardTemplate;
