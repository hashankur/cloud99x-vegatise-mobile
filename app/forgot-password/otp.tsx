import { Button, H4, H5, Image, Input, Paragraph, XStack, YStack } from 'tamagui'
import otpImage from '../../assets/images/otp2.png'
import { Link, router } from 'expo-router'
import { VText } from 'components/ui/Text'
import { VButton } from 'components/ui/Button'
import { VInput } from 'components/ui/Input'

export default function ForgotPasswordOtpScreen() {
  return (
    <YStack flex={1} alignItems="center" gap="$5" px="$5" pt="$5" bg="white">
      <VText type="h2">OTP Verification</VText>
      <Image source={otpImage} width={300} height={300} objectFit="contain" />

      <YStack gap="$3.5">
        <YStack>
          <VText type="h2" alignSelf="flex-start">
            Enter OTP
          </VText>
          <VText w="100%" fontWeight={600} color="#575757">
            An 4 digit code has been sent to your email
          </VText>
        </YStack>

        <XStack gap="$3.5" justifyContent="center">
          <VInput type="otp" />
          <VInput type="otp" />
          <VInput type="otp" />
          <VInput type="otp" />
        </XStack>

        <VText alignSelf='center'>
          <VText>You should receive the OTP in </VText>
          <VText fontWeight={600} color="#D33A3A">
            30 seconds
          </VText>
        </VText>
      </YStack>

      <VButton
        type="primary"
        onPress={() => {
          router.navigate('/forgot-password/new-password')
        }}
      >
        Verify
      </VButton>

      <VText>
        <VText>Don't Have An Account? </VText>
        <VText fontWeight={600} color="#D33A3A">
          <Link href="/create-account">
            Create Account
          </Link>
        </VText>
      </VText>
    </YStack>
  )
}
