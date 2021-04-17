/* Pages */
import {
	Login,
	MarketPlace,
	AddProduct,
	Chat,
	Dashboard,
	MyChats,
	MyProducts,
	ProductDetail,
	Profile,
	SelectCategory,
	SelectLanguage,
	SignUp,
	Welcome,
} from './../pages/';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

import { useEffect, useContext, useState } from 'react';
import { auth, db } from './../services/firebase/firebase.config';
import { UserContext } from '../context/User.Context';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, useIonToast, IonLoading } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import PrivateRoute from './Private.Routes';
import PublicRoute from './Public.Routes';
import { translateText } from './../services/translate/';

const App: React.FC = () => {
	const { currentUser, login, logout } = useContext(UserContext);
	const [present, dismiss] = useIonToast();
	const [presentCollection, dismissCollection] = useIonToast();

	async function authenticateUser(user: any) {
		try {
			const result = await db.collection('users').doc(user.uid).get();

			if (result.data()?.status !== 'active') {
				present({
					buttons: [
						{
							text: 'Hide',
							handler: () => {
								dismiss();
							},
						},
					],
					message: 'Status Inactive',
				});
				auth.signOut();
				logout();
			} else {
				const userData = {
					uid: user.uid,
					...result.data(),
				};
				login(userData);
			}
		} catch (error) {
			presentCollection({
				buttons: [{ text: 'Hide', handler: () => dismissCollection() }],
				message: await translateText(error.message, 'en', 'es'),
			});
		}
	}

	useEffect(() => {
		let Authsubscriber: any = null;
		Authsubscriber = auth.onAuthStateChanged((user) => {
			if (user) {
				authenticateUser(user);
			} else {
				logout();
			}
			return Authsubscriber;
		});
	}, []);

	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					<PublicRoute
						authenticated={currentUser.auth}
						exact
						path='/login'
						component={Login}
					/>
					<PublicRoute
						authenticated={currentUser.auth}
						exact
						path='/signup'
						component={SignUp}
					/>

					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/selectLanguage'
						component={SelectLanguage}
					/>
					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/welcome'
						component={Welcome}
					/>
					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/selectCategory'
						component={SelectCategory}
					/>

					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/marketPlace'
						component={MarketPlace}
					/>
					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/productDetail'
						component={ProductDetail}
					/>

					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/dashboard'
						component={Dashboard}
					/>
					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/profile'
						component={Profile}
					/>
					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/myProducts'
						component={MyProducts}
					/>
					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/addProduct'
						component={AddProduct}
					/>

					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/chat'
						component={Chat}
					/>
					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/myChats'
						component={MyChats}
					/>

					<Route exact path='/' render={() => <Redirect to='/login' />} />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
