import React from 'react';
import { IonRow, IonCol, IonText, IonGrid } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { BarChart } from './../elements/';

interface TotalSalesDashboardType {
	totalValue: string;
	dashboardBarChartData: any;
}

const TotalSalesDashboard = ({ totalValue ,dashboardBarChartData}: TotalSalesDashboardType) => {
	const history = useHistory();
	return (
		<>
			<div className='epa-gradient m-3 rounded-3'>
				<IonGrid>
					<IonRow>
						<IonCol>
							<div className='p-3'>
								<IonText color='light'>
									<p className='ion-text-size-md my-1'>Total Sales</p>
									<p className='fw-bolder ion-text-size-lg my-1'>
										{totalValue}
									</p>
								</IonText>
							</div>
						</IonCol>
						<IonCol size='7'>
							<div className='p-2'>
								<BarChart
									data={dashboardBarChartData}
								/>
							</div>
						</IonCol>
					</IonRow>
				</IonGrid>
			</div>
		</>
	);
};

export default TotalSalesDashboard;
