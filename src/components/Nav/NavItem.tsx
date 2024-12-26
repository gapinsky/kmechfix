import { motion } from "motion/react";

interface Props {
	children: React.ReactNode;
	route: string;
	handleNav: () => void;
}

const NavItem = ({ children, route, handleNav }: Props) => {
	return (
		<motion.li whileTap={{scale: 0.8}} className='lg:mx-4'>
			<a
				onClick={() => handleNav()}
				href={`#${route}`}
				className='block text-center font-semibold border-b-2 border-transparent w-screen text-xl py-4  md:w-fit md:px-5 hover:border-blue-500 hover:text-blue-500 lg:text-2xl lg:border-b-4'>
				{children}
			</a>
		</motion.li>
	);
};

export default NavItem;
