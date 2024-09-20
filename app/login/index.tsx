import { PasswordInput } from 'components/forms/password'
import PhoneInput from 'components/forms/phone'
import { VButton } from 'components/ui/Button'
import { VInput } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import { Link, router } from 'expo-router'
import { Image, Tabs, YStack } from 'tamagui'
import logo from '../../assets/images/logo.png'
import IslandTabs from '../../components/IslandTabs'

export default function LoginScreen() {
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
      <VText type="h2" alignSelf="flex-start">
        Welcome to, Vegatise
      </VText>

      <IslandTabs tabs={['Phone Number', 'Email']}>
        {/* Tab Section - Phone Number */}
        <Tabs.Content value="tab1" gap="$5">
          <YStack gap="$2">
            <VText type="label">Phone Number</VText>
            <PhoneInput />
          </YStack>

          <VButton
            type="primary"
            onPress={() => {
              router.navigate('/login/otp')
            }}
          >
            Request OTP
          </VButton>
        </Tabs.Content>

        {/* Tab Section - Email */}
        <Tabs.Content value="tab2" gap="$5">
          <YStack gap="$2">
            <VText type="label">Email Address</VText>
            <VInput placeholder="email@domain.com" type="email" />
          </YStack>

          <YStack gap="$2" w="100%">
            <VText type="label">Password</VText>
            <PasswordInput />

            <VText color="$link" textAlign="right">
              <Link href="/forgot-password">Forgot Password?</Link>
            </VText>
          </YStack>

          <VButton type="primary" onPress={() => router.navigate('/required-steps')}>
            Login
          </VButton>
        </Tabs.Content>

        <YStack alignItems="center" my="$8" gap="$1.5">
          <VText type="h4" fontWeight={400}>
            Not Registered Yet?
          </VText>
          <VText type="h4" color="$primary">
            <Link href="/create-account">Create An Account</Link>
          </VText>
        </YStack>
      </IslandTabs>
    </YStack>
  )
}
