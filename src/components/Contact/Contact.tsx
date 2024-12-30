import Form from './Form';
import {motion} from 'motion/react';
import { useInView} from 'framer-motion';
import { useRef } from 'react';
const Contact = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, {once: true, amount: 'some'})

	return (
		<section
			className='relative py-10 px-5 grid grid-cols-1 justify-items-center items-center overflow-x-clip gap-5 md:px-10 lg:grid-cols-5 xl:gap-10 xl:px-32' /* my-10 */
			id='contact'>
			<div className='absolute left-0 top-0 bg-radial-center  blur-3xl rounded-full w-[150%] h-[120%] -z-10'></div> 
			<div className=' lg:col-span-3'>
				<div ref={ref} className='text-2xl font-semibold md:text-5xl xl:text-6xl'>
					<motion.p initial={{y: "10vh", opacity: 0}} animate={{y: isInView ? 0 : "10vh", opacity: isInView ? 1 : 0}}  transition={{type: "ease-in", duration: 0.5}}  className='mb-2 md:mb-5 lg:mb-10'>Masz pytania?</motion.p>
					<motion.p initial={{y: "10vh", opacity: 0}} animate={{y: isInView ? 0 : "10vh", opacity: isInView ? 1 : 0}}  transition={{type: "ease-in", duration: 0.5, delay: 0.3}}  className='mb-2 md:mb-5 lg:mb-10'>Chcesz zamówić usługę?</motion.p>
					<motion.p  initial={{y: "10vh", opacity: 0}} animate={{y: isInView ? 0 : "10vh", opacity: isInView ? 1 : 0}}  transition={{type: "ease-in", duration: 0.5, delay: 0.6}} className='mb-2 md:mb-5 lg:mb-10'>
						Szukasz wsparcia w zakresie IT?
					</motion.p>
				</div>
				<motion.p initial={{y: "10vh", opacity: 0}} animate={{y: isInView ? 0 : "10vh", opacity: isInView ? 1 : 0}}  transition={{type: "ease-in", duration: 0.5, delay: 0.9}} className='text-lg md:text-2xl lg:text-2xl'>
					Nasz zespół ekspertów jest gotowy, aby odpowiedzieć na Twoje pytania i
					znaleźć najlepsze rozwiązania dla Twoich potrzeb. Wypełnij formularz i
					skontaktuj się z nami już teraz!
				</motion.p>
			</div>
			<Form/>
		</section>
	);
};

export default Contact;
