import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
	email: Yup.string()
		.email('Insira um email válido')
		.required('O campo email é obrigatório'),
	password: Yup.string().required('O campo senha é obrigatório'),
});

export default function SignIn() {
	function handleSubmit(data) {
		console.log(data);
	}

	return (
		<>
			<img src={logo} alt="GoBarber" />

			<Form schema={schema} onSubmit={handleSubmit}>
				<Input name="email" type="email" placeholder="Seu email" />
				<Input
					name="password"
					type="password"
					placeholder="Sua senha"
				/>

				<button type="submit">Acessar</button>

				<Link to="/register">Criar conta gratuita</Link>
			</Form>
		</>
	);
}
