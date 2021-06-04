import { db } from '../../config/Firebase.config';

const categoryDatabaseReference = db.collection('categories');
const subcategoryDatabaseReference = db.collection('subcategories');

interface TypeCategory {
	id: string;
	name: string;
	image: string;
}

interface TypeSubcategory {
	id: string;
	name: string;
	category: string;
}

class CategoryService {
	async getAllCategories(): Promise<Array<TypeCategory>> {
		try {
			let allCategories: Array<TypeCategory> = [];
			const categories = await categoryDatabaseReference.get();
			categories.forEach((category: any) => {
				allCategories.push(category.data());
			});
			return allCategories;
		} catch (error) {
			throw new Error(error);
		}
	}
	async getSubCategoriesByCagegory(
		category: string
	): Promise<Array<TypeSubcategory>> {
		try {
			let allSubcategories: Array<TypeSubcategory> = [];
			const subcategories = await subcategoryDatabaseReference
				.where('category', '==', category)
				.get();
			subcategories.forEach((category: any) => {
				allSubcategories.push(category.data());
			});
			return allSubcategories;
		} catch (error) {
			throw new Error(error);
		}
	}
}
export default CategoryService;
