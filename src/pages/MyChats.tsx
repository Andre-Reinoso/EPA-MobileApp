import React from 'react';
import { MyChatsLayout } from '../components/layouts';
import { MyChatsTemplate } from '../components/templates';

const MyChats: React.FC = () => {
	return (
		<>
			<MyChatsLayout>
				<MyChatsTemplate />
			</MyChatsLayout>
		</>
	);
};

export default MyChats;
