import React from "react";
import { NavLink } from "react-router-dom";
import s from './dialogs.module.css';


const DialogItem = (props) => {
	let activeStyle = {
		textDecoration: 'underline',
	}
	let path = '/dialogs/' + props.id;

	return (
		<div className={s.dialog}>
			<NavLink to={path} style={({ isActive }) =>
				isActive ? activeStyle : undefined
			}>
				{props.name}
			</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={s.messageItem}>{props.message}</div>

	);
}

class Dialogs extends React.Component {

render() {


	return (
		<div className={s.dialogs}>
			<div className="dialogs-items">
				<DialogItem name='Tem' id="1" />
				<DialogItem name='Tem2' id='2' />
				<DialogItem name='Tem3' id='3' />
				<DialogItem name='Tem4' id='4' />


			</div>
			<div className="messages">

				<div className="dialog">
					<Message message='Hello' />
					<Message message='hi' />
					<Message message='How are you?' />
				</div>

			</div>
		</div>
	);
}


}

export default Dialogs;