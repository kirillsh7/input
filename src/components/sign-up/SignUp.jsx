import { CustomInput } from '../common/custom-input/CustomInput'

export const SignUp = ({ onSubmit, onChange, data }) => {


	return (
		<form onSubmit={(e) => onSubmit(e, data)}>
			<CustomInput label={'Имя'} name="firstName" value={data.firstName} onChange={onChange} />
			<CustomInput label={'Ник'} name="nickName" value={data.nickName} onChange={onChange} />
			<CustomInput type="email" label={'Почта'} name="emailSignUp" value={data.emailSignUp} onChange={onChange} />
			<CustomInput type="radio" label={'Пол'} description={"Мужской"} name="gender" value={"male"} onChange={onChange} />
			<CustomInput type="radio" description={"Женский"} name="gender" value={"female"} onChange={onChange} />
			<CustomInput type="password" label={'Пароль'} name="passwordSignUp" value={data.passwordSignUp} onChange={onChange} />
			<CustomInput type="password" label={'Повторите Пароль'} name="checkPassword" value={data.checkPassword} onChange={onChange} />
			<button>Sign Up</button>
		</form>
	)
}