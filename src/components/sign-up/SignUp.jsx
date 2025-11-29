import { CustomInput } from '../custom-input/CustomInput'
import { useState } from 'react'

export const SignUp = ({ onSubmit }) => {
	
	const [data, setData] = useState({ email: '', password: '', firstName: '', nickName: '', gender: '' , checkPassword: ''})
	const onChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		})
	}

	return (
		<form onSubmit={(e)=>onSubmit( e,data)}>
			<CustomInput  label={'Имя'} name="firstName" value={data.firstName} onChange={onChange}/>
			<CustomInput  label={'Ник'} name="nickName" value={data.nickName} onChange={onChange}/>
			<CustomInput type="email" label={'Почта'} name="email" value={data.email} onChange={onChange}/>
			<CustomInput type="radio" label={'Пол'} description={"Мужской"} name="gender" value={"male"} onChange={onChange}/>
			<CustomInput type="radio"  description={"Женский"} name="gender" value={"female"} onChange={onChange}/>
			<CustomInput type="password" label={'Пароль'} name="password" value={data.password} onChange={onChange}/>
			<CustomInput type="password" label={'Повторите Пароль'} name="checkPassword" value={data.checkPassword} onChange={onChange}/>
			<button>Sign Up</button>
		</form>
	)
}