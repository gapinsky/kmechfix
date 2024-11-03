interface Props {
	img: string;
	title: string;
	description: string;
}

const ServiceCard = ({ img, title, description }: Props) => {
	return (
		<div className='flex flex-col items-center justify-start rounded-lg p-5  bg-white  bg-opacity-55 shadow-md'>
			<img src={img} alt='' className='mb-2' />
			<h3 className='text-2xl mb-3 text-center  lg:text-3xl'>{title}</h3>
			<p className='text-lg lg:px-3'>{description}</p>
		</div>
	);
};

export default ServiceCard;
