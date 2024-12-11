import React from 'react';
import TrackSlider from './track-slider';
import buttons from '../assets/SpotifyMiniButtons.png';

interface SpotifyMiniProps {
	icon: string;
	trackName: string;
	trackArtist: string;
}

const SpotifyMini: React.FC<SpotifyMiniProps> = ({ icon, trackName, trackArtist }) => {
	return (
		<div className="w-[500px] bg-[rgba(245,245,245,0.9)] rounded-md overflow-hidden shadow-lg inner-shadow-light">
			<div className="flex flex-row gap-4">
				<img src={icon} alt="Track Icon" className='h-[80px]'/>
				<div className="flex flex-col h-full my-auto">
					<h1 className="text-xl text-black font-bold">{trackName}</h1>
					<h2 className="text-lg text-gray">{trackArtist}</h2>
				</div>
			</div>
			<TrackSlider percentage={40} />
			<img src={buttons} className="mx-auto py-1"/>
		</div>
	);
};

export default SpotifyMini;