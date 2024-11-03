import ServicesCardGroup from './ServicesCardGroup';

const Services = () => {
	return (
		<section
			className='relative  flex flex-col justify-end items-center px-5 md:px-10  lg:px-20  '
			id='services'>
			<div className='absolute bg-radial-center  blur-3xl rounded-full w-[100%] h-[80%] -z-10'></div>
			<h2 className='text-center text-3xl py-3 mb-3  md:text-5xl '>
				Kompleksowe Rozwiązania IT dla twojej Firmy
			</h2>
			<p className='text-xl   mb-10 lg:px-28'>
				Świadczymy szeroki zakres usług IT, zapewniając wsparcie technologiczne
				na każdym etapie. Niezależnie od tego, czy potrzebujesz niezawodnej
				infrastruktury sieciowej, zaawansowanej ochrony danych, czy zdalnej
				obsługi technicznej - nasze rozwiązania są precyzyjnie dopasowane do
				Twoich potrzeb.
			</p>
			<ServicesCardGroup />
			<p className=' my-5 text-xl  mx-auto '>
				Wszystkie usługi wyceniamy indywidualnie jeśli chcesz uzyskać więcej
				szczegółów skontaktuj się z nami poprzez{' '}
				<a href='' className='text-blue-500 underline'>
					formularz.
				</a>
			</p>
		</section>
	);
};

export default Services;
