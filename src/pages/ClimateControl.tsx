import React, { useState } from 'react';
import model3 from '../assets/Model 3.png';
import personIcon from '../assets/person.png';
import fanIcon from '../assets/fan-icon.png';
import climateControlIcon from '../assets/climate-control.png';
import doorIcon from '../assets/door-dark.png';

interface ClimateControlProps {
	icon?: any;
	name: any;
	toggled: boolean;
	onClick: () => void
	isLast?: boolean;
}

const ClimateControlButton: React.FC<ClimateControlProps> = ({ icon, name, toggled, isLast, onClick }) => {
	return (
		<button 
			className={
				`cursor-pointer h-[110px] w-[145px] 
				 grid place-items-center border-gray-400 
				${isLast 	? "" : "border-r"}
				${toggled ? "bg-white" : "bg-[#f0f0f0] hover:bg-[#f3f3f3]"}
			`}
			onClick={onClick}
		>
			{name}
		</button>
	)
}

interface ClimateControlRowProps {
	ClimateControlButtons: ClimateControlProps[];
	name: string;
}

const ClimateControlRow: React.FC<ClimateControlRowProps> = ({ ClimateControlButtons, name }) => {
	const [fanSpeed, setFanSpeed] = useState<number>(4);
	const [temperature, setTemperature] = useState<number>(40);


	const updateTemperature = (e: any) => {
		const temperature = parseInt(e.target.value);
		setTemperature(clamp(temperature, 8, 92));
	}

	const clamp = (val: number, low: number, high: number): number => {
		return Math.max(low, Math.min(val, high));
	}

	const lerp = (value: number, min: number, max: number): number => {
		return min + (max - min) * (value / 100);
	}

	const updateFanSpeed = (speed: number) => {
			setFanSpeed(s => speed === s ? 5 : speed);
	}

	return (<>
		<div className="w-full flex flex-row justify-start gap-2 h-[32px] items-center">
		<img src={doorIcon} className='max-h-full' />
		<h1 className="text-2xl">{name}</h1>
	</div>
	<div className="grid grid-cols-[1fr,auto] grid-rows-[repeat(2,110px)] gap-4">
		<div className="flex flex-row mx-auto gap-0 rounded-lg overflow-hidden shadow-light border border-gray-200">
			{ClimateControlButtons.map((btn: ClimateControlProps, i: number) => (
				<ClimateControlButton 
					name={btn.name}
					toggled={i === fanSpeed}
					isLast={i === (ClimateControlButtons.length-1)} 
					onClick={() => updateFanSpeed(i)} 
				/>
			))}
		</div>
		<div className='h-[110px] w-[145px] grid place-items-center bg-[#627fff] rounded-lg'>
			<img src={fanIcon} />
		</div>
		<div className="grid grid-cols-[1fr,auto] grid-rows-1 gap-4">
			<div className="h-[110px] grid grid-cols-1 place-items-center relative">
				<div className="pointer-events-none absolute w-full bg-gray-200 rounded-md h-2" />
				<div className="pointer-events-none absolute h-2 bg-black left-0 rounded-md" style={{ width: `${temperature}%` }} />
				<div className='pointer-events-none absolute w-[64px] h-[64px] bg-white grid place-items-center' style={{ left: `calc(${temperature}% - 32px)` }}>
					<img src={climateControlIcon} className='h-full'/>
				</div>
				<input 
					type='range' 
					min={0} 
					max={100} 
					value={temperature} 
					onChange={updateTemperature}
					className='w-full row-start-1 row-end-2 col-start-1 col-end-2'
				/>
			</div>
		</div>
		<div className='h-[110px] w-[145px] grid place-items-center bg-[#627fff] rounded-lg'>
			<h1 className='text-2xl font-bold'>{lerp(temperature, 64, 84).toFixed(0)}°</h1>
		</div>
	</div>
	</>)
}

const ClimateControl: React.FC = () => {

	const ClimateControlButtons: any = [{
		name: "Low",
		toggled: false
	},{
		name: "Medium",
		toggled: false
	},{
		name: "High",
		toggled: false
	},{
		name: "Auto",
		toggled: false
	}]

	return (
		<div className='flex h-screen overflow-hidden w-full'>
			<img src={model3} className="absolute -left-12 -bottom-12 object-cover -z-[1] h-[850px] mr-auto mt-auto ml-12" />
			<div className="z-[1] ml-auto mr-[250px] py-8 px-8 h-full bg-white shadow-lg gap-8 flex flex-col">
				<ClimateControlRow ClimateControlButtons={ClimateControlButtons} name="James"/>
				<ClimateControlRow ClimateControlButtons={ClimateControlButtons} name="Sarah"/>
			</div>
		</div>
	);
};

export default ClimateControl;