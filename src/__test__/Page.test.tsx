import React, { useContext } from 'react';
import {
	render as rtlRender,
	fireEvent,
	cleanup,
} from '@testing-library/react';
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
} from './../pages';
import { UserProvider } from '../context/User.Context';

afterEach(cleanup);

function render(
	ui: any,
	{
		value = {
			currentUser: {
				data: {
					preferredLanguage: 'ja',
					userId: 'eNIVU6tUrrNFHON0Idfhy2BGHvn1',
					isSeller: true,
					userSeller: {
						ruc: '20338309041',
						userId: 'eNIVU6tUrrNFHON0Idfhy2BGHvn1',
						companyName: 'inkacola',
					},
				},
			},
		},
		...options
	}: any = {}
) {
	function Wrapper(props: any) {
		return <UserProvider {...props} />;
	}
	return rtlRender(ui, { wrapper: Wrapper, ...options });
}

/* Test renderizacion de Interfaces */
test('Login Page - render without crashing', () => {
	const { baseElement } = render(<Login />);
	expect(baseElement).toBeDefined();
});

test('MarketPlace Page - render without crashing', () => {
	render(<MarketPlace />);
	const { baseElement } = render(<MarketPlace />);
	expect(baseElement).toBeDefined();
});

test('AddProduct Page - render without crashing', () => {
	const { baseElement } = render(<AddProduct />);
	expect(baseElement).toBeDefined();
});

test('Chat Page - render without crashing', () => {
	const { baseElement } = render(<Chat />);
	expect(baseElement).toBeDefined();
});

test('Dashboard Page - render without crashing', () => {
	const { baseElement } = render(<Dashboard />);
	expect(baseElement).toBeDefined();
});

test('MyChats Page - render without crashing', () => {
	const { baseElement } = render(<MyChats />);
	expect(baseElement).toBeDefined();
});

test('MyProducts Page - render without crashing', () => {
	const { baseElement } = render(<MyProducts />);
	expect(baseElement).toBeDefined();
});

test('ProductDetail Page - render without crashing', () => {
	const { baseElement } = render(<ProductDetail />);
	expect(baseElement).toBeDefined();
});

test('Profile Page - render without crashing', () => {
	const { baseElement } = render(<Profile />);
	expect(baseElement).toBeDefined();
});

test('SelectCategory Page - render without crashing', () => {
	const { baseElement } = render(<SelectCategory />);
	expect(baseElement).toBeDefined();
});

test('SelectLanguage Page - render without crashing', () => {
	const { baseElement } = render(<SelectLanguage />);
	expect(baseElement).toBeDefined();
});

test('SignUp Page - render without crashing', () => {
	const { baseElement } = render(<SignUp />);
	expect(baseElement).toBeDefined();
});

test('Welcome Page - render without crashing', () => {
	const { baseElement } = render(<Welcome />);
	expect(baseElement).toBeDefined();
});
