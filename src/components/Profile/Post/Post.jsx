import React from 'react';
import s from './post.module.css'

const Post = (props) => {

	return (
		<div className={s.post}>
			<div className={s.post__author}>


				<div className={s.author__avatar}>
					<img src={props.avatar} alt="ava" />
				</div>
				<div className={s.author__username}>
					{props.username}
				</div>
			</div>
			<div className={s.post__content}>
				{props.content}
			</div>
			<div className={s.post__info}>
				<div className={s.post__like}>
					{props.likes} likes
				</div>
				<div className="post__date">
					{props.date}

				</div>

			</div>
		</div>
	)
}



export default Post;