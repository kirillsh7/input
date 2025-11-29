
import { useState } from 'react'
import { SignIn } from './components/sign-in/SignIn'
import { SignUp } from './components/sign-up/SignUp'
import './App.css'

function App() {  
  const [data, setData] = useState({  })
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const onSubmit = (e,data) => {
    e.preventDefault()
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
      <SignIn onSubmit={onSubmit}/>
      <SignUp onSubmit={onSubmit}/>
     
    </div>
  </>
  )
}

export default App
