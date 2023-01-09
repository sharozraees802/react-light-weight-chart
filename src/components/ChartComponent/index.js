import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';
export const ChartComponent = props => {
	const {
		data,
		data1,
		data2,
		data3,
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

			// const newSeries = chart.addAreaSeries({ topColor: "green", bottomColor: "yellow" });
			const newSeries = chart.addCandlestickSeries({ topColor: "green", bottomColor: "yellow" });
			newSeries.setData(data);

			const newSeries1 = chart.addCandlestickSeries({ topColor: "green", bottomColor: "yellow" });
			newSeries1.setData(data1);

			const newSeries2 = chart.addCandlestickSeries({ topColor: "green", bottomColor: "yellow" });
			newSeries2.setData(data2);

			const newSeries3 = chart.addCandlestickSeries({ topColor: "green", bottomColor: "yellow" });
			newSeries3.setData(data3);

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





