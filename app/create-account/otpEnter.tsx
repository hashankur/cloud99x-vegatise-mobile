import { XStack, YStack } from 'tamagui'
import { router } from 'expo-router'
import { VInput } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import { VButton } from 'components/ui/Button'

export default function OtpEnterScreen() {
  return (
    <YStack flex={1} alignItems="center" gap="$10" px="$5" pt="$5" bg="white">
      <VText type="h2" mb="$2">
        OTP Verification
      </VText>
      <VText type="h2" w={300} fontWeight={500} textAlign="center">
        Enter The 4 Digits Number Sent To Your Mobile Number
      </VText>

      <YStack alignItems="center">
        <XStack gap="$3.5" justifyContent="center">
          <VInput type="otp" />
          <VInput type="otp" />
          <VInput type="otp" />
          <VInput type="otp" />
        </XStack>

        <VText mt="$6">
          <VText type="h4">Didn't Get Your OTP? </VText>
          <VText type="h4" textTransform="uppercase" color="#C23030">
            Resend It
          </VText>
        </VText>
      </YStack>

      <VButton
        type="primary"
        onPress={() => {
          router.navigate('/create-account/otpVerify')
        }}
      >
        Verify
      </VButton>
    </YStack>
  )
}
