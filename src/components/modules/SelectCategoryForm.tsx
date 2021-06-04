import React, { useEffect, useState } from 'react';
import {
	IonCard,
	IonCardTitle,
	IonCardHeader,
	IonImg,
	IonThumbnail,
	IonIcon,
	IonSpinner,
} from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import {
	bannerCornUrl,
	bannerTextilUrl,
	bannerHomeUrl,
} from './../../utilities/assets';
import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
import CategoryService from '../../services/UseCases/Category.Service';

const SelectCategoryForm: React.FC = () => {
	const { currentUser } = React.useContext(UserContext);
	const [categories, setCategories] = useState<Array<any>>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const { getAllCategories } = new CategoryService();
		getAllCategories().then((result: any) => {
			setCategories(result);
			setLoading(false);
		});
	}, []);

	return (
		<>
			{loading ? (
				<div className='ion-text-center'>
					<IonSpinner color='primary' />
				</div>
			) : (
				categories?.map(({ image, name, id }) => {
					return (
						<IonCard key={id} className='my-2'>
							{/* <IonThumbnail style={{ width: '100%', height: '120px' }}>
								<IonImg src={image} />
							</IonThumbnail> */}
							<IonCardHeader>
								<IonCardTitle
									className='fw-bolter'
									style={{ fontSize: '18px' }}>
									<Translator
										from='en'
										to={currentUser.data.preferredLanguage || 'en'}
										text={name}
										returnText={true}
										onTextTranslated={() => {}}
									/>
									<IonIcon
										size='small'
										color='primary'
										className='ion-float-right'
										icon={heartOutline}
									/>
								</IonCardTitle>
							</IonCardHeader>
						</IonCard>
					);
				})
			)}
		</>
	);
};

export default SelectCategoryForm;
