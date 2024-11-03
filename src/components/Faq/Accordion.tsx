import { useState } from 'react';
import { GoTriangleDown, GoDotFill } from 'react-icons/go';

const Accordion = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex flex-col h-fit w-[90svw] md:w-[80svw] lg:w-[35svw] border-2 border-slate-200 shadow-md rounded-lg'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='inline-flex items-center justify-between p-3   text-lg md:text-2xl lg:text-3xl'>
				<span className='inline-flex items-center'>
					<GoDotFill className='mr-3 text-2xl' />
					Ile kosztuje usługa?
				</span>
				<GoTriangleDown className={`text-4xl   ${isOpen && 'rotate-180'} `} />
			</button>
			{isOpen && (
				<div className=' shadow-md  p-3 lg:text-xl'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, culpa
					excepturi maiores corrupti quisquam cum dolor voluptas sapiente itaque
					harum.
				</div>
			)}
		</div>
	);
};

export default Accordion;
