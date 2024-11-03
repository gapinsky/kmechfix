import heroImg from '../../assets/img/hero.webp';
const Hero = () => {
	return (
		<section
			className=' px-5 pt-16 flex flex-col justify-around items-center overflow-x-clip h-svh lg:px-20'
			id='start'>
			<div className=' flex flex-col justify-center  items-center  z-10 md:px-10 lg:order-1 lg:flex-row '>
				<div className='relative flex justify-center items-center h-full w-full lg:order-2  '>
					<div className='absolute bg-radial-center  blur-3xl rounded-full w-[300%] h-[120%] '></div>
					<img
						src={heroImg}
						alt='obrazek sekcji tytułowej, dom z systemem monitoringu'
						className=' max-w-[70%]  z-10   pointer-events-none lg:max-w-[100%] lg:w-full'
					/>
				</div>
				<div className='z-10 px-2 lg:order-1'>
					<span className='mb-2 grid gap-1  text-3xl  md:text-6xl md:gap-4 md:mb-8 lg:gap-5 lg:text-8xl'>
						<h2 className='text-nowrap'>Systemy alarmowe</h2>
						<h2>Monitoringi</h2>
						<h2>Domofony</h2>
					</span>
					<p className=' md:text-3xl md:mb-16 '>
						Urządzenia dopasowane do Twoich potrzeb. Profesjonalny montaż i
						konfiguracja. Pozwól nam zadbać o Twoje bezpieczeństwo.
					</p>
					<a
						href='#about'
						className='w-fit bg-blue-500 text-white rounded-lg text-2xl px-8 py-3 hidden shadow-md shadow-slate-400 lg:block hover:bg-blue-400'>
						Poznaj nas
					</a>
				</div>
			</div>
			<a
				href='#about'
				className='w-fit z-10  py-2 px-6 mx-auto text-xl  bg-blue-500 text-white rounded-md shadow-md shadow-slate-400  md:text-2xl md:px-8 md:py-3  lg:hidden hover:bg-blue-400'>
				Poznaj nas
			</a>
		</section>
	);
};

export default Hero;
