import model3 from '../assets/Model 3.png';
import SpotifyMini from '../components/spotify-mini';

import albumIcon from '../assets/album.png';
import NavMini from '../components/nav-mini';

const Home: React.FC = () => (
	<div className='flex h-screen overflow-hidden w-full'>
		<img src={model3} className="-z-[1] absolute left-1/2 -translate-x-2/3 top-[35%] h-[850px]"/>
		<div className="absolute bottom-[7rem] left-[20%] flex flex-row gap-12">
			<SpotifyMini 
				icon={albumIcon}
				trackName='RUNRUNRUN'
				trackArtist='Dutch Melrose' />
			<NavMini />
		</div>
	</div>
);

export default Home;
