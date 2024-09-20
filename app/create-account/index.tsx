import { PasswordInput } from 'components/forms/password'
import { VButton } from 'components/ui/Button'
import { VInput } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import { Link, router } from 'expo-router'
import { Image, Paragraph, ScrollView, YStack } from 'tamagui'
import logo from '../../assets/images/logo.png'

export default function CreateAccountScreen() {
  return (
    <ScrollView>
      <YStack
        flex={1}
        alignItems="center"
        gap="$5"
        px="$5"
        py="$10"
        backgroundColor="white"
      >
        <Image source={logo} width={200} height={50} objectFit="contain" />

        <YStack w="100%">
          <VText type="h2" my={10}>
            Create An Account
          </VText>
          <Paragraph fontSize={12} maxWidth={250}>
            Please complete all input fields to create your account
          </Paragraph>
        </YStack>

        <YStack w="100%" gap="$2">
          <VText type="label">Full Name</VText>
          <VInput placeholder="First Name, Last Name" />
        </YStack>

        <YStack w="100%" gap="$2">
          <VText type="label">Email Address</VText>
          <VInput type="email" placeholder="Email@domain.com" />
        </YStack>

        <YStack w="100%" gap="$2">
          <VText type="label">Password</VText>
          <PasswordInput />
        </YStack>

        <YStack w="100%" gap="$2">
          <VText type="label">Confirm Password</VText>
          <PasswordInput />
        </YStack>

        <YStack w="100%">
          <VButton
            type="primary"
            onPress={() => router.navigate('/create-account/otpRequest')}
          >
            Next
          </VButton>
        </YStack>

        <YStack>
          <VText>
            <VText fontWeight={600}>By signing up, you agree to our </VText>
            <VText fontWeight={600} color="$primary">
              Terms of Service
            </VText>
          </VText>
          <VText alignSelf="center">
            <VText fontWeight={600}>and </VText>
            <VText fontWeight={600} color="$primary">
              Privacy Policy
            </VText>
          </VText>
        </YStack>

        <VText>
          <VText>Already have an account? </VText>
          <VText color="$primary" fontWeight={600}>
            <Link href="/login">Login</Link>
          </VText>
        </VText>
      </YStack>
    </ScrollView>
  )
}
