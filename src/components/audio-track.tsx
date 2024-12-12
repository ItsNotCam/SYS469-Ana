import React from 'react';

export interface AudioTrackProps {
	trackName: string;
	artistName: string;
	albumArt: string;
	icon: any;
}

const AudioTrack: React.FC<AudioTrackProps> = ({ trackName, artistName, albumArt, icon }) => {
	return (<>
		<img src={albumArt} />
		<div className='relative flex flex-col h-full w-full mr-auto pl-4'>
		<img src={icon} className="ml-auto h-[48px] w-fit object-fit mt-4 mr-4"/>
		<div className="flex flex-col gap-2 w-full mt-8">
			<h1 className='text-4xl font-bold tracking-wide'>{trackName}</h1>
			<span className='text-lg opacity-50'>{artistName}</span>
		</div>
	</div>
	</>);
};

export default AudioTrack;