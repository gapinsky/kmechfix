import {motion} from 'motion/react';
import { useInView} from 'framer-motion';
import { useRef } from 'react';
import Accordion from './Accordion';

const Faq = () => {
	const ref = useRef(null)
const isInView = useInView(ref, {once: true, amount: 'some'})
	return (
		<section className='px-4 py-20 flex flex-col justify-center items-center '>  {/* mt-10 */}
			<motion.h4 ref={ref} initial={{y: "10vh", opacity: 0}} animate={{y: isInView ? 0 : "10vh", opacity: isInView ? 1 : 0}}  transition={{type: "ease-in", duration: 0.5}} className='mb-10 text-3xl lg:text-5xl'>
				Najczęściej zadawane pytania:
			</motion.h4>
			<div className=' grid grid-cols-1 gap-4 md:gap-8  xl:grid-cols-2'>
				<Accordion
					title='Ile kosztuje [...]?'
					description='Każde zlecenie jest inne i wyceniane indywidualnie. Wycenę wykonujemy po otrzymaniu większej ilości szczegółów. Zapraszamy do kontaktu.'
				/>
					<Accordion
						title='Czy mogę otrzymać fakturę?'
						description='Tak, jesteśmy zarejestrowaną firmą działającą zgodnie z prawem, dlatego bez problemu wystawiamy faktury za nasze usługi.'
					/>
				<Accordion
					title='Czy mogę skorzystać z usług będąc poza wyznaczonym obszarem?' 
					description='Tak, możesz. Skontaktuj się z nami przez formularz, aby uzyskać więcej informacji na temat szczegółów realizacji zlecenia w Twojej lokalizacji.'
				/>
				<Accordion
					title='Kiedy otrzymam odpowiedź na wysłaną wiadomość?'
					description='Odpowiedź zajmuje maksymalnie 24 godziny, choć najczęściej jest dużo szybsza.'
				/>
			</div>
		</section>
	);
};

export default Faq;
