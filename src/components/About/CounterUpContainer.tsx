import CounterUp from './CounterUp';

const CounterUpContainer = () => {
	return (
		<div className='grid grid-cols-1 gap-2  z-10 md:grid-cols-2 lg:grid-cols-4 '>
			<CounterUp number={100} sign='%' description='czegośtam' />
			<CounterUp number={350} sign='+' description='wykonanych zleceń' />
			<CounterUp number={100} sign='%' description='zadowolonych klientów' />
			<CounterUp number={5} sign='+' description='lat doświadczenia' />
		</div>
	);
};

export default CounterUpContainer;
