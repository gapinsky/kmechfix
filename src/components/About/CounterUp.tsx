import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface Props {
	number: number;
	sign: string;
	description: string;
}

const CounterUp = ({ number, sign, description }: Props) => {
	const [counted, setCounted] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0.1,
	});

	return (
		<div className=' flex flex-col justify-center items-center py-5 '>
			<span className='text-3xl md:text-5xl md:mb-2' ref={ref}>
				{inView && !counted && (
					<CountUp
						start={0}
						end={number}
						duration={3}
						delay={0}
						onEnd={() => setCounted(true)}
					/>
				)}
				{inView && counted && <span>{number}</span>}
				{sign}
			</span>

			<p className='text-lg md:text-xl'>{description}</p>
		</div>
	);
};

export default CounterUp;
