import CounterUpContainer from './CounterUpContainer';
import aboutImg from '../../assets/img/about.webp';
const About = () => {
	return (
		<section className=' flex flex-col overflow-x-clip  lg:px-20 '>
			<CounterUpContainer />
			<div className=' flex flex-col items-center lg:flex-row'>
				<div className='relative flex justify-center items-center py-5 md:max-w-[70%] lg:flex-1'>
					<div className='absolute w-[200%] h-[100%] bg-radial-center  blur-3xl rounded-full z-0 lg:h-[150%]'></div>
					<img src={aboutImg} alt='' className='z-10' />
				</div>
				<div className='z-10 p-5 grid grid-cols-1 md:grid-cols-2 gap-5 lg:flex-1 '>
					<h2 className='py-5 text-center text-3xl  md:col-span-2 md:text-5xl lg:text-start '>
						Poznaj naszą firmę
					</h2>
					<p className='text-xl  bg-slate-100 rounded-lg  p-5 lg:col-span-2'>
						KMtechFix to firma z wieloletnim doświadczeniem w montażu,
						konfiguracji i naprawie urządzeń elektrycznych. Kompleksowo
						obsługujemy duże firmy jak i mniejsze przedsiębiorstwa.
					</p>
					<p className=' text-xl bg-slate-100 rounded-lg  p-5 lg:col-span-2'>
						Specjalizujemy się w serwisie:
						<ul className='list-disc list-inside font-semibold'>
							<li>monitoringów,</li>
							<li>systemów alarmowych,</li>
							<li>domofonów,</li>
							<li>komputerów,</li>
							<li>smartfonów i tabletów,</li>
							<li>sieci komputerowych.</li>
						</ul>
					</p>
					<p className='px-5 md:col-span-2 text-xl '>
						Dla nas nie ma rzeczy niemożliwych. Zaufaj profesjonalistom i zadbaj
						o bezpieczeństwo Twoje i Twojego sprzętu.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
