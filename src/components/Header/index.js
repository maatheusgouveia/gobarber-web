import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
	const { name, avatar } = useSelector(state => state.user.profile);

	return (
		<Container>
			<Content>
				<nav>
					<img src={logo} alt="GoBarber" />
					<Link to="/dashboard">DASHBOARD</Link>
				</nav>

				<aside>
					<Notifications />

					<Profile>
						<div>
							<strong>{name}</strong>
							<Link to="/profile">Meu perfil</Link>
						</div>

						<img
							src={
								avatar.url ||
								'https://api.adorable.io/avatars/50/abott@adorable.png'
							}
							alt="Matheus Gouveia"
						/>
					</Profile>
				</aside>
			</Content>
		</Container>
	);
}
