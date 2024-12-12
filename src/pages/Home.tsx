import model3 from '../assets/Model 3.png';

const Home: React.FC = () => (
	<div className='flex h-screen overflow-hidden w-full' style={{
		backgroundImage: "url('src/assets/Model 3.png')",
		backgroundPosition: "center 400%",
		backgroundRepeat: "no-repeat",
	}}>
		<img src={model3} className="object-cover -z-[1] h-[850px] mx-auto mt-auto ml-12 hidden" />
		<div className="absolute bottom-[7rem] left-12 flex flex-row gap-12">
			<iframe 
				style={{ borderRadius: "12px" }} 
				src="https://open.spotify.com/embed/track/3jwQt00cvkN57H6ZR75W2K?utm_source=generator&theme=0" 
				width="400px" 
				height="152"
				allowFullScreen={false} 
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy" />
				{/* <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/68GG2qGGguVqMqP4qTVYBZ?utm_source=generator" width="600px" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}
			{/* <SpotifyMini 
				icon={albumIcon}
				trackName='RUNRUNRUN'
				trackArtist='Dutch Melrose' /> */}
			{/* <NavMini /> */}
		</div>
	</div>
);

export default Home;
