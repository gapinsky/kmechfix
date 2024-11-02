import ServicesCardGroup from './ServicesCardGroup';

const Services = () => {
	return (
		<section className='relative pt-10 flex flex-col px-5 md:px-10  lg:px-20'>
			<h2 className='text-center text-3xl py-3 mb-3  md:text-5xl '>
				Kompleksowe Rozwiązania IT dla twojej Firmy
			</h2>
			<p className='text-xl pb-10 my-5 lg:px-36'>
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
