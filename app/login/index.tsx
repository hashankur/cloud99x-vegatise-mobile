import { VInput } from 'components/ui/Input'
import { Link, router } from 'expo-router'
import { Iconify } from 'react-native-iconify'
import {
  Adapt,
  Button,
  H4,
  Image,
  Label,
  Select,
  Sheet,
  SizableText,
  Tabs,
  XStack,
  YStack,
} from 'tamagui'
import logo from '../../assets/images/logo.png'
import IslandTabs from '../../components/ui/IslandTabs'

export default function LoginScreen() {
  return (
    <YStack flex={1} alignItems="center" gap="$5" px="$5" pt="$5" backgroundColor="white">
      <Image source={logo} width={200} height={150} objectFit="contain" />
      <H4 alignSelf="flex-start">Welcome To, Vegatise</H4>

      <IslandTabs tabs={['Phone Number', 'Email']}>
        {/* Tab Section - Phone Number */}
        <Tabs.Content value="tab1" minHeight={160}>
          <SizableText fontSize="$2" color="$label" mb="$1" fontWeight={600}>
            Phone Number
          </SizableText>

          <XStack gap="$2">
            <Select.Trigger
              width="$10"
              iconAfter={<Iconify icon="mdi:chevron-down" size={24} />}
            >
              <Select.Value placeholder="+94" />
            </Select.Trigger>

            <XStack
              alignItems="center"
              gap="$2"
              backgroundColor="whitesmoke"
              borderRadius="$5"
              w="100%"
              flex={1}
            >
              <VInput placeholder="769016274" type="phone" />
              <Button circular size="$1.5" backgroundColor="#c6eadd" mx="$3">
                <Iconify icon="mingcute:check-fill" size={14} color="green" />
              </Button>
            </XStack>
          </XStack>

          <Button
            backgroundColor="$btn"
            color="white"
            fontWeight={600}
            mt="$6"
            onPress={() => {
              router.navigate('/login/otp')
            }}
          >
            Request OTP
          </Button>
        </Tabs.Content>

        {/* Tab Section - Email */}
        <Tabs.Content value="tab2" gap="$5" minHeight={325}>
          <XStack flexWrap="wrap">
            <Label fontSize="$2" color="$label" fontWeight={600} width="100%">
              Email Address
            </Label>
            <VInput placeholder="email@domain.com" type="email" />
          </XStack>

          <XStack flexWrap="wrap">
            <Label fontSize="$2" color="$label" fontWeight={600} width="100%">
              Password
            </Label>
            <XStack
              alignItems="center"
              gap="$2"
              backgroundColor="#EFF1F9"
              borderRadius="$5"
              w="100%"
            >
              <Button circular size="$1" ml="$3" disabled>
                <Iconify icon="uil:lock-alt" size={20} color="gray" />
              </Button>
              <VInput type="password" />
              <Button circular size="$1.5" mx="$3">
                <Iconify icon="iconamoon:eye-off" size={16} color="black" />
              </Button>
            </XStack>
            <SizableText w="100%" pt="$2" textAlign="right" fontSize="$2" color="$link">
              <Link href="/forgot-password">Forgot Password?</Link>
            </SizableText>
          </XStack>

          <Button disabled backgroundColor="$btn" color="white" fontWeight={600} mt="$2">
            Login
          </Button>
        </Tabs.Content>
      </IslandTabs>
    </YStack>
  )
}
