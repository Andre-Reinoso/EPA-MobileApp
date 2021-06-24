import React, { useContext, useEffect, useState } from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonTitle,
	IonBackButton,
	IonButton,
	IonIcon,
} from '@ionic/react';
import { chevronBackOutline, heartOutline, heart } from 'ionicons/icons';
import Translator from './../components/elements/Translator';
import { UserContext } from './../context/User.Context';
import { useParams } from 'react-router-dom';
import ProductDetailTemplate from '../components/template/ProductDetail.Template';
import { db } from '../config/Firebase.config';
interface TypeProductId {
	productId: string;
}

const ProductDetail: React.FC = () => {
	const { currentUser, updateCurrentUser } = useContext(UserContext);
	const { productId } = useParams<TypeProductId>();
	const favoriteProductsIds: Array<string> = currentUser.data.favoriteProduct;
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		favoriteProductsIds.some((id) => id === productId)
			? setIsFavorite(true)
			: setIsFavorite(false);
	}, [favoriteProductsIds]);

	const updateFavoriteProduct = async () => {
		let newFavoriteProducts: any = [];
		if (isFavorite) {
			newFavoriteProducts = favoriteProductsIds.filter(
				(id) => id !== productId
			);
			updateCurrentUser('favoriteProduct', newFavoriteProducts);
		} else {
			newFavoriteProducts = [productId, ...favoriteProductsIds];

			updateCurrentUser('favoriteProduct', newFavoriteProducts);
		}
		db.collection('users').doc(currentUser.data.userId).update({
			favoriteProduct: newFavoriteProducts,
		});
	};
	return (
		<>
			<IonPage>
				<IonContent>
					<IonHeader className='ion-no-border'>
						<IonToolbar color='primary'>
							<IonButtons slot='start'>
								<IonBackButton
									defaultHref='/marketPlace'
									icon={chevronBackOutline}
								/>
							</IonButtons>
							<IonButtons slot='secondary'>
								<IonButton
									onClick={() => {
										updateFavoriteProduct();
									}}>
									<IonIcon
										slot='icon-only'
										icon={isFavorite ? heart : heartOutline}
									/>
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='Product Detail'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>
						<ProductDetailTemplate productId={productId} />
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default ProductDetail;
