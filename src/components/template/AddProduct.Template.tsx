import React from 'react';
import { IonRow, IonCol } from '@ionic/react';
import AddProductForm from './../modules/AddProductForm';

const AddProductTemplate: React.FC = () => {
	return (
		<>
			<IonRow>
				<IonCol>
					<AddProductForm />
				</IonCol>
			</IonRow>
		</>
	);
};

export default AddProductTemplate;
