import NavItem from './NavItem';

interface Props {
	customStyles: string;
	handleNav: () => void;
}

const NavList = ({ customStyles, handleNav }: Props) => {
	return (
		<ul
			className={`${customStyles} fixed flex flex-col left-0 top-14 z-10  md:flex-row md:relative md:inset-auto`}>
			<NavItem handleNav={handleNav} route='start'>
				Start
			</NavItem>
			<NavItem handleNav={handleNav} route='about'>
				O nas
			</NavItem>
			<NavItem handleNav={handleNav} route='services'>
				Usługi
			</NavItem>
			<NavItem handleNav={handleNav} route='contact'>
				Kontakt
			</NavItem>
		</ul>
	);
};

export default NavList;
