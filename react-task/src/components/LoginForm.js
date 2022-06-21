import { useState, useEffect } from "react";

const LoginForm = ({ onSubmit }) => {
	const [submitDisabled, setSubmitDisabled] = useState(true);
	const [state, setState] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		if (state.username && state.password) {
			setSubmitDisabled(false);
		} else {
			setSubmitDisabled(true);
		}
	}, [state]);

	return (
		<div>
			<h2>Login Form</h2>
			<form>
				<div>
					<label htmlFor="username-input">Username</label>
					<input
						type="text"
						name="username"
						id="username-input"
						value={state.username}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="password-input">Password</label>
					<input
						type="password"
						name="password"
						id="password-input"
						value={state.password}
						onChange={handleChange}
					/>
				</div>
				<button
					type="submit"
					id="login-button"
					disabled={submitDisabled}
					onClick={(e) => {
						e.preventDefault();
						onSubmit(state.username, state.password);
					}}
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
