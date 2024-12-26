import { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { BsDot } from "react-icons/bs";
import {motion} from 'motion/react'
interface Props {
	title: string;
	description: string;
}

const Accordion = ({ title, description }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div initial={{y: "10vh", opacity: 0}} whileInView={{y: 0, opacity: 1}} viewport={{once: true}} transition={{type: "ease-out", duration: 0.6, repeat: 0, delay: 0.3}} className='overflow-hidden flex flex-col h-fit md:w-[80svw] xl:w-[35svw] max-w-[600px]  border-2 border-slate-200 shadow-md rounded-lg'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex text-start justify-between items-center p-3'>
				<span className='flex items-center text-base font-semibold  md:text-xl'>
					<div>
					<BsDot className='text-5xl' />
					</div>
					{title}
				</span>
				<motion.div initial={{rotate: 0}} animate={{rotate: isOpen ? 180 : 0}} transition={{type: "ease-out", duration: 0.4}}>
					<GoTriangleDown className={`text-3xl`} />
				</motion.div>
			</button>
			{isOpen && (
				<motion.div initial={{height: 0}} animate={{ height: isOpen ? 'auto' : 0}} transition={{duration: 0.3, type: "ease-in"}} className='shadow-md  p-3 md:text-xl'>
					<p>
					{description}
					</p>
					</motion.div>
			)}
		</motion.div>
	);
};

export default Accordion;
