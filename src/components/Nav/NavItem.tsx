interface Props {
	children: React.ReactNode;
	route: string;
}

const NavItem = ({ children, route }: Props) => {
	return (
		<li className='lg:mx-4'>
			<a
				href={`#${route}`}
				className='block text-center font-semibold border-b-2 border-transparent w-screen text-xl py-4  md:w-fit md:px-5 hover:border-blue-500 hover:text-blue-500 lg:text-3xl lg:border-b-4'>
				{children}
			</a>
		</li>
	);
};

export default NavItem;
