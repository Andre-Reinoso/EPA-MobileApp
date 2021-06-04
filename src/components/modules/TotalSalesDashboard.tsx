import React from 'react';
import { IonRow, IonCol, IonText, IonGrid } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
import BarChart from '../elements/BarChart';

interface TotalSalesDashboardType {
	totalValue: string;
	dashboardBarChartData: any;
}

const TotalSalesDashboard = ({
	totalValue,
	dashboardBarChartData,
}: TotalSalesDashboardType) => {
	const { currentUser } = React.useContext(UserContext);

	const history = useHistory();
	return (
		<>
			<div className='epa-gradient m-3 rounded-3'>
				<IonGrid>
					<IonRow>
						<IonCol>
							<div className='p-3'>
								<IonText color='light'>
									<p className='ion-text-size-md my-1'>
										<Translator
											from='en'
											to={currentUser.data.preferredLanguage || 'en'}
											text='Total sales'
											returnText={true}
											onTextTranslated={() => {}}
										/>
									</p>
									<p className='fw-bolder ion-text-size-lg my-1'>
										{totalValue}
									</p>
								</IonText>
							</div>
						</IonCol>
						<IonCol size='7'>
							<div className='p-2'>
								<BarChart data={dashboardBarChartData} />
							</div>
						</IonCol>
					</IonRow>
				</IonGrid>
			</div>
		</>
	);
};

export default TotalSalesDashboard;
