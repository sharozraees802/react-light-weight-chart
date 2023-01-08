import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
export const ChartComponent = props => {
	const {
		data,
	} = props;
	const chartContainerRef = useRef();

	useEffect(
		() => {
			const handleResize = () => {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth });
			};

			const chart = createChart(chartContainerRef.current, {
				layout: {
					background: { type: ColorType.Solid },
					
				},
				width: chartContainerRef.current.clientWidth,
				height: 300,
			});
			chart.timeScale().fitContent();

			const newSeries = chart.addAreaSeries({ topColor: "green", bottomColor: "yellow" });
			newSeries.setData(data);

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);

				chart.remove();
			};
		},
		[data ]
	);

	return (
		<div
			ref={chartContainerRef}
		/>
	);
};





