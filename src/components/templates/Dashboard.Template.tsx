import React from 'react';
import {
	IonRow,
	IonCol,
	IonAvatar,
	IonImg,
	IonText,
	IonButton,
	IonIcon,
} from '@ionic/react';
import { TotalSalesDashboard } from '../modules';
import { DashboardActionList } from '../elements';
import { auth } from './../../services/firebase/firebase.config';
import { powerOutline } from 'ionicons/icons';
import { logomarket } from '../../utilities/assets';
const DashboardTemplate: React.FC = () => {
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
						<h3 className='fw-bolder my-3'>Lorem ipsum</h3>
						<IonText className='my-3' color='medium'>
							Ruc: 515131321984
						</IonText>
						<IonButton
							size='small'
							color='primary'
							className='my-3 ion-button-full-rounded ion-text-capitalize fw-bold'>
							<p className='px-4'>Seller</p>
						</IonButton>
					</div>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<div className='ion-text-center'>
						<IonText color='dark' className='fw-bolder'>
							100
						</IonText>
						<br />
						<IonText color='medium'>Lorem ipso</IonText>
					</div>
				</IonCol>
				<IonCol>
					<div className='ion-text-center'>
						<IonText color='dark' className='fw-bolder'>
							350
						</IonText>
						<br />
						<IonText color='medium'>Lorem ipso</IonText>
					</div>
				</IonCol>
				<IonCol>
					<div className='ion-text-center'>
						<IonText color='dark' className='fw-bolder'>
							250
						</IonText>
						<br />
						<IonText color='medium'>Lorem ipso</IonText>
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
					Log out
					<IonIcon slot='end' icon={powerOutline} />
				</IonButton>
			</div>
		</>
	);
};

export default DashboardTemplate;
