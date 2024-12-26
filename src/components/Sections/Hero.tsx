import heroImg from '../../assets/img/hero.webp';
import {motion} from 'motion/react';
const Hero = () => {
	const buttonVariants = {
		initial: {
			y: "100%",
			opacity: 0,
			scale: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			scale: 1,
			transition: {duration: 1, type: "spring", delay: 2},
			viewport: {once: true}
		},
		hover: {
			scale: 0.95,
			transition: {duration: 0.2, type: "spring"}
		},
		tap: {
			scale: 0.8,
			transition: {duration: 0.2, type: "spring"}
		}
	}

// type: "ease-out", duration: 10, repeat: Infinity, repeatType: "reverse"
// flex flex-col items-center justify-evenly section
	return (
		<section id='start' className='flex flex-col items-center justify-evenly min-h-screen overflow-x-clip xl:px-20'>
			
			<div className='flex flex-col items-center  xl:flex-row xl:items-stretch xl:p-10 '>


				<div className='relative xl:order-2 '>
					<motion.div initial={{y: "30%", scale: 0, opacity: 0}} animate={{y: 0, scale: 1.8, opacity: 1}} transition={{duration: 0.7, delay: 1.8}} className='absolute bg-radial-center  blur-3xl rounded-full -left-[70%] w-[250%] h-full -z-10'></motion.div>
					<motion.img initial={{y: "30%", scale: 0, opacity: 0}} animate={{y: 0, scale: 1, opacity: 1}} transition={{duration: 0.5, delay: 2, type: "spring"}} src={heroImg} alt="niebieski dom z systemem monitoringu" className='max-w-[90%] mx-auto object-cover pointer-events-none md:max-w-lg lg:max-w-screen-xs xl:order-2 xl:max-w-screen-sm'/>
				</div>
			
				
			
				<span  className='text-2xl sm2:text-3xl px-5 md:px-28 md:text-6xl lg:text-7xl xl:my-auto xl:text-8xl xl:px-0 '>
					<motion.p initial={{x: "100vw"}} animate={{x: 0}} transition={{duration: 1, ease: "easeInOut"}}  className=' md:mb-2 xl:mb-4 tracking-tight text-nowrap'>Systemy alarmowe</motion.p>
					<motion.p initial={{x: "100vw"}} animate={{x: 0}} transition={{duration: 1, delay: 0.3, ease: "easeInOut"}}  className=' md:mb-2 xl:mb-4 tracking-tight'>Monitoringi</motion.p>
					<motion.p initial={{x: "100vw"}} animate={{x: 0}} transition={{duration: 1, delay: 0.6, ease: "easeInOut"}}  className=' mb-2 md:mb-4 lg:mb-6 xl:mb-8 tracking-tight'>Domofony</motion.p>
					<motion.p initial={{x: "100vw"}} animate={{x: 0}} transition={{duration: 1, delay: 0.9, ease: "easeInOut"}} className=' text-sm sm2:text-base md:text-2xl lg:text-3xl'>Urządzenia dopasowane do Twoich potrzeb. Profesjonalny montaż i
					konfiguracja. Pozwól nam zadbać o Twoje bezpieczeństwo.</motion.p>
				</span>

			
			
			</div>
					<motion.a variants={buttonVariants} initial="initial" animate="animate" whileHover="hover" whileTap="tap" href="#about" className='w-fit text-sm mx-auto px-4 py-2 bg-blue-500 text-white rounded-xl shadow-xl shadow-blue-100  hover:bg-blue-400 md:text-2xl md:px-6 md:py-3 lg:text-3xl'>Poznaj nas</motion.a>
		</section>
	);
};

export default Hero;
