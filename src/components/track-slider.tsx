import React from 'react';

interface TrackSliderProps {
	percentage: number;
	className?: string;
}

const TrackSlider: React.FC<TrackSliderProps> = ({ percentage, className }) => {
	return (
		<div className={`h-[3px] ${className} bg-gray-300 flex flex-row items-center`}>
			<div className="h-full bg-black" style={{ width: `${percentage}%` }}></div>
			<div className="rounded-full h-[1px] w-[1px] bg-black origin-center scale-[900%]"/>
		</div>
	);
};

export default TrackSlider;