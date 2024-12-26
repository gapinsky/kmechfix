import { motion } from 'motion/react';

interface Props {
	img: string;
	title: string;
	description: string;
}

const ServiceCard = ({ img, title, description }: Props) => {
	
	return (
		<motion.div initial={{scale: 0, opacity: 0}} whileInView={{scale: 0.95, opacity: 1}} viewport={{once: true}} transition={{type: "ease-out",duration: 0.6, repeat: 0}} whileHover={{scale: 1.05}} className='flex flex-col items-center rounded-lg   bg-white  bg-opacity-55 shadow-md overflow-hidden md:px-2 '> {/* p-5 */}
		<div className="w-full py-2 ">

			<img src={img} alt={title} className='mx-auto mt-2 max-w-24' />
		</div>
			<h3 className='text-2xl mt-2 text-center lg:text-2xl font-semibold'>{title}</h3>
			<p className='text-md pt-2 pb-4 px-4 md:text-lg lg:text-xl'>{description}</p>
		</motion.div>
	);
};

export default ServiceCard;
