import { Button, H4, Image, Input, Paragraph, XStack, YStack } from 'tamagui'
import otpImage from '../../assets/images/otp.png'
import { router } from 'expo-router'

export default function OtpScreen() {
  return (
    <YStack flex={1} alignItems="center" gap="$1" px="$5" pt="$5" bg="white">
      <Image source={otpImage} width={200} height={200} objectFit="contain" />
      <H4>OTP Verification</H4>
      <Paragraph>An 4 digit code has been sent to</Paragraph>
      <Paragraph>+94 769016274</Paragraph>

      <XStack flexWrap="wrap" my="$5" gap="$3">
        <Input width={50} height={50} textAlign="center" keyboardType="numeric" />
        <Input width={50} height={50} textAlign="center" keyboardType="numeric" />
        <Input width={50} height={50} textAlign="center" keyboardType="numeric" />
        <Input width={50} height={50} textAlign="center" keyboardType="numeric" />
      </XStack>

      <Button
        width="100%"
        backgroundColor="$btn"
        color="white"
        fontWeight={600}
        onPress={() => {
          router.navigate('/login/otp')
        }}
      >
        Verify
      </Button>

      <XStack gap="$2" mt="$8">
        <Paragraph fontWeight={500}>Didn't Get Your OTP?</Paragraph>
        <Paragraph fontWeight={500} textTransform="uppercase" color="$primary">
          Resend It
        </Paragraph>
      </XStack>
    </YStack>
  )
}
