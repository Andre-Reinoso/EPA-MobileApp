import React from 'react';
import { ChatLayout } from '../components/layouts';
import { ChatTemplate } from './../components/templates/';

const Chat: React.FC = () => {
	return (
		<>
			<ChatLayout>
				<ChatTemplate />
			</ChatLayout>
		</>
	);
};

export default Chat;
