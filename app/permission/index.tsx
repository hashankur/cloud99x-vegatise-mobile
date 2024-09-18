import PhoneInput from 'components/forms/phone'
import { VButton } from 'components/ui/Button'
import { VText } from 'components/ui/Text'
import { router } from 'expo-router'
import { Image, YStack } from 'tamagui'
import permissionImage from '../../assets/images/permission.png'

export default function OtpRequestScreen() {
  return (
    <YStack flex={1} justifyContent='center' alignItems="center" gap="$5" px="$5" pt="$5" bg="white">
      <YStack gap="$15" w="100%">
        <YStack alignItems='center'>
          <VText type="h2" mb="$2" textAlign='center'>Get Started and begin earning rewards! </VText>
          <Image source={permissionImage} width={300} objectFit="contain" />
        </YStack>
        <VButton
          type="primary"
          onPress={() => {
            router.navigate('/permission/checkPermission')
          }}
        >
          Next
        </VButton>
      </YStack>
    </YStack>
  )
}
