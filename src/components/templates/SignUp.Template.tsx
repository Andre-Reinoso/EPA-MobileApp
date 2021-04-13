import React, { useState } from 'react';
import { SignUpBuyerForm, SignUpSellerForm } from '../modules';
import { IonRow, IonCol, IonButton } from '@ionic/react';

const SignUpTemplate: React.FC = () => {
	const [selectedForm, setSelectedForm] = useState('Buyer');

	function selectSellerForm() {
		setSelectedForm('Seller');
	}

	function selectBuyerForm() {
		setSelectedForm('Buyer');
	}

	return (
		<>
			<IonRow>
				<IonCol>
					<div className='ion-text-center px-2'>
						<IonButton
							onClick={selectBuyerForm}
							size='small'
							color={selectedForm === 'Buyer' ? 'primary' : 'light'}
							className={`mx-4 ion-button-full-rounded ion-text-capitalize ${
								selectedForm === 'Buyer' ? 'fw-bold' : 'fw-normal'
							}`}>
							<p className='px-4'>Buyer</p>
						</IonButton>
						<IonButton
							onClick={selectSellerForm}
							size='small'
							color={selectedForm === 'Seller' ? 'primary' : 'light'}
							className={`mx-4 ion-button-full-rounded ion-text-capitalize ${
								selectedForm === 'Seller' ? 'fw-bold' : 'fw-normal'
							}`}>
							<p className='px-4'>Seller</p>
						</IonButton>
					</div>
					{selectedForm === 'Buyer' && <SignUpBuyerForm />}
					{selectedForm === 'Seller' && <SignUpSellerForm />}
				</IonCol>
			</IonRow>
		</>
	);
};

export default SignUpTemplate;
