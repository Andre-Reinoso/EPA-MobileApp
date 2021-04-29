import React from 'react';
import { IonRow, IonCol, IonText, IonGrid } from '@ionic/react';
import { PieChart } from '../elements';

interface PieTotalSalesProductType {
	data: any;
}

const PieTotalSalesProduct = ({ data }: PieTotalSalesProductType) => {
	return (
		<>
			<div className='epa-gradient m-3 rounded-3'>
				<IonGrid>
					<IonRow>
						<IonCol>
							<p className="ion-text-center m-0 my-2 fw-bolder">
								<IonText color='light'>Total sales</IonText>
							</p>
							<PieChart data={data} />
						</IonCol>
					</IonRow>
				</IonGrid>
			</div>
		</>
	);
};

export default PieTotalSalesProduct;
