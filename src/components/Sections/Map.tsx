import {motion} from 'motion/react';
import { useInView} from 'framer-motion';
import { useRef } from 'react';

const Map = () => {
const ref = useRef(null)
const isInView = useInView(ref, {once: true, amount: 'some'})

return (
		<section className='flex flex-col items-center'>   		
		<motion.div ref={ref} initial={{y: "10vh", opacity: 0}} animate={{y: isInView ? 0 : "10vh", opacity: isInView ? 1 : 0}}  transition={{type: "ease-in", duration: 0.5}}>

				<h3 className='text-center text-3xl py-3 mb-3  md:text-5xl md:mb-5 '>Obszar świadczenia usług</h3>
				<p className='text-center mb-3 px-2 md:mb-10 md:text-xl lg:text-2xl'>
					Jeśli Twoja lokalizacja
					nie znajduje się w wyznaczonym obszarze, skontaktuj się z
					nami, aby omówić możliwości współpracy.
				</p>
		</motion.div>
					<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1e4ipvRTUB1jS35LpqhAPvQyNzSRBcM8&ehbc=2E312F&noprof=1" width="100%" height="100%" loading='lazy'  className=" min-h-[400px] xl:min-h-[600px] xl:max-w-[80%]"></iframe>
		</section>
	);
};

export default Map;
