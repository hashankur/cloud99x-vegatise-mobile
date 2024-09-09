import { Button, H4, H5, Image, Input, Paragraph, XStack, YStack } from 'tamagui'
import otpImage from '../../assets/images/otp2.png'
import { router } from 'expo-router'

export default function ForgotPasswordOtpScreen() {
  return (
    <YStack flex={1} alignItems="center" gap="$1" px="$5" pt="$5" bg="white">
      <H4>OTP Verification</H4>
      <Image source={otpImage} width={300} height={300} objectFit="contain" />
      <H4 alignSelf="flex-start" fontWeight={600} mt="$5">
        Enter OTP
      </H4>
      <Paragraph w="100%" fontWeight={500}>
        An 4 digit code has been sent to your email
      </Paragraph>

      <XStack flexWrap="wrap" my="$5" gap="$3">
        <Input width={50} height={50} textAlign="center" keyboardType="numeric" />
        <Input width={50} height={50} textAlign="center" keyboardType="numeric" />
        <Input width={50} height={50} textAlign="center" keyboardType="numeric" />
        <Input width={50} height={50} textAlign="center" keyboardType="numeric" />
      </XStack>

      <XStack gap="$2" mb="$5">
        <Paragraph>You should receive the OTP in</Paragraph>
        <Paragraph fontWeight={500} color="$primary">
          30 seconds
        </Paragraph>
      </XStack>

      <Button
        width="100%"
        backgroundColor="$btn"
        color="white"
        fontWeight={600}
        onPress={() => {
          router.navigate('/forgot-password/new-password')
        }}
      >
        Verify
      </Button>

      <XStack gap="$2" mt="$5">
        <Paragraph>Don't Have An Account?</Paragraph>
        <Paragraph fontWeight={500} color="$primary">
          Create Account
        </Paragraph>
      </XStack>
    </YStack>
  )
}
