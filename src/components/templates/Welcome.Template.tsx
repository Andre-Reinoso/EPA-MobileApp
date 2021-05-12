import React from 'react';
import { IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';
import { logo450 } from './../../utilities/assets';
import { useHistory } from 'react-router-dom';
import { arrowForwardOutline } from 'ionicons/icons';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements';
const LoginTemplate: React.FC = () => {
	const history = useHistory();
	const { currentUser } = React.useContext(UserContext);

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
					<h1 className='ion-text-center'>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Welcome'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</h1>
					<p
						className='ion-text-center'
						style={{ paddingLeft: '60px', paddingRight: '60px' }}>
						<Trasnlator
							from='en'
							to={currentUser.data.preferredLanguage|| 'en'}
							text='Vel accumsan a nec adipiscing nisl proin phasellus.Vel accumsan a
							nec adipiscing nisl proin phasellus.'
							returnText={true}
							onTextTranslated={() => {}}
						/>
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
							<Trasnlator
								from='en'
								to={currentUser.data.preferredLanguage|| 'en'}
								text='Continue'
								returnText={true}
								onTextTranslated={() => {}}
							/>

							<IonIcon slot='end' icon={arrowForwardOutline} />
						</IonButton>
					</div>
				</IonCol>
			</IonRow>
		</>
	);
};

export default LoginTemplate;
