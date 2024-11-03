import CounterUpContainer from './CounterUpContainer';
import aboutImg from '../../assets/img/about.webp';
const About = () => {
	return (
		<section
			className='pb-10 lg:py-20  flex flex-col overflow-x-clip  lg:px-20 '
			id='about'>
			<CounterUpContainer />
			<div className=' flex flex-col items-center lg:flex-row'>
				<div className='relative flex justify-center items-center py-5 md:max-w-[70%] lg:flex-1'>
					<div className='absolute w-[200%] h-[100%] bg-radial-center  blur-3xl rounded-full z-0 lg:h-[120%]'></div>
					<img src={aboutImg} alt='' className='z-10' />
				</div>
				<div className='z-10 px-5  grid grid-cols-1 gap-5 md:px-10  md:grid-cols-2  lg:flex-1 '>
					<h2 className='lg:py-5 text-center text-3xl  md:col-span-2 md:text-5xl lg:text-start '>
						Poznaj naszą firmę
					</h2>
					<p className='text-xl    lg:p-0 lg:col-span-2'>
						KMtechFix to firma z wieloletnim doświadczeniem w montażu,
						konfiguracji i naprawie urządzeń elektrycznych. Kompleksowo
						obsługujemy duże firmy jak i mniejsze przedsiębiorstwa.
					</p>
					<p className=' text-xl  lg:col-span-2 lg:text-2xl'>
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
					<p className=' md:col-span-2 text-xl lg:p-0'>
						Dla nas nie ma rzeczy niemożliwych. Zaufaj profesjonalistom i zadbaj
						o bezpieczeństwo Twoje i Twojego sprzętu.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
