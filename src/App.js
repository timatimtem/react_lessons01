import './App.css';
import Header from './components/header'
import Profile from './components/profile';
import Sidebar from './components/sidebar';

function App() {
	return (
		<div className="app-wrapper">

			<Header />
			<Sidebar />

			<Profile />

		</div>
	);
}


export default App;
