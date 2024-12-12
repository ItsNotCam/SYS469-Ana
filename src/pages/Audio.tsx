import React, { useEffect, useRef, useState } from 'react';
import buttons from '../assets/SpotifyMiniButtons.png';

import runrunrunIcon from '../assets/runrunrun.png';
import spineIcon from '../assets/spine.png';
import prettyPleaseIcon from '../assets/prettyplease.png';


import spotifyLogo from '../assets/spotify-logo.png';
import TrackSlider from '../components/track-slider';

import playIcon from '../assets/play.png';
import pauseIcon from '../assets/pause.png';

import upChevron from '../assets/up-chevron.svg';

import radioIcon from '../assets/radio-icon.png';
import audioIcon from '../assets/sound.png';
import cdIcon from '../assets/cd-icon.svg';
import AudioTrack, { AudioTrackProps } from '../components/audio-track';

type AudioType = "spotify" | "radio" | "cd";
interface AudioProps {
	type: AudioType;
}

const Audio: React.FC<AudioProps> = () => {
	const [source, setSource] = useState<AudioType>("spotify");
	const [audioSourceIcon, setAudioSourceIcon] = useState(buttons);
	const [audioChangeOpen, setAudioChangeOpen] = useState<boolean>(false);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [trackIdx, setTrackIdx] = useState<number>(0);
	const [volume, setVolume] = useState<number>(50);

	const tracks = useRef<AudioTrackProps[]>([
		{
			trackName: "RUNRUNRUN",
			artistName: "Dutch Melrose",
			albumArt: runrunrunIcon,
			icon: spotifyLogo
		},
		{
			trackName: "PRETTY PLEASE",
			artistName: "Dutch Melrose",
			albumArt: prettyPleaseIcon,
			icon: spotifyLogo 
		},
		{
			trackName: "SPINE",
			artistName: "WesGhost",
			albumArt: spineIcon,
			icon: spotifyLogo
		}
	])

	useEffect(() => {
		switch(source) {
			case "spotify": setAudioSourceIcon(spotifyLogo)	; break;
			case "radio"  : setAudioSourceIcon(radioIcon)		; break;
			case "cd"			: setAudioSourceIcon(cdIcon)			; break;
		}
	},[source])

	const nextAudioSource = () => {
		switch(source) {
			case "spotify": setSource("radio")	; break;
			case "radio"	: setSource("cd")			; break;
			case "cd"			: setSource("spotify"); break;
		}
	}

	const lastAudioSource = () => {
		switch(source) {
			case "spotify": setSource("cd")			; break;
			case "cd"			: setSource("radio")	; break;
			case "radio"	: setSource("spotify"); break;
		}
	}

	const nextTrack = () => {
		setTrackIdx(idx => (idx + 1) % tracks.current.length);
	}

	const lastTrack = () => {
		setTrackIdx((idx) => (idx-1 < 0) ? tracks.current.length-1 : idx-1);
	}

	const changeAudioSource = () => { setAudioChangeOpen(c => !c); }

	const updateVolume = (e: any) => {
		const value = parseInt(e.target.value);
		setVolume(value);
	}

	return (
		<div className='w-full h-screen grid place-items-center' style={{
			backgroundImage: "url('src/assets/Model 3.png')",
			backgroundPosition: "center 400%",
			backgroundRepeat: "no-repeat",
		}}>
			<div className='absolute top-24 left-12 flex flex-row gap-8 h-[64px]'>
					<img 
						src={upChevron} 
						className="-rotate-90 -mr-2 cursor-pointer h-12 w-12 rounded-full hover:bg-gray-200" 
						onClick={lastAudioSource}
					/>
					<img 
						src={audioSourceIcon} 
						className='cursor-pointer h-12 w-12 rounded-full hover:bg-gray-200' 
						onClick={() => changeAudioSource}
					/>
					<img 
						src={upChevron} 
						className="rotate-90 -ml-2 cursor-pointer h-12 w-12 rounded-full hover:bg-gray-200" 
						onClick={nextAudioSource}
					/>
			</div>
			<div className="grid place-items-center 
				grid-cols-[calc(600px*0.4),1fr] 
				grid-rows-[1fr,auto,0.5fr] 
				h-[350px] w-[600px] 
				bg-white shadow-lg rounded-md
			">
				<AudioTrack 
					trackName={tracks.current[trackIdx].trackName}
					artistName={tracks.current[trackIdx].artistName}
					albumArt={tracks.current[trackIdx].albumArt}
					icon={audioSourceIcon}
				/>
				<div className='col-start-1 col-end-3 my-auto w-[90%]'>
					<TrackSlider percentage={60} />
				</div>
				<div 
					style={{ maxHeight: audioChangeOpen ? "100px" : "0px" }} 
					className="col-start-1 col-end-3 row-start-1 row-end-4 mx-auto absolute w-[2px] bg-black z-10"
				/>
				<div className="row-start-3 row-end-4 col-start-1 col-end-3 mb-4 flex flex-row gap-8 mx-auto">
					<img 
						src={upChevron} 
						className="-rotate-90 -mr-2 cursor-pointer h-12 w-12 rounded-full hover:bg-gray-200" 
						onClick={lastTrack}
					/>
					<img 
						src={isPlaying ? pauseIcon :  playIcon} 
						className='cursor-pointer h-12 w-12 rounded-full hover:bg-gray-200' 
						onClick={() => setIsPlaying(p => !p)}
					/>
					<img 
						src={upChevron} 
						className="rotate-90 -ml-2 cursor-pointer h-12 w-12 rounded-full hover:bg-gray-200" 
						onClick={nextTrack}
					/>
				</div>
			</div>
			<div className='absolute bottom-24 left-6 flex flex-col items-center'>
				<img src={audioIcon} />
				<input 
					type='range' 
					min={0} 
					max={100} 
					value={volume} 
					onChange={updateVolume}
					className="appearance-none bg-gray-400 h-1 w-full rounded-full"
					style={{ accentColor: 'black' }}
				/>
			</div>
		</div>
	);
}

export default Audio;