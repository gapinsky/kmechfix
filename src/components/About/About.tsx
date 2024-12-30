import aboutImg from '../../assets/img/about.webp';
import {motion} from 'motion/react';
import { useInView} from 'framer-motion';
import { useRef } from 'react';
const About = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, {once: true, amount: 'some'})

	return (
		<section className='relative min-h-screen flex flex-col items-center justify-evenly overflow-x-clip xl:flex xl:flex-row xl:items-stretch'  id="about">
			
			<div className='relative  flex items-center'>
				<motion.div initial={{scale: 0, opacity: 0}} animate={{scale: isInView ? 0.9 : 0, opacity: isInView ? 1 : 0 }} transition={{duration: 0.5}} className='absolute w-[250%] -left-[70%] h-full bg-radial-center  blur-3xl rounded-full -z-10 '></motion.div>
				<motion.img ref={ref} initial={{scale: 0, opacity: 0}} animate={{scale: isInView ? 0.9 : 0, opacity: isInView ? 1 : 0 }} transition={{duration: 0.5, delay: 0.3}} src={aboutImg} alt="serwisant naprawiający urządzenia" className='max-w-80 md:max-w-xl lg:max-w-3xl xl:max-w-4xl'/>
			</div>
			<div className=' px-5 md:px-10 flex flex-col justify-evenly xl:flex-col xl:justify-center '>
				<motion.div initial={{y: "10vh", opacity: 0}} animate={{y: isInView ? 0 : "10vh", opacity: isInView ? 1 : 0}}  transition={{type: "ease-in", duration: 0.5}} className='mb-4 md:mb-12  '>
				<h2 className='text-2xl mb-2  md:text-3xl md:mb-2 lg:text-5xl'>O nas</h2>
				<p className='md:text-xl lg:text-2xl xl:max-w-[800px]'>
					KMtechFix to firma z wieloletnim doświadczeniem w montażu,
					konfiguracji i naprawie urządzeń elektrycznych. Kompleksowo
					obsługujemy duże firmy jak i mniejsze przedsiębiorstwa.
					Dla nas nie ma rzeczy niemożliwych. Zaufaj profesjonalistom i zadbaj
					o bezpieczeństwo Twoje i Twojego sprzętu.
				</p>
				</motion.div>
				<motion.div initial={{y: "10vh", opacity: 0}} animate={{y: isInView ? 0 : "10vh", opacity: isInView ? 1 : 0}} transition={{type: 'easeIn', duration: 0.5, delay: 0.3}} >
				<h3 className='text-2xl  mb-2  md:text-3xl md:mb-2 lg:text-5xl '>Specjalizujemy się w serwisie:</h3>
				<ul className='text-base list-disc list-inside md:text-xl lg:text-2xl'>
					<li>monitoringów,</li>
					<li>systemów alarmowych,</li>
					<li>domofonów,</li>
					<li>komputerów,</li>
					<li>smartfonów i tabletów,</li>
					<li>sieci komputerowych.</li>
				</ul>
				</motion.div>
			</div>
			
		</section>
	);
};

export default About;
