import { CustomInput } from '../common/custom-input/CustomInput'


export const SignIn = ({ onSubmit, onChange, data }) => {

	return (
		<form onSubmit={(event) => onSubmit(event, data)}>
			<CustomInput type="email" label={'Почта'} name="emailSignIn" value={data.emailSignIn} onChange={onChange} />
			<CustomInput type="password" label={'Пароль'} name="passwordSignIn" value={data.passwordSignIn} onChange={onChange} />
			<button>Sign In</button>
		</form>
	)
}