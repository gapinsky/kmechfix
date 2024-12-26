import ServiceCard from './ServiceCard';
import computer from '../../assets/icons/computer.webp';
import cctv from '../../assets/icons/security-camera.webp';
import intercom from '../../assets/icons/intercom.webp';
import mobiles from '../../assets/icons/smartphone.webp';
import router from '../../assets/icons/wifi.webp';
import itServices from '../../assets/icons/technical-support.webp';

const ServicesCardGroup = () => {


	return (
		<div>
		<div className='mb-5 grid grid-cols-1  gap-5 md:grid-cols-2 xl:grid-cols-3 lg:px-5 '>
			<ServiceCard
				img={computer}
				title='Komputery'
				description='Konfiguracja i serwis komputerów stacjonarnych oraz laptopów. Oferujemy diagnostykę, naprawę sprzętu oraz pomoc w optymalizacji systemów operacyjnych.'
				/>
			<ServiceCard
				img={cctv}
				title='Monitoring i systemy alarmowe'
				description='Montaż i konfiguracja systemów monitoringu (CCTV) oraz alarmów, zapewniających bezpieczeństwo obiektów. Oferujemy również serwis i wsparcie techniczne.'
				/>
			<ServiceCard
				img={intercom}
				title='Domofony'
				description='Instalacja i konfiguracja domofonów i wideodomofonów, umożliwiających bezpieczną komunikację z osobami przy drzwiach. Zapewniamy również serwis istniejących systemów.
				'
				/>
			<ServiceCard
				img={mobiles}
				title='Telefony i tablety'
				description='Naprawa i konfiguracja smartfonów oraz tabletów, w tym rozwiązywanie problemów z oprogramowaniem i sprzętem.'
			/>
			<ServiceCard
				img={router}
				title='Sieci komputerowe'
				description='Projektowanie, konfiguracja oraz serwis sieci komputerowych. Oferujemy także wsparcie w rozwiązywaniu problemów z siecią.'
				/>
			<ServiceCard
				img={itServices}
				title='Usługi informatyczne'
				description='Wsparcie w zakresie zarządzania oprogramowaniem, rozwiązywania problemów z systemami operacyjnymi oraz pomoc techniczną w codziennym użytkowaniu technologii.'
				/>
		</div>
			<p className='text-base text-center '>
				Wszystkie usługi wyceniamy indywidualnie jeśli chcesz uzyskać więcej
				szczegółów skontaktuj się z nami poprzez{' '}
				<a href='#contact' className='text-blue-500 underline'>
					formularz.
				</a>
			</p>
		</div>
	);
};

export default ServicesCardGroup;
