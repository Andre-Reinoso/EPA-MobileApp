import { db } from '../../config/Firebase.config';
const quotationDatabaseReference = db.collection('quotation');

interface Quotation {
	aplicationDate: string;
	destiny: string;
	estimateAmount: number;
	messageAnswered: string;
	messageAnsweredTranslate: string;
	messageTranslate: string;
	messageUser: string;
	paymentTerms: string;
	price: number;
	productId: string;
	shippingDate: string;
	status: string;
	userSellerId: string;
	usersId: string;
}

class QuotationService {
	async addQuotation(quotation: Quotation) {
		try {
			return await quotationDatabaseReference.doc().set(quotation);
		} catch (error) {
			throw new Error(error);
		}
	}
	async deleteQuotationById(id:string) {
		try {
			return await quotationDatabaseReference.doc(id).delete()
		} catch (error) {
			throw new Error(error);
		}
	}
}

export default QuotationService;
