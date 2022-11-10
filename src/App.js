import React from 'react';
import './App.css';
import Dialog from './components/Dialogs/Dialog';
import Header from './components/Header/header'
import Profile from './components/Profile/profile';
import Sidebar from './components/sidebar';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import News from 'components/News/News';
import Music from 'components/Music/Music';
import Settings from 'components/Settings/Settings';

function App() {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Sidebar />
				<div className="app-wrapper-content">
					<Routes>
						<Route path='profile' element={<Profile />} />

						<Route path='dialogs' element={<Dialog />} />

						<Route path='news' element={<News />} />
						<Route path='music' element={<Music />} />
						<Route path='settings' element={<Settings />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}


export default App;
