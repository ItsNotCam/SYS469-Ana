import React from 'react';
import batteryLevel from '../assets/Battery Level.png';
import vehicleInfoTop from '../assets/vehicle-info-top.png';

const VehicleInfo: React.FC = () => {
	return (
		<div className="px-4 py-2 absolute top-0 h-[64px] w-full grid grid-cols-3">			
			<div className='flex flex-row gap-12 items-center ml-4'>
				<span>P R N D</span>
				<img src={batteryLevel} className="h-[1.5rem]" />
			</div>
			<div className="flex flex-row gap-8 mx-auto scale-75">
				<img src={vehicleInfoTop} />
			</div>
		</div>
	);
};

export default VehicleInfo;