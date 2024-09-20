import { Button, H4, Image, Input, Paragraph, XStack, YStack } from 'tamagui'
import otpImage from '../../assets/images/otp.png'
import { router } from 'expo-router'
import { VInput } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import { VButton } from 'components/ui/Button'

export default function LoginOtpScreen() {
  return (
    <YStack flex={1} alignItems="center" gap="$5" px="$5" pt="$5" bg="white">
      <Image source={otpImage} width={200} height={200} objectFit="contain" />
      <YStack gap="$5" w="100%">
        <YStack alignItems="center">
          <VText type="h2" mb="$2">
            OTP Verification
          </VText>
          <VText>An 4 Digit Code Has Been Sent To</VText>
          <VText>+94 769016274</VText>
        </YStack>

        <XStack gap="$3.5" justifyContent="center">
          <VInput type="otp" />
          <VInput type="otp" />
          <VInput type="otp" />
          <VInput type="otp" />
        </XStack>

        <VButton
          type="primary"
          onPress={() => {
            router.navigate('/login/otp')
          }}
        >
          Verify
        </VButton>
      </YStack>

      <VText mt="$5">
        <VText type="h4">Didn't Get Your OTP? </VText>
        <VText type="h4" textTransform="uppercase" color="#C23030">
          Resend It
        </VText>
      </VText>
    </YStack>
  )
}
