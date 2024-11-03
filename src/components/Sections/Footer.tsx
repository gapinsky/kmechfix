import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdMail, IoMdPin } from 'react-icons/io';
const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className=' mt-20 py-3 text-lg grid grid-cols-1 gap-10  px-5 md:grid-cols-2 lg:grid-cols-3 '>
			<div className=' lg:place-self-start '>
				<p className='mb-2'>NIP: 623-325-35-32</p>
				<p className='mb-2'>REGON: 231-425-647</p>
				<p>Numer konta: 83 1140 2004 0000 3302 8526 9999</p>
			</div>
			<div className='flex flex-col justify-center items-center md:order-3 md:col-span-2 lg:col-span-1 lg:-order-none '>
				<p>KMTECHFIX &copy; {`${year}`}</p>
				<p className='mb-2'>Wszystkie prawa zastrzeżone</p>
				<p className='text-sm'>Designed & created: @gapinsky</p>
			</div>
			<div className='max-w-64  md:place-self-end lg:place-self-end  '>
				<p className='flex justify-start items-center mb-2'>
					<BsFillTelephoneFill className='text-xl ml-1 mr-1' />
					+48 737 174 535
				</p>
				<p className='flex justify-start items-center mb-2'>
					<IoMdMail className='text-xl ml-1 mr-2 ' />
					kacper@KMTech-Fix.pl
				</p>
				<p className='flex justify-start items-start'>
					<IoMdPin className='text-4xl  mr-1' />
					Białogard, Karlino, Koszalin, Kołobrzeg
				</p>
			</div>
		</footer>
	);
};

export default Footer;
