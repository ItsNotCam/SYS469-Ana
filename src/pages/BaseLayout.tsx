import React from 'react';
import Nav from '../components/nav';
import SideNav from '../components/side-nav';
import VehicleInfo from '../components/vehicle-info';

const BaseLayout: React.FC<PageProps> = ({ handlePageChange }) => {
	return (<>
		<Nav />
		<SideNav selectedIdx={0} handlePageChange={handlePageChange} />
		<VehicleInfo />
	</>);
};

export default BaseLayout;