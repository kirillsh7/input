import { useState } from 'react'
import { SignIn } from './components/sign-in/SignIn'
import { SignUp } from './components/sign-up/SignUp'
import './App.css'

function App() {
  const [data, setData] = useState({
    emailSignIn: '',
    passwordSignIn: '',
    firstName: '',
    nickName: '',
    emailSignUp: '',
    gender: '',
    passwordSignUp: '',
    checkPassword: ''
  })
  const onChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const onSubmit = (event, data) => {
    event.preventDefault()
    console.log(data)
  }

  return (<>
    <div style={{
      display: 'flex',
      margin: '0 auto',
      maxWidth: '1200px',
      marginTop: '100px',
      gap: '20px'

    }}>
      <SignIn onSubmit={onSubmit} onChange={onChange} data={data} />
      <SignUp onSubmit={onSubmit} onChange={onChange} data={data} />

    </div>
  </>
  )
}

export default App
