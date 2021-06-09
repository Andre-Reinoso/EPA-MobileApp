import { db, auth } from '../../config/Firebase.config';

const userDatabaseReference = db.collection('users');
const userSellerDatabaseReference = db.collection('usersSeller');

interface TypeCurrency {
	code: string;
	name: string;
	symbol: string;
}

interface TypeCountry {
	alphaCode: string;
	name: string;
	nativeName: string;
}

interface TypeDeparment {
	iso_36166_2: string;
	name: string;
}

interface TypeCreateUser {
	email: string;
	password: string;
}

interface TypeUser {
	userId?: string;
	phoneNumber?: string;
	firstName?: string;
	lastName?: string;
	isSeller?: boolean;
	status?: string;
	preferredLanguage?: string;
	country?: TypeCountry;
	deparment?: TypeDeparment;
	province?: string;
	district?: string;
	favoriteProduct?: Array<string>;
	commercialLine?: Array<string>;
}

interface TypeUserSeller {
	userId?: string;
	ruc?: string;
	companyName?: string;
	yearEstablished?: string;
	exportsSince?: string;
	foundationYear?: string;
	description?: string;
}

class UserService {
	async updateUser(user: TypeUser, userId: string) {
		try {
			return await userDatabaseReference.doc(userId).update(user);
		} catch (error) {
			throw new Error(error);
		}
	}

	async updateFieldUser(field: string, value: any, userId: string) {
		try {
			return await userDatabaseReference.doc(userId).update({ [field]: value });
		} catch (error) {
			throw new Error(error);
		}
	}

	async getUserById(userId: string): Promise<TypeUser> {
		try {
			const user: any = await userDatabaseReference.doc(userId).get();
			return { userId: user.id, ...user?.data() };
		} catch (error) {
			throw new Error(error);
		}
	}
	async getUsersSeller(): Promise<Array<TypeUserSeller>> {
		try {
			let usersSeller: Array<TypeUserSeller> = [];
			const user = await userSellerDatabaseReference.get();
			user.forEach((user) => {
				usersSeller.push({
					...user.data(),
				});
			});
			return usersSeller;
		} catch (error) {
			throw new Error(error);
		}
	}

	async getUserSellerById(userId: string): Promise<TypeUserSeller> {
		try {
			let userSeller: TypeUserSeller = {};
			const user = await userSellerDatabaseReference
				.where('userId', '==', userId)
				.get();
			user.forEach((user) => {
				userSeller = {
					userId: user.id,
					...user.data(),
				};
			});
			return userSeller;
		} catch (error) {
			throw new Error(error);
		}
	}
	async resetPasswordByEmail(email: string) {
		try {
			return await auth.sendPasswordResetEmail(email);
		} catch (error) {
			throw new Error(error);
		}
	}
	async signUpUser({ email, password }: TypeCreateUser) {
		try {
			return await auth.createUserWithEmailAndPassword(email, password);
		} catch (error) {
			throw new Error(error);
		}
	}
	async createUser(user: TypeUser, userId: string) {
		try {
			return await userDatabaseReference.doc(userId).set(user);
		} catch (error) {
			throw new Error(error);
		}
	}
	async createUserSeller(userSeller: TypeUserSeller) {
		try {
			return await userSellerDatabaseReference.doc().set(userSeller);
		} catch (error) {
			throw new Error(error);
		}
	}
	async verifyRegisteredPhoneNumber(phoneNumber: string) {
		try {
			const responsePhoneNumber = await userDatabaseReference
				.where('phoneNumber', '==', phoneNumber)
				.get();
			if (!responsePhoneNumber.empty)
				throw new Error('The Phone Number is already registered');
		} catch (error) {
			throw new Error(error);
		}
	}

	async verifyRegisteredRuc(ruc: string) {
		try {
			const responseRuc = await userSellerDatabaseReference
				.where('ruc', '==', ruc)
				.get();
			if (!responseRuc.empty) throw new Error('The Ruc is already registered');
		} catch (error) {
			throw new Error(error);
		}
	}
}

export default UserService;
