import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';

interface TypeMarkDownEditor {
	defaultValue: any;
	showRenderContent: boolean;
	onTextChange: Function;
}

function MarkDownEditor({
	defaultValue,
	showRenderContent,
	onTextChange,
}: TypeMarkDownEditor) {
	const [value, setValue] = useState(defaultValue);
	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			['bold', 'italic', 'underline'],
			[{ list: 'ordered' }, { list: 'bullet' }],
			[
				{ align: '' },
				{ align: 'center' },
				{ align: 'right' },
				{ align: 'justify' },
			],
		],
	};
	useEffect(() => {
		onTextChange(value);
	}, [value]);
	return (
		<>
			{showRenderContent ? (
				parse(value)
			) : (
				<ReactQuill
					theme={'snow'}
					modules={modules}
					value={value}
					onChange={(e) => {
						setValue(e);
					}}
				/>
			)}
		</>
	);
}

export default MarkDownEditor;
