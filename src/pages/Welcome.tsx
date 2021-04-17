import React from 'react';
import { WelcomeLayout } from './../components/layouts';
import { WelcomeTemplate } from './../components/templates';

const Welcome: React.FC = () => {
	return (
		<>
			<WelcomeLayout>
				<WelcomeTemplate />
			</WelcomeLayout>
		</>
	);
};

export default Welcome;
