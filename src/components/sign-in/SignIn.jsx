import { CustomInput } from '../custom-input/CustomInput'

export const SignIn = ({ onSubmit }) => {
	return (
		<form onSubmit={onSubmit}>
			<CustomInput type="email" />
			<CustomInput type="password" />
			<button>Sign In</button>
		</form>
	)
}