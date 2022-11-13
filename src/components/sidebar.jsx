import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

	let activeStyle = {
		'textDecoration': 'underline',
	}


	return (
		<nav className='sidebar'>


			<NavLink
				to="/"
				className="sidebar__link"
				style={({ isActive }) =>
					isActive ? activeStyle : undefined
				}
			>
				Profile
			</NavLink>
			<NavLink
				to="dialogs"
				className="sidebar__link"
				style={({ isActive }) =>
					isActive ? activeStyle : undefined
				}
			>
				Messages
			</NavLink>
			<NavLink
				to="news"
				className="sidebar__link"
				style={({ isActive }) =>
					isActive ? activeStyle : undefined
				}
			>
				News
			</NavLink>
			<NavLink
				to="music"
				className="sidebar__link"
				style={({ isActive }) =>
					isActive ? activeStyle : undefined
				}
			>
				Music
			</NavLink>
			<NavLink
				to="settings"
				className="sidebar__link"
				style={({ isActive }) =>
					isActive ? activeStyle : undefined
				}
			>
				Settings
			</NavLink>
		</nav>
	)
}


export default Sidebar;