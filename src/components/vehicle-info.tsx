import React from 'react';
import batteryLevel from '../assets/Battery Level.png';
import vehicleInfoTop from '../assets/vehicle-info-top.png';

const VehicleInfo: React.FC = () => {
	return (
		<div className="z-[1] p-4 absolute top-0 h-[85pxpx] w-full grid grid-cols-3">			
			<div className='flex flex-row gap-12 items-center ml-4'>
				<span>P R N D</span>
				<img src={batteryLevel} className="h-[1.5rem]" />
			</div>
			<div className="flex flex-row gap-8 mx-auto">
				<img src={vehicleInfoTop} className='h-1.5rem' />
			</div>
		</div>
	);
};

export default VehicleInfo;