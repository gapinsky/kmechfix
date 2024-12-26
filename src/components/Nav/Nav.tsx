import { TfiMenu } from 'react-icons/tfi';
import { RiCloseLargeLine } from 'react-icons/ri';
import { TbDeviceCctv } from 'react-icons/tb';
import { useEffect, useState } from 'react';
import NavList from './NavList';

const Nav = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isScrolled]);

	const handleNav = () => {
		setIsNavOpen(false);
	};

	return (
		<header
			className={`px-3 py-2 fixed flex w-full justify-between  items-center z-20 md:px-5 lg:px-20 ${
				isScrolled && 'bg-white shadow-md '
			}  ${isNavOpen && 'bg-white shadow-md'}`}>
			<a
				href='start'
				className='inline-flex text-3xl items-center tracking-tighter lg:text-4xl'>
				<TbDeviceCctv />
				<h1 className=' font-bold  tracking-tighter uppercase'>kmtech<span className='text-blue-500'>fix</span></h1>
			</a>
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
				<NavList handleNav={handleNav} customStyles=' hidden md:flex' />
			</nav>
			{isNavOpen && (

				<NavList customStyles='bg-white md:hidden' handleNav={handleNav} />
				
			)}
		</header>
	);
};

export default Nav;
