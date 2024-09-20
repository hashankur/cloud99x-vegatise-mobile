import { VInputCompound } from 'components/ui/Input'
import { Iconify } from 'react-native-iconify'

export function PasswordInput({ ...props }) {
  return (
    <VInputCompound>
      <VInputCompound.Button iconLeft disabled>
        <Iconify icon="uil:lock-alt" size={18} color="#5E6366" />
      </VInputCompound.Button>
      <VInputCompound.Input f={1} type="password" {...props} />
      <VInputCompound.Button iconRight>
        <Iconify icon="iconamoon:eye-off" size={18} color="#5E6366" />
      </VInputCompound.Button>
    </VInputCompound>
  )
}
