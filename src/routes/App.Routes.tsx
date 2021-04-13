import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import PrivateRoute from './Private.Routes';
import PublicRoute from './Public.Routes';

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

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route exact path='/login' component={Login} />
				<Route exact path='/signup' component={SignUp} />

				<Route exact path='/selectLanguage' component={SelectLanguage} />
				<Route exact path='/welcome' component={Welcome} />
				<Route exact path='/selectCategory' component={SelectCategory} />

				<Route exact path='/marketPlace' component={MarketPlace} />
				<Route exact path='/productDetail' component={ProductDetail} />

				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/profile' component={Profile} />
				<Route exact path='/myProducts' component={MyProducts} />
				<Route exact path='/addProduct' component={AddProduct} />

				<Route exact path='/chat' component={Chat} />
				<Route exact path='/myChats' component={MyChats} />

				<Route exact path='/' render={() => <Redirect to='/login' />} />
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);

export default App;
