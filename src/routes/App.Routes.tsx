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
	MyAlerts,
	SearchProduct,
	UpdateProduct,
	MyQuotes,
} from './../pages/';

import { useEffect, useContext } from 'react';
import { auth } from './../config/Firebase.config';
import { UserContext } from '../context/User.Context';
import { Redirect, Route } from 'react-router-dom';
import {
	IonApp,
	IonRouterOutlet,
	useIonToast,
	useIonLoading,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import PrivateRoute from './Private.Routes';
import PublicRoute from './Public.Routes';
import UserService from '../services/UseCases/User.Service';

const App: React.FC = () => {
	const { currentUser, login, logout } = useContext(UserContext);
	const [present, dismiss] = useIonToast();
	const [presentCollection, dismissCollection] = useIonToast();
	const [presentLoading, dismissLoading] = useIonLoading();

	async function authenticateUser(user: any) {
		try {
			const { getUserById, getUserSellerById } = new UserService();

			presentLoading({
				message: 'Loading ...',
				translucent: true,
				spinner: 'bubbles',
				id: 'loadingSpiner',
			});
			const userResult = await getUserById(user.uid);

			if (userResult.status !== 'active') {
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
				let userData = {};
				if (userResult.isSeller === true) {
					const usersSellerResult = await getUserSellerById(user.uid);
					userData = {
						...userResult,
						userSeller: {
							...usersSellerResult,
						},
					};
				} else {
					userData = {
						...userResult,
					};
				}

				login(userData);
			}
			dismissLoading();
		} catch (error) {
			presentCollection({
				buttons: [{ text: 'Hide', handler: () => dismissCollection() }],
				message: error.message,
			});
			dismissLoading();
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
						path='/searchProduct/:name'
						component={SearchProduct}
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
						path='/myAlerts'
						component={MyAlerts}
					/>
					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/productDetail/:productId'
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
						path='/chat/:id'
						component={Chat}
					/>
					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/myChats'
						component={MyChats}
					/>

					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/updateProduct/:productId'
						component={UpdateProduct}
					/>
					<PrivateRoute
						authenticated={currentUser.auth}
						exact
						path='/myQuotes'
						component={MyQuotes}
					/>
					<Route exact path='/' render={() => <Redirect to='/login' />} />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
