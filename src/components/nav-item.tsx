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

	return (
		<div 
			className={`
				w-80 p-4 flex flex-row gap-4 items-center 
				text-2xl rounded-lg text-black cursor-pointer
				${selected ? null : `hover:bg-white hover:opacity-100`}
				bg-${bgColor}
			`}
			onClick={handleClick}
			style={{
				boxShadow: boxShadow,
			}}
		>
			<img src={icon} className="tesla-icon" />
			<span>{label}</span>
		</div>
	);
};

export default NavItem;