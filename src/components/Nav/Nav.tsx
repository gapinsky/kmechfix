import { TfiMenu } from 'react-icons/tfi';
import { RiCloseLargeLine } from 'react-icons/ri';
import { TbDeviceCctv } from 'react-icons/tb';
import { useState } from 'react';
import NavList from './NavList';

const Nav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	return (
		<header className='px-3 py-2 fixed flex w-full justify-between items-center z-20  bg-transparent md:px-5 lg:px-20'>
			<span className='inline-flex text-3xl items-center tracking-tighter lg:text-4xl'>
				<TbDeviceCctv />
				<h1 className='uppercase font-bold '>kmtechfix</h1>
			</span>
			<nav>
				<button
					onClick={() => setIsNavOpen(!isNavOpen)}
					className=' p-2 md:hidden'>
					{isNavOpen ? (
						<RiCloseLargeLine className='text-2xl' />
					) : (
						<TfiMenu className='text-2xl' />
					)}
				</button>
				<NavList customStyles=' hidden md:flex' />
			</nav>
			{isNavOpen && <NavList customStyles='bg-white md:hidden' />}
		</header>
	);
};

export default Nav;
