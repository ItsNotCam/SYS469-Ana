import React, { useState } from 'react';
import NavItem from './nav-item';

import audioIcon from '../assets/audio-icon.png';
import airConditioningIcon from '../assets/air-conditioning.png';
import navIcon from "../assets/navigate.png";
import powerIcon from '../assets/power.png';
import searchIcon from '../assets/search.png';
import soundIcon from '../assets/sound.png';
import temperatureIcon from '../assets/temperature-icon.png';
import homeIcon from '../assets/home.png';

interface SlideNavProps {
	selectedIdx: number;
	handlePageChange: (index: number) => void;
}

const SideNav: React.FC<SlideNavProps> = (props) => {
	const [isOpen, setIsOpen] = useState(true);
	const [selectedIdx, setSelectedIdx] = useState(props.selectedIdx);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	const handlePageChange = (index: number) => {
		setSelectedIdx(index);
		props.handlePageChange(index);
	}

	return (
		<div className={`side-nav z-[2] ${isOpen ? 'open' : 'closed'} bg-[#f0f0f0]`}>
			<div className="content flex flex-col w-fit gap-4 pl-2 items-center ml-[1rem] pt-12">
				<NavItem 
					label='Home'
					icon={homeIcon} 		
					selected={selectedIdx === 0}
					handleClick={() => handlePageChange(0)}
				/>
				<NavItem 
					label='Navigation'
					icon={navIcon}  
					selected={selectedIdx === 1}
					handleClick={() => handlePageChange(1)}
				/>
				<NavItem 
					label='Audio'
					icon={soundIcon}  		
					selected={selectedIdx === 2}
					handleClick={() => handlePageChange(2)}
				/>
				<NavItem 
					label='Climate Control'
					icon={airConditioningIcon}  
					selected={selectedIdx === 3}
					handleClick={() => handlePageChange(3)}
				/>
				<NavItem 
					label='Storage'
					icon={powerIcon}  	
					selected={selectedIdx === 4}
					handleClick={() => handlePageChange(4)}
				/>
			</div>
		</div>
	);
};

export default SideNav;