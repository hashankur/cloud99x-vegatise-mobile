import PhoneInput from 'components/forms/phone'
import { VButton } from 'components/ui/Button'
import { VText } from 'components/ui/Text'
import { router } from 'expo-router'
import { Image, YStack } from 'tamagui'
import otpImage from '../../assets/images/otp.png'

export default function OtpRequestScreen() {
  return (
    <YStack flex={1} alignItems="center" gap="$5" px="$5" pt="$5" bg="white">
      <Image source={otpImage} width={200} height={200} objectFit="contain" />
      <YStack gap="$5" w="100%">
        <YStack alignItems='center'>
          <VText type="h2" mb="$2">OTP Verification</VText>
          <VText w={220} textAlign='center'>We Will Send You A One Time Password On This Mobile Number</VText>
        </YStack>

        <YStack w="100%" gap="$2">
          <VText type="label">Phone Number</VText>
          <PhoneInput />
        </YStack>
        <VButton
          type="primary"
          onPress={() => {
            router.navigate('/create-account/otpEnter')
          }}
        >
          Next
        </VButton>
      </YStack>
    </YStack>
  )
}
