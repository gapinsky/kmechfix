import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Hero from './components/Sections/Hero';
import Services from './components/Services/Services';
import Map from './components/Sections/Map';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import Footer from './components/Sections/Footer';
import CounterUpContainer from './components/About/CounterUpContainer';
function App() {
	return (
		<>
			<Nav />
			<Hero />
			<CounterUpContainer/>
			<About />
			<Services />
			<Map />
			<Faq />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
