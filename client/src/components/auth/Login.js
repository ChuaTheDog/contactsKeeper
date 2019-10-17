import React, { useState } from 'react';

const Login = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const { name, email, password, password2 } = user;

	const onChange = e =>
		setUser({
			...user,
			[e.target.name]: e.target.value
		});

	const onSubmit = e => {
		e.preventDefault();
		console.log('register submit');
	};

	return (
		<div className='form-container'>
			<h1>
				Account <span className='text-primary'>Login</span>
			</h1>

			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						id=''
						value={email}
						onChange={onchange}
					/>
				</div>

				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id=''
						value={password}
						onChange={onchange}
					/>
				</div>

				<button type='submit' className='btn btn-primary btn-block'>
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
