import NavItem from './NavItem';

interface Props {
	customStyles: string;
}

const NavList = ({ customStyles }: Props) => {
	return (
		<ul
			className={`${customStyles} fixed flex flex-col left-0 top-14 z-10  md:flex-row md:relative md:inset-auto`}>
			<NavItem>Start</NavItem>
			<NavItem>O nas</NavItem>
			<NavItem>Usługi</NavItem>
			<NavItem>Kontakt</NavItem>
		</ul>
	);
};

export default NavList;
