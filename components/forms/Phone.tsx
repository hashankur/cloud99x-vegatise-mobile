import { VInputCompound } from 'components/ui/Input'
import { Iconify } from 'react-native-iconify'
import { XStack, Select } from 'tamagui'

export default function PhoneInput() {
  return (
    <XStack gap="$2">
      <Select>
        <Select.Trigger
          width="$10"
          iconAfter={<Iconify icon="mdi:chevron-down" size={20} />}
          disabled
          alignSelf="center"
          justifyContent="center"
          backgroundColor="#EFF1F9"
        >
          <Iconify icon="twemoji:flag-sri-lanka" size={20} />
          <Select.Value placeholder="+94" fontSize={12} ml="$2" />
        </Select.Trigger>
      </Select>

      <VInputCompound f={1}>
        <VInputCompound.Input type="phone" placeholder="769016274" />
        <VInputCompound.Button iconRight backgroundColor="#c6eadd">
          <Iconify icon="mingcute:check-fill" size={14} color="green" />
        </VInputCompound.Button>
      </VInputCompound>
    </XStack>
  )
}
