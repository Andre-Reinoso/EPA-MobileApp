import React from 'react';

import { Bar } from 'react-chartjs-2';

interface DashboardBarChartType {
	data: any;
}

const BarChart = ({ data }: DashboardBarChartType) => {
	return (
		<div>
			<Bar
				data={data}
				options={{
					maintainAspectRatio: true,
					legend: {
						display: false,
					},
					barPercentage: 0.7,
					scales: {
						xAxes: [
							{
								display: false,
							},
						],
						yAxes: [
							{
								display: false,
							},
						],
					},
				}}
			/>
		</div>
	);
};
export default BarChart;
