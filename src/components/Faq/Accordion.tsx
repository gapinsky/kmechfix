import { useState } from 'react';
import { GoTriangleDown, GoDotFill } from 'react-icons/go';

interface Props {
	title: string;
	description: string;
}

const Accordion = ({ title, description }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex flex-col h-fit w-[90svw] md:w-[80svw] lg:w-[35svw] border-2 border-slate-200 shadow-md rounded-lg'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='inline-flex items-center justify-between p-3   text-lg md:text-2xl '>
				<span className='inline-flex items-center'>
					<GoDotFill className='mr-3 text-2xl' />
					{title}
				</span>
				<GoTriangleDown className={`text-4xl   ${isOpen && 'rotate-180'} `} />
			</button>
			{isOpen && (
				<div className=' shadow-md  p-3 lg:text-xl'>{description}</div>
			)}
		</div>
	);
};

export default Accordion;
