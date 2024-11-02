import Accordion from './Accordion';

const Faq = () => {
	return (
		<section className='px-5 mt-10 flex flex-col justify-center items-center '>
			<h4 className='mb-10 text-3xl lg:text-5xl'>
				Najczęściej zadawane pytania:
			</h4>
			<div className=' grid grid-cols-1 gap-4 md:gap-8  lg:grid-cols-2'>
				<Accordion />
				<Accordion />
				<Accordion />
				<Accordion />
			</div>
		</section>
	);
};

export default Faq;
