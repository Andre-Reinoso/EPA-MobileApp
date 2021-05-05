import React from 'react';
import { IonRow, IonCol, IonText, IonGrid } from '@ionic/react';
import { PieChart } from '../elements';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements/';
interface PieTotalSalesProductType {
	data: any;
}

const PieTotalSalesProduct = ({ data }: PieTotalSalesProductType) => {
	const { currentUser } = React.useContext(UserContext);

	return (
		<>
			<div className='epa-gradient m-3 rounded-3'>
				<IonGrid>
					<IonRow>
						<IonCol>
							<p className='ion-text-center m-0 my-2 fw-bolder'>
								<IonText color='light'>
									<Trasnlator
										from='en'
										to={currentUser.data.preferredLanguage}
										text='Total sales'
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</IonText>
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
