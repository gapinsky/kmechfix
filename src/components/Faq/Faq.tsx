import Accordion from './Accordion';

const Faq = () => {
	return (
		<section className='px-5 mt-10 flex flex-col justify-center items-center '>
			<h4 className='mb-10 text-2xl lg:text-4xl'>
				Najczęściej zadawane pytania:
			</h4>
			<div className=' grid grid-cols-1 gap-4 md:gap-8  lg:grid-cols-2'>
				<Accordion
					title='Ile kosztuję usługa?'
					description='lorem ewgd her fvdfgh rwefg wefn sdfl nlknf dsf nklsfe wf ewf wfndsfj sdf '
				/>
				<Accordion
					title='Ile kosztuję usługa?'
					description='lorem ewgd her fvdfgh rwefg wefn sdfl nlknf dsf nklsf'
				/>
				<Accordion
					title='Ile kosztuję usługa?'
					description='lorem ewgd her fvdfgh  '
				/>
				<Accordion
					title='Ile kosztuję usługa?'
					description='lorem ewgd her fvdfgh rwefg wefn sdfl nlknf dsf nklsfe wf ewf wfndsfj sdf fsdffffffffff'
				/>
			</div>
		</section>
	);
};

export default Faq;
