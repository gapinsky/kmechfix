import CountUp from 'react-countup';

interface Props {
	number: number;
	sign: string;
	description: string;
}

const CounterUp = ({ number, sign, description }: Props) => {
	return (
		<div className=' flex flex-col justify-center items-center py-5'>
			<span className='text-3xl md:text-5xl md:mb-2'>
				<CountUp start={0} end={number} delay={0} duration={2} />
				{sign}
			</span>

			<p className='text-lg md:text-xl'>{description}</p>
		</div>
	);
};

export default CounterUp;
