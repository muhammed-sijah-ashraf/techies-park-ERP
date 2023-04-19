import { Route, Routes } from 'react-router-dom';
import './App.css';

// Components
import Login from './components/screens/Login';
import HomeDashboard from './components/screens/dashboard/HomeDashboard';
import LandingpageHome from './components/screens/landing-page/home-page/LandingPageHome';
import Amenities from './components/screens/landing-page/home-page/Amenities';
import Events from './components/screens/landing-page/home-page/Events';
import Revenue from './components/screens/landing-page/home-page/Revenue';
import EventListHome from './components/screens/landing-page/event-list-page/EventListHome';
import EventSingleHome from './components/screens/landing-page/event-single-page/EventSingleHome';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/dashboard" element={<HomeDashboard />} />
				<Route path="/landing-page" element={<LandingpageHome />} />
				<Route path="/amenities" element={<Amenities />} />
				<Route path="/events" element={<Events />} />
				<Route path="/event-list-page" element={<EventListHome />} />
				<Route path="/event-single-page" element={<EventSingleHome />} />
				<Route path="/revenue" element={<Revenue />} />
			</Routes>
		</>
	);
}

export default App;