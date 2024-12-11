import React from 'react';

import audioIcon from '../assets/audio-icon.png';
import carIcon from '../assets/car-icon.png';
import navIcons from '../assets/nav-icons.png';
import temperatureIcon from '../assets/temperature-icon.png';

const Nav: React.FC = () => {
	return (
		<nav className='z-[2] absolute bottom-0 w-full place-items-center grid grid-cols-[1fr,2fr,1fr] h-[64px] bg-black overflow-visible'>
			<div className='flex flex-row gap-12 w-fit h-[40px] my-auto ml-8 mr-auto'>
				<img src={carIcon} />
				<img src={temperatureIcon} />
			</div>
			<img src={navIcons} className="mx-auto h-[32px]"/>
			<div className='flex flex-row gap-12 w-fit h-[40px] my-auto ml-auto mr-8'>
				<img src={temperatureIcon} />
				<img src={audioIcon} />
			</div>
		</nav>
	);
};

export default Nav;