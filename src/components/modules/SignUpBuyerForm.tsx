import React from 'react';
import {
	IonInput,
	IonItem,
	IonIcon,
	IonButton,
	IonLabel,
	IonList,
} from '@ionic/react';
import {
	mailOutline,
	businessOutline,
	lockClosedOutline,
	phonePortraitOutline,
	personOutline,
} from 'ionicons/icons';

const SignUpBuyerForm: React.FC = () => {
	return (
		<>
			<IonList className='px-2'>
				<h3 className='fw-bold'>Sign Up</h3>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Company Name</IonLabel>
					<IonInput required type='text'></IonInput>
					<IonIcon slot='start' icon={businessOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>First Name</IonLabel>
					<IonInput required type='text'></IonInput>
					<IonIcon slot='start' icon={personOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Last Name</IonLabel>
					<IonInput required type='text'></IonInput>
					<IonIcon slot='start' icon={personOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Phone Number</IonLabel>
					<IonInput required type='tel'></IonInput>
					<IonIcon slot='start' icon={phonePortraitOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Email</IonLabel>
					<IonInput required type='email'></IonInput>
					<IonIcon slot='start' icon={mailOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Password</IonLabel>
					<IonInput required type='password'></IonInput>
					<IonIcon slot='start' icon={lockClosedOutline} />
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Confirm Password</IonLabel>
					<IonInput required type='password'></IonInput>
					<IonIcon slot='start' icon={lockClosedOutline} />
				</IonItem>

				<IonButton
					expand='block'
					className='mt-4 ion-button-full-rounded ion-text-capitalize fw-bold'>
					Sign Up
				</IonButton>
			</IonList>
		</>
	);
};

export default SignUpBuyerForm;
