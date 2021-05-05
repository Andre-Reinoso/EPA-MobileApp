import React from 'react';
import {
	IonAvatar,
	IonCol,
	IonGrid,
	IonItem,
	IonLabel,
	IonList,
	IonRow,
	IonSearchbar,
	IonImg,
	IonThumbnail,
	IonIcon,
} from '@ionic/react';
import { BarTotalSalesProduct, PieTotalSalesProduct } from '../modules';
import { cafe, chevronForwardOutline } from 'ionicons/icons';
import { aceituna, chalina, chocolate1, oliva } from '../../utilities/assets';
import { UserContext } from '../../context/User.Context';
import { Trasnlator } from './../elements';
const MyProductsTemplate: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);

	return (
		<>
			<IonRow>
				<IonCol size='6' className='p-0'>
					<PieTotalSalesProduct
						data={{
							labels: ['Ene', 'Feb'],
							datasets: [
								{
									label: '# of Red Votes',
									data: [50, 30],
									backgroundColor: [
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
									],
									borderWidth: [0, 0],
								},
							],
						}}
					/>
				</IonCol>
				<IonCol size='6' className='p-0'>
					<BarTotalSalesProduct
						data={{
							labels: [
								'Ene',
								'Feb',
								'Mar',
								'Abe',
								'May',
								'Jun',
								'Jul',
								'Ago',
								'Sep',
								'Oct',
								'Nov',
								'Dic',
							],
							datasets: [
								{
									label: '# of Red Votes',
									data: [18, 16, 20, 17, 14, 17, 19, 14, 20, 15, 14, 13],
									backgroundColor: [
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
										'rgb(255, 255, 255)',
										'rgba(255, 255, 255, 0.5)',
									],
								},
							],
						}}
					/>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<IonSearchbar
						className='ion-border-radius-sm'
						showCancelButton='never'></IonSearchbar>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<IonList>
						<IonItem>
							<h3>
								<Trasnlator
									from='en'
									to={currentUser.data.preferredLanguage}
									text='My Products'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</h3>
						</IonItem>
						{[
							{
								title: 'Olive Oil',
								img: oliva,
							},
							{
								title: 'Alpaca Scarf - Kero Design',
								img: chalina,
							},
							{
								title: 'Black Olives in Brine',
								img: aceituna,
							},
							{
								title: 'Chocolate Bar with Milk 39% Cacao 100g - Innato',
								img: chocolate1,
							},
							{
								title: 'Premium Toasted Coffee 250g Perene',
								img: cafe,
							},
						].map(({ title, img }, i) => {
							return (
								<div key={i}>
									<IonItem>
										<IonThumbnail
											slot='start'
											style={{ width: '65px', height: '65px' }}>
											<IonImg className='ion-border-radius-sm' src={img} />
										</IonThumbnail>
										<IonLabel>
											<h3>
												<Trasnlator
													from='en'
													to={currentUser.data.preferredLanguage}
													text={title}
													returnText={true}
													onTextTranslated={() => {}}
												/>
											</h3>
										</IonLabel>
										<IonIcon icon={chevronForwardOutline} />
									</IonItem>
								</div>
							);
						})}
					</IonList>
				</IonCol>
			</IonRow>
		</>
	);
};

export default MyProductsTemplate;
