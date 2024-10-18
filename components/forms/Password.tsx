import { VInputCompound } from 'components/ui/Input'
import { useState } from 'react'
import { Iconify } from 'react-native-iconify'

export function PasswordInput({ ...props }) {
  const [showPassword, setShowPassword] = useState(true) // Hide password by default

  return (
    <VInputCompound>
      <VInputCompound.Button iconLeft disabled>
        <Iconify icon="uil:lock-alt" size={18} color="#5E6366" />
      </VInputCompound.Button>
      <VInputCompound.Input type="password" secureTextEntry={showPassword} {...props} />
      <VInputCompound.Button iconRight onPress={() => setShowPassword(!showPassword)}>
        <Iconify icon="iconamoon:eye-off" size={18} color="#5E6366" />
      </VInputCompound.Button>
    </VInputCompound>
  )
}
