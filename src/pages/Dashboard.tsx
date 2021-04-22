import React from 'react';
import { DashboardLayout } from '../components/layouts';
import { DashboardTemplate } from '../components/templates';

const Dashboard: React.FC = () => {
	return (
		<>
			<DashboardLayout>
				<DashboardTemplate />
			</DashboardLayout>
		</>
	);
};

export default Dashboard;
