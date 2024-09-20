import { Button, H4, Image, Input, Label, Paragraph, XStack, YStack } from 'tamagui'
import logo from '../../assets/images/logo.png'
import { Link, router } from 'expo-router'
import { VInput } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import { VButton } from 'components/ui/Button'

export default function ForgotPasswordScreen() {
  return (
    <YStack
      flex={1}
      alignItems="center"
      gap="$8"
      px="$5"
      pt="$10"
      backgroundColor="white"
    >
      <Image source={logo} width={200} height={50} objectFit="contain" />
      <VText type="h2">Forgot Your Password?</VText>

      <YStack w="100%" gap="$2">
        <VText type="label">Enter Email Address</VText>
        <VInput type="email" />
      </YStack>

      <VButton type="primary" onPress={() => router.navigate('/forgot-password/otp')}>
        Send Code
      </VButton>

      <VText>
        <VText>Don't Have An Account? </VText>
        <VText fontWeight={500} color="$primary">
          <Link href="/create-account">Create Account</Link>
        </VText>
      </VText>
    </YStack>
  )
}
