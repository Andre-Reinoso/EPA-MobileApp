import React, { useState, useEffect } from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { paperPlaneOutline } from 'ionicons/icons';

const SendMessageButton = () => {
	return (
		<>
			<div className='ion-text-center mt-4'>
				<IonButton className='ion-text-capitalize'>
					Send Message
					<IonIcon slot='end' icon={paperPlaneOutline} />
				</IonButton>
			</div>
		</>
	);
};
export default SendMessageButton;
