import React from 'react';
import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { logo450 } from './../../utilities/assets';
import { useHistory } from 'react-router-dom';
import { arrowForwardOutline } from 'ionicons/icons';

const LoginTemplate: React.FC = () => {
	const history = useHistory();
	function routeToMarketplace() {
		history.push('/marketPlace');
	}
	return (
		<>
			<IonRow>
				<IonCol>
					<div className='ion-text-center'>
						<img
							src={logo450}
							style={{ width: 'auto', height: '150px', marginTop: '-85px' }}
						/>
					</div>
					<h1 className='ion-text-center'>Welcome</h1>
					<p
						className='ion-text-center'
						style={{ paddingLeft: '60px', paddingRight: '60px' }}>
						Vel accumsan a nec adipiscing nisl proin phasellus.Vel accumsan a
						nec adipiscing nisl proin phasellus.
					</p>

					<div className='ion-text-center'>
						<IonButton
							onClick={routeToMarketplace}
							className='ion-text-capitalize'
							fill='clear'
							style={{
								marginTop: '15%',
								fontWeight: 'bold',
								fontSize: '18px',
							}}>
							Continue
							<IonIcon slot='end' icon={arrowForwardOutline} />
						</IonButton>
					</div>
				</IonCol>
			</IonRow>
		</>
	);
};

export default LoginTemplate;
