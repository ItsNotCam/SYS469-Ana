import React from 'react';
import searchIcon from '../assets/search.png';

import homeIcon from '../assets/home.png';
import workIcon from '../assets/briefcase.png';

const NavMini: React.FC = () => {
	return (
		<div className="
			w-[350px] bg-[rgba(245,245,245,0.9)] rounded-md overflow-hidden 
			grid grid-rows-[1.22fr,1fr]
			inner-shadow-light
		">
			<div className="
				flex flex-row gap-2 h-full items-center text-xl text-gray-500 
				border-b-[3px] border-gray-300 pl-4 my-auto
			">
				<img src={searchIcon} className="h-[32px]"/> Search
			</div>
			<div className='grid grid-cols-2'>
				<div className="h-[60%] gap-2 my-auto ml-auto pr-8 flex items-center">
					<img src={homeIcon} className="h-[30px]"/>
					<h1 className="text-lg">
						Home
					</h1>
				</div>
				<div className="h-[60%] gap-2 my-auto border-l-[3px] border-gray-300 pl-8 flex items-center">
					<img src={workIcon} className="h-[30px]"/>
					<h1 className="text-lg">Work</h1>
				</div>
			</div>
		</div>
	);
};

export default NavMini;