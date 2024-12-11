import React, { useState } from 'react';
import BaseLayout from './BaseLayout';
import buttons from '../assets/SpotifyMiniButtons.png';
import albumIcon from '../assets/album.png';
import spotifyLogo from '../assets/spotify.png';
import TrackSlider from '../components/track-slider';
import radio from '../assets/radio.png';

import audioIcon from '../assets/audio-icon.png';

type AudioType = "spotify" | "radio";
interface AudioProps {
	type: AudioType;
}

const Audio: React.FC<AudioProps> = ({ type }) => {
	const [source, setSource] = useState<AudioType>("spotify");

	if(source === "spotify") {
		return (
			<div className='w-full h-screen grid place-items-center'>
				<div className='absolute top-24 left-12' onClick={() => setSource("radio")}>
					<img src={audioIcon} className='cursor-pointer'/>
				</div>
				<div className="grid place-items-center grid-cols-[calc(600px*0.4),1fr] grid-rows-[1fr,0.5fr] h-[350px] w-[600px] bg-white shadow-lg rounded-md">
					<img src={albumIcon} />
					<div className='relative flex flex-col gap-4 mr-auto ml-4'>
						<img src={spotifyLogo} className="h-[45px] w-[150px]"/>
						<div className="flex flex-col gap-2 w-full mt-4">
							<h1 className='text-4xl font-bold tracking-wide'>RUNRUNRUN</h1>
							<span className='text-lg opacity-50'>Dutch Melrose</span>
						</div>
					</div>
					<div className='col-start-1 col-end-3 my-auto w-[90%]'>
						<TrackSlider percentage={40} />
					</div>
					<div className="col-start-1 col-end-3 w-full mb-4">
						<img src={buttons} className='h-[38px] mx-auto'/>
					</div>
				</div>
			</div>
		);
	} else {
		return (<div className='w-full h-screen grid place-items-center'>
			<div className='absolute top-24 left-12' onClick={() => setSource("spotify")}>
				<img src={audioIcon} className='cursor-pointer'/>
			</div>
		<div className="grid place-items-center grid-cols-[calc(600px*0.4),1fr] grid-rows-[1fr,0.5fr] h-[350px] w-[600px] bg-white shadow-lg rounded-md">
			<img src={albumIcon} />
			<div className='relative flex flex-col gap-4 mr-auto ml-4'>
				<img src={spotifyLogo} className="h-[45px] w-[150px]"/>
				<div className="flex flex-col gap-2 w-full mt-4">
					<h1 className='text-4xl font-bold tracking-wide'>RUNRUNRUN</h1>
					<span className='text-lg opacity-50'>Dutch Melrose</span>
				</div>
			</div>
			<div className='col-start-1 col-end-3 my-auto w-[90%]'>
				<TrackSlider percentage={40} />
			</div>
			<div className="col-start-1 col-end-3 w-full mb-4">
				<img src={radio} className='h-[38px] mx-auto'/>
			</div>
		</div>
	</div>)
	}
};

export default Audio;