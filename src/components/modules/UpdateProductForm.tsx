import React, { useState, useEffect } from 'react';
import {
	IonButton,
	IonList,
	IonItem,
	IonLabel,
	IonInput,
	IonIcon,
	IonTextarea,
	IonSelect,
	IonNote,
	useIonLoading,
	IonSelectOption,
} from '@ionic/react';
import { imageOutline, save } from 'ionicons/icons';
import { useDropzone } from 'react-dropzone';
import { UserContext } from '../../context/User.Context';
import Translator from '../elements/Translator';
import CategoryService from '../../services/UseCases/Category.Service';
import MarkDownEditor from '../elements/MarkDownEditor';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import StorageService from '../../services/UseCases/Storage.Service';
import ProductService from '../../services/UseCases/Product.Service';
import { useHistory, useParams } from 'react-router';

interface PropsUpdateProductForm {
	productId: string;
}

const UpdateProductForm = () => {
	const history = useHistory();
	const { productId } = useParams<PropsUpdateProductForm>();
	const { currentUser } = React.useContext(UserContext);
	const [categories, setCategories] = useState<Array<any>>();
	const [files, setFiles] = useState<Array<any>>([]);
	const [subcategories, setSubcategories] = useState<Array<any>>();
	const [presentLoading, dismissLoading] = useIonLoading();

	const [product, setProduct] = useState<any>();

	const { getRootProps, getInputProps, fileRejections } = useDropzone({
		maxFiles: 5,
		maxSize: 3000000,
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			setFiles(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
	});

	const fileRejectionItems = fileRejections.map(({ file, errors }: any) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
			<ul>
				{errors.map((e: any) => (
					<li key={e.code}>
						<IonNote color='danger'>
							<Translator
								from='en'
								to={currentUser.data.preferredLanguage || 'en'}
								text={e.message}
								returnText={true}
								onTextTranslated={() => {}}
							/>
						</IonNote>
					</li>
				))}
			</ul>
		</li>
	));

	const thumbs = files.map((file) => (
		<div
			style={{
				display: 'inline-flex',
				borderRadius: 2,
				border: '1px solid #eaeaea',
				marginBottom: 8,
				marginRight: 8,
				width: 100,
				height: 100,
				padding: 4,
				boxSizing: 'border-box',
			}}
			key={file.name}>
			<div style={{ display: 'flex', minWidth: 0, overflow: 'hidden' }}>
				<img
					src={file.preview}
					style={{ display: 'block', width: 'auto', height: '100%' }}
				/>
			</div>
		</div>
	));

	useEffect(
		() => () => {
			files.forEach((file) => URL.revokeObjectURL(file.preview));
		},
		[files]
	);

	useEffect(() => {
		const { getProductById } = new ProductService();
		getProductById(productId)
			.then((result) => {
				console.log(result);
				setProduct(result);
				setFieldValue('name', result.name);
				setFieldValue('category', result.category);
				setFieldValue('subcategory', result.subcategory);
				setFieldValue('description', result.description);
				setFieldValue('detail', result.detail);
				setFieldValue('price', result.price);
			})
			.catch((err) => {});
	}, []);

	async function updateProduct(
		{ name, description, detail, price, subcategory, category }: any,
		files: any
	) {
		presentLoading({
			message: 'Loading ...',
			translucent: true,
			spinner: 'bubbles',
			id: 'loadingSpiner',
		});
		const { uploadFile, getDownloadURL } = new StorageService();
		const { updateProduct } = new ProductService();
		try {
			const gallery = [];
			for (let index = 0; index < files.length; index++) {
				const filename = await uploadFile(files[index], 'productos');
				const urlImage = await getDownloadURL(filename, 'productos');
				gallery.push(urlImage);
			}
			await updateProduct(
				{
					name,
					description,
					detail,
					price,
					subcategory,
					category,
					image: gallery[0],
					gallery,
					status: '1',
					userSellerId: currentUser.data.userId,
				},
				productId
			);
			dismissLoading();
			history.goBack();
		} catch (error) {
			console.log(error);
			dismissLoading();
		}
	}

	console.log(product);
	const { values, setFieldValue, handleSubmit, errors } = useFormik({
		initialValues: {
			name: '',
			category: '',
			subcategory: '',
			description: '',
			detail: '',
			price: 0,
		},
		onSubmit: () => {
			if (Object.entries(errors).length === 0) {
				updateProduct(values, files);
			}
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Required field'),
			category: Yup.string().required('Required field'),
			subcategory: Yup.string().required('Required field'),
			description: Yup.string().required('Required field'),
			detail: Yup.string().required('Required field'),
			price: Yup.number().positive().moreThan(0).required('Required field'),
		}),
	});

	useEffect(() => {
		const { getAllCategories } = new CategoryService();
		getAllCategories().then((result) => {
			setCategories(result);
		});
	}, []);

	useEffect(() => {
		const { getSubCategoriesByCagegory } = new CategoryService();
		getSubCategoriesByCagegory(values.category).then((result) => {
			setSubcategories(result);
		});
	}, [values.category]);

	return (
		<>
			<IonList className='px-2'>
				<IonItem>
					<h3>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Add Product'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</h3>
				</IonItem>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Name'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						onIonChange={(e: any) => {
							setFieldValue('name', e.target.value);
						}}
						value={values.name}
						type='text'
						color={errors.name ? 'danger' : 'default'}></IonInput>
					{errors.name && (
						<IonNote color='danger'>{errors.name ? errors.name : ''}</IonNote>
					)}
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Price'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonInput
						onIonChange={(e: any) => {
							setFieldValue('price', e.target.value);
						}}
						value={values.price}
						type='number'
						color={errors.price ? 'danger' : 'default'}></IonInput>
					{errors.price && (
						<IonNote color='danger'>{errors.price ? errors.price : ''}</IonNote>
					)}
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Category'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonSelect
						value={values.category}
						color={errors.category ? 'danger' : 'default'}
						interface='action-sheet'
						cancelText='Dismiss'
						onIonChange={(e: any) => {
							setFieldValue('category', e.target.value);
							setFieldValue('subcategory', '');
						}}>
						{categories?.map((category, i) => {
							return (
								<IonSelectOption key={i} value={category.name}>
									<Translator
										from='en'
										to={currentUser.data.preferredLanguage || 'en'}
										text={category.name}
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</IonSelectOption>
							);
						})}
					</IonSelect>
					{errors.category && (
						<IonNote color='danger'>
							{errors.category ? errors.category : ''}
						</IonNote>
					)}
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='SubCategory'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonSelect
						value={values.subcategory}
						color={errors.subcategory ? 'danger' : 'default'}
						interface='action-sheet'
						cancelText='Dismiss'
						onIonChange={(e: any) => {
							setFieldValue('subcategory', e.target.value);
						}}>
						{subcategories?.map((subcategory, i) => {
							return (
								<IonSelectOption key={i} value={subcategory.name}>
									<Translator
										from='en'
										to={currentUser.data.preferredLanguage || 'en'}
										text={subcategory.name}
										returnText={true}
										onTextTranslated={() => {}}
									/>
								</IonSelectOption>
							);
						})}
					</IonSelect>
					{errors.subcategory && (
						<IonNote color='danger'>
							{errors.subcategory ? errors.subcategory : ''}
						</IonNote>
					)}
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Description'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<IonTextarea
						color={errors.description ? 'danger' : 'default'}
						onIonChange={(e: any) => {
							setFieldValue('description', e.target.value);
						}}
						value={values.description}
						clearOnEdit={true}
						rows={2}
						cols={20}></IonTextarea>
					{errors.description && (
						<IonNote color='danger'>
							{errors.description ? errors.description : ''}
						</IonNote>
					)}
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel className='mb-3' position='stacked'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Detail'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonLabel>
					<div className='my-2'>
						<MarkDownEditor
							onTextChange={(e: any) => {
								setFieldValue('detail', e);
							}}
							defaultValue={values.detail}
							showRenderContent={false}
						/>
					</div>
					{errors.detail && (
						<IonNote color='danger'>
							{errors.detail ? errors.detail : ''}
						</IonNote>
					)}
				</IonItem>

				<div {...getRootProps({ className: 'dropzone my-3' })}>
					<IonButton
						fill='outline'
						className='ion-text-capitalize'
						expand='block'>
						<input {...getInputProps()} />
						<IonIcon slot='start' icon={imageOutline} />
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text='Choose Images'
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</IonButton>
				</div>
				<IonItem>
					<aside
						style={{
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'wrap',
						}}>
						{thumbs}
					</aside>
					{fileRejectionItems}
				</IonItem>

				<IonButton
					onClick={() => {
						handleSubmit();
					}}
					expand='block'
					className='mt-4 ion-button-full-rounded ion-text-capitalize fw-bold'>
					<Translator
						from='en'
						to={currentUser.data.preferredLanguage || 'en'}
						text='Save'
						returnText={true}
						onTextTranslated={() => {}}
					/>
					<IonIcon slot='end' icon={save} />
				</IonButton>
			</IonList>
		</>
	);
};

export default UpdateProductForm;
