import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layouts/Header';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './App.css';

const App = () => {
	return (
		<ThemeProvider>
			<Router>
				<Header />
				<Routes>
					<Route
						path='/'
						element={<ProfilePage />}
					/>
					<Route
						path='/about'
						element={<AboutPage />}
					/>
					<Route
						path='/contact'
						element={<ContactPage />}
					/>
				</Routes>
			</Router>
		</ThemeProvider>
	);
};

export default App;
