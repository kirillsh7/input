# Реализация кастомного компонента Input 

=========================================

* Параметры 

 variant="unstyled" | "filled" | "default"
 size="xs" | "sm" | "md" | "lg" | "xl"
 radius="xs" | "sm" | "md" | "lg" | "xl"		
 label= string
 withAsterisk= boolean
 description= string
 error= string
 placeholder= string
 leftSection= ReactNode
 rightSection= ReactNode

* Использование 

```javascript 

import { CustomInput } from './components/custom-input/CustomInput'
import { IconAt } from '@tabler/icons-react'

  <CustomInput type="email" label='Привет' description='проверка' placeholder='проверка' leftSection={icon} rightSection={icon} />
