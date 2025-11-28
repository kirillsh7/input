
import './App.css'
import { CustomInput } from './components/custom-input/CustomInput'
import { IconAt } from '@tabler/icons-react'

function App() {

  const icon = <IconAt size={16} />

  return (<>
    <div style={{
      display: 'flex',
      margin: '0 auto',
      maxWidth: '1200px',
      marginTop: '100px'

    }}>
      <CustomInput type="email" label='Привет' description='проверка' placeholder='проверка' leftSection={icon} rightSection={icon} />
    </div>
  </>
  )
}

export default App
