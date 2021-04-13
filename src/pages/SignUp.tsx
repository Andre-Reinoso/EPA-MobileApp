import React from 'react';
import { SignUpLayout } from './../components/layouts';
import { SignUpTemplate } from './../components/templates';

const SignUp: React.FC = () => {
	return (
		<>
			<SignUpLayout>
				<SignUpTemplate/>
			</SignUpLayout>
		</>
	);
};

export default SignUp;
