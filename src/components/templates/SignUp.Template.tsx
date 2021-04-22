import React, { useState, useEffect } from 'react';
import { SelectButton, SignUpBuyerForm, SignUpSellerForm } from '../modules';
import { IonRow, IonCol, IonButton } from '@ionic/react';

const SignUpTemplate: React.FC = () => {
	const [selectedForm, setSelectedForm] = useState('Buyer');

	useEffect(() => {}, []);
	return (
		<>
			<IonRow>
				<IonCol>
					<h3 className='fw-bold'>Sign Up</h3>
					<SelectButton
						firstButtonTitle={'Buyer'}
						secondButtonTitle={'Seller'}
						onSelectedButton={(e: string) => {
							setSelectedForm(e);
						}}
					/>
					{selectedForm === 'Buyer' && <SignUpBuyerForm />}
					{selectedForm === 'Seller' && <SignUpSellerForm />}
				</IonCol>
			</IonRow>
		</>
	);
};

export default SignUpTemplate;
