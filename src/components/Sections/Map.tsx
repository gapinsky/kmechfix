import { useEffect, useState } from 'react';

const Map = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const isAboveMd = width > 760;

	return (
		<section className='mt-10 flex flex-col items-center md:px-5 md:items-start md:flex-row  lg:px-36'>
			<div className='md:ml-5 px-5 mb-5 md:px-0 lg:ml-10  md:order-2 md:w-[35%] '>
				<p className='text-3xl mb-3 lg:text-5xl'>Obszar świadczenia usług</p>
				<p className='leading-relaxed lg:text-xl lg:leading-relaxed'>
					{isAboveMd ? 'Obok ' : 'Poniżej '}znajduje się mapa z zaznaczonym
					obszarem, w którym realizujemy nasze usługi. Jeśli Twoja lokalizacja
					znajduje się w zaznaczonym regionie, zapraszamy do kontaktu. W
					przypadku pytań dotyczących innych miejscowości, skontaktuj się z
					nami, aby omówić możliwości współpracy.
				</p>
			</div>
			<div className='rounded-md overflow-hidden w-full h-96 shadow-md  md:order-1 md:w-[65%]'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d300235.1909607306!2d15.796626067109184!3d53.99234805163276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xac02feca73c266a5%3A0x685f318770d62a04!2sKMTechFix!5e0!3m2!1spl!2spl!4v1730555165157!5m2!1spl!2spl'
					width='100%'
					height='100%'
					loading='lazy'></iframe>
			</div>
		</section>
	);
};

export default Map;
