import Form from './Form';

const Contact = () => {
	return (
		<section className='relative mt-20 px-5 grid grid-cols-1 gap-10 justify-items-center items-center overflow-x-clip lg:grid-cols-3 lg:px-36'>
			<div className='absolute left-0 top-0 bg-radial-center  blur-3xl rounded-full w-[150%] h-[120%] -z-10'></div>
			<div className=' lg:col-span-2'>
				<div className='text-2xl font-semibold md:text-5xl lg:text-6xl'>
					<p className='mb-2 md:mb-5 lg:mb-10'>Masz pytania?</p>
					<p className='mb-2 md:mb-5 lg:mb-10'>Chcesz zamówić usługę?</p>
					<p className='mb-2 md:mb-5 lg:mb-10'>
						Szukasz wsparcia w zakresie IT?
					</p>
				</div>
				<p className='text-lg md:text-2xl lg:text-3xl'>
					Nasz zespół ekspertów jest gotowy, aby odpowiedzieć na Twoje pytania i
					znaleźć najlepsze rozwiązania dla Twoich potrzeb. Wypełnij formularz i
					skontaktuj się z nami już teraz!
				</p>
			</div>
			<Form />
		</section>
	);
};

export default Contact;
