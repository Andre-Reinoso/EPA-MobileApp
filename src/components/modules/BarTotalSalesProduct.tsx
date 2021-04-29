import React from 'react';
import { IonRow, IonCol, IonText, IonGrid } from '@ionic/react';
import { BarChart } from '../elements';

interface BarTotalSalesProductType {
	data: any;
}

const BarTotalSalesProduct = ({ data }: BarTotalSalesProductType) => {
	return (
		<>
			<div className='epa-gradient m-3 rounded-3'>
				<IonGrid>
					<IonRow>
						<IonCol>
							<p className='ion-text-center m-0 my-2 fw-bolder'>
								<IonText color='light'>Total sales</IonText>
							</p>
							<BarChart data={data} />
						</IonCol>
					</IonRow>
				</IonGrid>
			</div>
		</>
	);
};

export default BarTotalSalesProduct;
