import { db, storage } from '../../config/Firebase.config';
import { v4 as uuidv4 } from 'uuid';

function getFileExtension(filename: any) {
	let ext = /^.+\.([^.]+)$/.exec(filename);
	return ext == null ? '' : ext[1];
}
function prepareFileName(file: any) {
	const uniqueName = uuidv4().toString().replace(/-/g, '');
	const fileName = file.name;
	const fileExtention = getFileExtension(fileName);
	const alias = (
		fileName.split('.')[0] +
		'_' +
		uniqueName +
		'.' +
		fileExtention
	)
		.replace(/\s/g, '_')
		.toLowerCase();
	return alias;
}

class StorageService {
	async uploadFile(file: any, path: string) {
		try {
			const fileName = prepareFileName(file);
			await storage.ref(`${path}/${fileName}`).put(file);
			return fileName;
		} catch (error) {
			throw new Error(error);
		}
	}

	async getDownloadURL(fileName: string, path: string): Promise<string> {
		try {
			const url = await storage
				.ref()
				.child(`${path}/${fileName}`)
				.getDownloadURL();
			return url;
		} catch (error) {
			throw new Error(error);
		}
	}
}
export default StorageService;
