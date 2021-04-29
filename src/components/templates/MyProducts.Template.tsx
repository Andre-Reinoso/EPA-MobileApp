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
import { chevronForwardOutline } from 'ionicons/icons';

const MyProductsTemplate: React.FC = () => {
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
							<h3>My Products</h3>
						</IonItem>
						{[
							{
								title: 'Olive Oil',
								img:
									'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_4e62a6a4-5c2b-45fa-89ae-a50558ef3aec&fileSn=1&thumb=350',
							},
							{
								title: 'Alpaca Scarf - Kero Design',
								img:
									'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_6abbc678-93e1-4402-ac92-a9e0aa01955b&fileSn=6&thumb=350',
							},
							{
								title: 'Black Olives in Brine',
								img:
									'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_9069e6bb-821d-4574-a298-178566aaa15d&fileSn=1&thumb=350',
							},
							{
								title: 'Chocolate Bar with Milk 39% Cacao 100g - Innato',
								img:
									'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_cda59ffe-bdda-480e-915a-49b3ac4db1db&fileSn=5&thumb=350',
							},
							{
								title: 'Premium Toasted Coffee 250g Perene',
								img:
									'https://www.perumarketplace.com/cmm/getImage.do?atchFileId=FILE_4566a53a-ad81-4f9c-9ae2-709b7d52674f&fileSn=3&thumb=350',
							},
						].map(({ title, img }, i) => {
							return (
								<div key={i}>
									<IonItem >
										<IonThumbnail
											slot='start'
											style={{ width: '65px', height: '65px' }}>
											<IonImg className='ion-border-radius-sm' src={img} />
										</IonThumbnail>
										<IonLabel>
											<h3>{title}</h3>
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
