import React from 'react';
import { IonRow, IonCol } from '@ionic/react';
import UpdateProductForm from './../modules/UpdateProductForm';

const UpdateProductTemplate = () => {
	return (
		<>
			<IonRow>
				<IonCol>
					<UpdateProductForm />
				</IonCol>
			</IonRow>
		</>
	);
};

export default UpdateProductTemplate;
