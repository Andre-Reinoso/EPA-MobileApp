import React, { useState, useEffect, useRef } from 'react';
import { IonRow, IonCol } from '@ionic/react';
import { AddProductForm } from '../modules';

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
