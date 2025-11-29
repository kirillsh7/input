import { CustomInput } from '../custom-input/CustomInput'
import { useState } from 'react'

export const SignIn = ({ onSubmit }) => {
	
	const [data, setData] = useState({ email: '', password: '' })
	const onChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		})
	}

	return (
		<form onSubmit={(e)=>onSubmit( e,data)}>
			<CustomInput type="email" label={'Почта'} name="email" value={data.email} onChange={onChange}/>
			<CustomInput type="password" label={'Пароль'} name="password" value={data.password} onChange={onChange}/>
			<button>Sign In</button>
		</form>
	)
}