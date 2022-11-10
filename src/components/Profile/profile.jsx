
import React from 'react';
import Post from "./Post/Post";

const Profile = () => {
	return (
		<div className='content'>
			<div className="content__wallpaper">
				<img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg" alt="" />
			</div>

			<div className="content__profile">
				<div className="profile__avatar">
					<img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg" alt="" />
				</div>
				<div className="profile__info">
					<h2 className="profile__username">Tymur T.</h2>

					<ul className="profile__info-list">

						<li>Date of Birth: 10 march</li>
						<li>City: Kyiv</li>
						<li>Education: KPI</li>
						<li>Web Site: github.com</li>
					</ul>
				</div>
			</div>


			<div className="content__post-input">
				<h3>My Posts</h3>

				<form action="">

					<input type="text" />
					<button>Send</button>
				</form>
			</div>

			<Post likes="50"
				content="first post"
				date="11.11.2022"
				avatar='https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg'
				username='tymur'

			/>
			<Post likes="1420"
				content="Post about my interesting life! Read it now"
				date="1.11.2022"
				avatar='https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg'
				username='tymur'

			/>
		</div>
	)
}

export default Profile;