import React, { useState, useEffect } from 'react';

import Chart, { Pie } from 'react-chartjs-2';
import { DashboardContext } from '../../context/Dashboard.Context';
interface DashboardBarChartType {
	data: any;
}

const DashboardBarChart = ({ data }: DashboardBarChartType) => {
	const { pieChartValue } = React.useContext(DashboardContext);
	return (
		<div>
			<Pie
				plugins={[
					{
						beforeDraw: function (chart: any) {
							var width = chart.chart.width,
								height = chart.chart.height,
								ctx = chart.chart.ctx;

							ctx.restore();
							var fontSize = (height / 80).toFixed(2);
							ctx.font = fontSize + 'em sans-serif';
							ctx.textBaseline = 'middle';
							ctx.textColor = 'white';
							var text = `${pieChartValue}%`,
								textX = Math.round((width - ctx.measureText(text).width) / 2),
								textY = height / 2;
							ctx.fillStyle = 'rgba(255, 255, 255)';
							ctx.fillText(text, textX, textY);

							ctx.save();
						},
					},
				]}
				data={data}
				options={{
					cutoutPercentage: 80,
					animation: {
						animationRotate: true,
						duration: 2000,
					},
					legend: {
						display: false,
					},
					tooltips: {
						enabled: false,
					},
				}}
			/>
		</div>
	);
};
export default DashboardBarChart;
