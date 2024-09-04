import { H4, Image, YStack } from 'tamagui'
import otpImage from '../../assets/images/otp.png'

export default function OtpScreen() {
  return (
    <YStack flex={1} alignItems="center" gap="$5" px="$5" pt="$5">
      <Image source={otpImage} width={200} objectFit="contain" />
      <H4>OTP Verification</H4>
    </YStack>
  )
}
