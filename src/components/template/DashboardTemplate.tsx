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
import { DashboardContext } from '../../context/Dashboard.Context';

const DashboardTemplate = () => {
	const { currentUser } = useContext(UserContext);
	const {
		totalSalesDashboardValue,
		dashboardChartData,
		quantity1,
		quantity2,
		quantity3,
	} = useContext(DashboardContext);

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
						<IonImg
							src={
								auth.currentUser?.photoURL ||
								'https://firebasestorage.googleapis.com/v0/b/explore-peru-from-abroad.appspot.com/o/Assets%2Fuser%20icon.png?alt=media&token=31e6e8ce-1a28-47d4-8fd8-b6c9b60b518b'
							}
						/>
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
							{quantity1}
						</IonText>
						<br />
						<IonText color='medium'>
							<Translator
								from='en'
								to={currentUser.data.preferredLanguage || 'en'}
								text='Quantity'
								returnText={true}
								onTextTranslated={() => {}}
							/>
						</IonText>
					</div>
				</IonCol>
				<IonCol>
					<div className='ion-text-center'>
						<IonText color='' className='fw-bolder'>
							{quantity2}
						</IonText>
						<br />
						<IonText color='medium'>
							<Translator
								from='en'
								to={currentUser.data.preferredLanguage || 'en'}
								text='Quantity'
								returnText={true}
								onTextTranslated={() => {}}
							/>
						</IonText>
					</div>
				</IonCol>
				<IonCol>
					<div className='ion-text-center'>
						<IonText color='' className='fw-bolder'>
							{quantity3}
						</IonText>
						<br />
						<IonText color='medium'>
							<Translator
								from='en'
								to={currentUser.data.preferredLanguage || 'en'}
								text='Quantity'
								returnText={true}
								onTextTranslated={() => {}}
							/>
						</IonText>
					</div>
				</IonCol>
			</IonRow>

			<TotalSalesDashboard
				totalValue={`${totalSalesDashboardValue}k`}
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
							data: dashboardChartData,
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
