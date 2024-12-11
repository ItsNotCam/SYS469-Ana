import React from 'react';

import audioIcon from '../assets/audio-icon.png';
import carIcon from '../assets/car-icon.png';
import navIcons from '../assets/nav-icons.png';
import temperatureIcon from '../assets/temperature-icon.png';

const Nav: React.FC = () => {
	return (
		<nav className='z-[2] absolute bottom-0 w-full grid grid-cols-[1fr,2fr,1fr] h-[100px] bg-black py-4 overflow-visible'>
			<div className='flex flex-row gap-[100px] mr-auto ml-[64px] w-[400px]'>
				<img src={carIcon} className="h-[64px]"/>
				<img src={temperatureIcon} className="h-[64px]"/>
			</div>
			<img src={navIcons} className="m-auto"/>
			<div className='flex flex-row gap-[60px] ml-auto mr-[64px] w-[400px]'>
				<img src={temperatureIcon} className="h-[64px]"/>
				<img src={audioIcon} className="h-[64px]"/>
			</div>
		</nav>
	);
};

export default Nav;