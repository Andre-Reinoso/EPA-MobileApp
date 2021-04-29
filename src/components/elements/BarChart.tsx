import React, { useState, useEffect } from 'react';
import {
	IonGrid,
	IonCol,
	IonRow,
	IonAvatar,
	IonImg,
	IonText,
} from '@ionic/react';
import { Bar } from 'react-chartjs-2';

interface DashboardBarChartType {
	data: any;
}

const DashboardBarChart = ({ data }: DashboardBarChartType) => {
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
export default DashboardBarChart;
