import { useEffect, useRef, useState } from 'react'
import Home from './pages/Home';
import Maps from './pages/Maps';
import Audio from './pages/Audio';
import ClimateControl from './pages/ClimateControl';
import Storage from './pages/Storage';
import BaseLayout from './pages/BaseLayout';

function App() {
	const [isFullHD, setIsFullHD] = useState(window.innerWidth === 1920 && window.innerHeight === 1080);
	const [currentPage, setCurrentPage] = useState<JSX.Element>(<Home />);
	const pages = useRef<JSX.Element[]>([
		<Home />,
		<Maps />,
		<Audio />,
		<ClimateControl />,
		<Storage />,
	]);

	const handleIgnoreWarning = () => {
		localStorage.setItem('ignoreWarning', 'true');
		setIsFullHD(true);
	};

	const handleNavTabChange = (index: number) => {
		setCurrentPage(pages.current[index]);
	}

	useEffect(() => {
		const ignoreWarning = localStorage.getItem('ignoreWarning');
		if (ignoreWarning === 'true') {
			setIsFullHD(true);
		}

		const handleResize = () => {
			if(ignoreWarning) return;
			setIsFullHD(window.innerWidth === 1920 && window.innerHeight === 1080);
		};

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);


  return (
    <>
		{!isFullHD ? 
			<div className='z-[1000] fixed top-0 left-0 w-full h-screen grid place-items-center bg-black/60'>
				<div className="h-fit w-[400px] flex justify-center flex-col gap-5 text-[#EEEEEE]">
					<h1 className="text-2xl text-center">Invalid Tesla display detected!</h1>
					<p className="">Tesla expects your screen to be around 1920x1200px.</p>
					<p>It is recommended that you change your viewport to match this for best results.</p>
					<p>If you cannot achieve 1920x1200px, but can achive another 16:9 resolution, use that. You may have to zoom out a bit for the proper look.</p>
					<button className="tesla-btn mx-auto text-[#333333]" onClick={handleIgnoreWarning}>Got It</button>
				</div>
			</div>
		: null}
		<BaseLayout handlePageChange={handleNavTabChange}/>
		{currentPage}
	</>
  )
}

export default App
