import React from 'react';

interface NavItemProps {
	label: string;
	icon: string;
	selected?: boolean;
	handleClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, selected, handleClick }) => {
	const bgColor 	= selected ? "white" : "transparent";
	const boxShadow = selected ? "2px 2px 5px rgba(12,12,12,10%)" : "";
	const opacity = selected ? "100" : "50";

	return (
		<div 
			className={`
				w-full p-[0.25rem] flex flex-row gap-1 items-center 
				text-lg rounded-lg text-black cursor-pointer
				${selected ? "opacity-100" : `opacity-[50%] hover:bg-white hover:opacity-100`}
				bg-${bgColor}
			`}
			onClick={handleClick}
			style={{
				boxShadow: boxShadow
			}}
		>
			<img src={icon} className="tesla-icon scale-75" />
			<span>{label}</span>
		</div>
	);
};

export default NavItem;