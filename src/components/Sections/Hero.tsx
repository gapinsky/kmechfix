import heroImg from '../../assets/img/hero.webp';
const Hero = () => {
	return (
		<section className='relative px-5 pt-16 flex flex-col justify-around items-center overflow-x-clip h-svh lg:px-32'>
			{/* <div className='absolute w-[400px] h-[400px] left-1/2 top-0 -translate-x-1/2 -z-10 rounded-full bg-radial-center'></div> */}

			<div className='top-16 absolute bg-radial-center  blur-3xl rounded-full w-[1000px] h-[400px] md:w-[1200px] md:h-[500px] lg:w-[3000px] lg:h-[1000px] lg:left-0'></div>
			<div className='relative flex flex-col justify-center items-center  z-10 md:px-10 lg:order-1 lg:flex-row '>
				<img
					src={heroImg}
					alt=''
					className=' max-w-[70%]  z-10  md:max-w-[50%]  lg:order-2 pointer-events-none lg:max-w-[40%]'
				/>
				<div className='z-10 px-2 lg:order-1'>
					<span className='mb-2 grid gap-1 font-semibold text-3xl  md:text-6xl md:gap-4 md:mb-8 lg:gap-5 lg:text-8xl'>
						<h2 className='text-nowrap'>Systemy alarmowe</h2>
						<h2>Monitoringi</h2>
						<h2>Domofony</h2>
					</span>
					<p className=' md:text-3xl md:mb-16 '>
						Urządzenia dopasowane do Twoich potrzeb. Profesjonalny montaż i
						konfiguracja. Pozwól nam zadbać o Twoje bezpieczeństwo.
					</p>
					<button className='  font-semibold bg-blue-500 text-white rounded-xl shadow-lg shadow-slate-300 text-2xl px-8 py-3 hidden lg:block'>
						Poznaj nas
					</button>
				</div>
			</div>
			<button className=' z-10  py-2 px-6 mx-auto text-xl  font-semibold bg-blue-500 text-white rounded-xl shadow-lg shadow-slate-300 md:text-3xl md:px-8 md:py-3  lg:hidden'>
				Poznaj nas
			</button>
		</section>
	);
};

export default Hero;
