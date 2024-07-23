import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Interests from './components/interests';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<About />
			<Interests />
			<Footer />
		</div>
	);
}

export default App;
