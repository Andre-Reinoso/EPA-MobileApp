import { db } from '../../config/Firebase.config';
const productDatabaseReference = db.collection('products');

interface TypeProduct {
	productId?: string;
	subcategory?: string;
	category?: string;
	userSellerId?: string;
	name?: string;
	description?: string;
	price?: number;
	detail?: string;
	image?: string;
	gallery?: Array<string>;
	status?: string;
}
function generateId() {
	let ref = productDatabaseReference.doc();
	return ref.id;
}

class ProductService {
	async addProduct(product: TypeProduct) {
		try {
			return await productDatabaseReference.doc(generateId()).set(product);
		} catch (error) {
			throw new Error(error);
		}
	}
	async updateProduct(product: TypeProduct, productId: string) {
		try {
			return await productDatabaseReference.doc(productId).update(product);
		} catch (error) {
			throw new Error(error);
		}
	}

	async updateFieldProduct(field: string, value: any, productId: string) {
		try {
			return await productDatabaseReference
				.doc(productId)
				.update({ [field]: value });
		} catch (error) {
			throw new Error(error);
		}
	}
	async getProductById(productId: string): Promise<TypeProduct> {
		try {
			const product: any = await productDatabaseReference.doc(productId).get();
			return { productId: product.id, ...product.data() };
		} catch (error) {
			throw new Error(error);
		}
	}
	async deleteProductById(productId: string) {
		try {
			await productDatabaseReference.doc(productId).delete();
		} catch (error) {
			throw new Error(error);
		}
	}
	async getProductsByTitle(title: string): Promise<Array<TypeProduct>> {
		try {
			let products: Array<TypeProduct> = [];
			const product = await productDatabaseReference
				.where('title', '==', title)
				.get();
			product.forEach((productDoc: any) => {
				products.push({ productId: productDoc.id, ...productDoc.data() });
			});
			return products;
		} catch (error) {
			throw new Error(error);
		}
	}
	async getProductsBySubcategory(
		subcategory: string
	): Promise<Array<TypeProduct>> {
		try {
			let products: Array<TypeProduct> = [];
			const product = await productDatabaseReference
				.where('subcategory', '==', subcategory)
				.limit(7)
				.get();
			product.forEach((productDoc: any) => {
				products.push({ productId: productDoc.id, ...productDoc.data() });
			});
			return products;
		} catch (error) {
			throw new Error(error);
		}
	}

	async getProductsByCategory(category: string): Promise<Array<TypeProduct>> {
		try {
			let products: Array<TypeProduct> = [];
			const product = await productDatabaseReference
				.where('category', '==', category)
				.limit(7)
				.get();
			product.forEach((productDoc: any) => {
				products.push({ productId: productDoc.id, ...productDoc.data() });
			});
			return products;
		} catch (error) {
			throw new Error(error);
		}
	}

	getFavoriteProducts(productsId: Array<string>): Array<TypeProduct> {
		try {
			/*let favoriteProducts: Array<TypeProduct> = [];
			for (let index = 0; index < productsId.length; index++) {
				productDatabaseReference
					.doc(productsId[index])
					.get()
					.then((product: any) => {
						favoriteProducts.push({
							productId: product.id,
							...product.data(),
						});
					})
					.catch((error) => {
						throw new Error(error);
					});
			}
			return favoriteProducts;*/
			let favoriteProducts: Array<TypeProduct> = [];

			/*for (let index = 0; index < productsId.length; index++) {
				productDatabaseReference
					.where('favoriteProduct', 'array-contains', productsId[index])
					.get()
					.then((products) => {
						products.forEach((product) => {
							console.log(product.data());

							favoriteProducts.push({
								productId: product.id,
								...product.data(),
							});
						});
					})
					.catch((error) => {
						throw new Error(error);
					});
			}*/
			productDatabaseReference
				.where('favoriteProduct', 'in', ['6Lf3wlgmNW2FZzW9oEy1'])
				.get()
				.then((products) => {
					products.forEach((product) => {
						favoriteProducts.push({
							productId: product.id,
							...product.data(),
						});
					});
				})
				.catch((error) => {
					throw new Error(error);
				});
			return favoriteProducts;
		} catch (error) {
			throw new Error(error);
		}
	}
}
export default ProductService;
