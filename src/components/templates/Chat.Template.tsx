import React, { useEffect, useState } from 'react';
import { IonAvatar, IonCol, IonImg, IonRow } from '@ionic/react';
import { useHistory } from 'react-router-dom';


const ChatTemplate: React.FC = () => {
	/*<Trasnlator
		from='en'
		to='es'
		text='Name es Jorge'
		returnText={true}
		onTextTranslated={() => {}}
	/>;*/

	return (
		<>
			<div className='ion-text-center'>
				<h5 className='fw-bolder'>Lorem, ipsum.</h5>
				<IonAvatar style={{ margin: '0 auto', height: '50px', width: '50px' }}>
					<IonImg src='https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg' />
				</IonAvatar>
			</div>
			<IonRow>
				
			</IonRow>
		</>
	);
};

export default ChatTemplate;
