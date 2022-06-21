import LoginForm from "./components/LoginForm";

function App() {
	const onSubmit = (username, password) => {
		console.log({ username, password });
	};

	return (
		<div className="App">
			<LoginForm onSubmit={onSubmit} />
		</div>
	);
}

export default App;
