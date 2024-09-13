import { Button, H4, Image, Input, Label, Paragraph, XStack, YStack } from 'tamagui'
import logo from '../../assets/images/logo.png'
import { router } from 'expo-router'
import { VInput } from 'components/ui/Input'

export default function ForgotPasswordScreen() {
  return (
    <YStack
      flex={1}
      alignItems="center"
      gap="$5"
      px="$5"
      pt="$5"
      backgroundColor="white"
    >
      <Image source={logo} width={200} height={150} objectFit="contain" />
      <H4>Forgot Your Password?</H4>

      <XStack flexWrap="wrap">
        <Label fontSize="$2" color="$label" fontWeight={600} width="100%">
          Enter Email Address
        </Label>
        <VInput type="email" />

        <Button
          w="100%"
          backgroundColor="$btn"
          color="white"
          fontWeight={600}
          mt="$8"
          onPress={() => router.navigate('/forgot-password/otp')}
        >
          Send Code
        </Button>
      </XStack>

      <XStack gap="$2" mt="$5">
        <Paragraph>Don't Have An Account?</Paragraph>
        <Paragraph fontWeight={500} color="$primary">
          Create Account
        </Paragraph>
      </XStack>
    </YStack>
  )
}
