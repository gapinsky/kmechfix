import ServicesCardGroup from './ServicesCardGroup';
import { motion } from 'motion/react';
import { useInView } from 'framer-motion';
import {useRef} from 'react';
const Services = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, {once: true, amount: 'some'})
 	return (
		<section
			className='relative flex flex-col items-center justify-center my-10 px-2 overflow-x-clip min-h-screen ' /* lg:py-10*/
			id='services'>
			<div className='absolute bg-radial-center  blur-3xl rounded-full w-[150%] h-full xl:h-[80%] -z-10'></div>
			<motion.h2 ref={ref} initial={{y: '10vh', opacity: 0}} animate={{y: isInView ? 0 : "10vh", opacity: isInView ? 1 : 0}} transition={{duration: 0.5, delay: 0.3}} className='text-center text-3xl py-3 mb-3  md:text-5xl md:mb-10 '>
				Kompleksowe Rozwiązania IT dla twojej Firmy
			</motion.h2>
			<ServicesCardGroup />
		</section>
	);
};

export default Services;
