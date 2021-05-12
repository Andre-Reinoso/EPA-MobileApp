import React from 'react';
import { IonRow, IonCol, IonText, IonGrid } from '@ionic/react';
import { BarChart } from '../elements';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements/';
interface BarTotalSalesProductType {
	data: any;
}

const BarTotalSalesProduct = ({ data }: BarTotalSalesProductType) => {
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
										to={currentUser.data.preferredLanguage|| 'en'}
										text='Total sales'
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</IonText>
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
