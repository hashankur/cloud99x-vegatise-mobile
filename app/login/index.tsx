import { Iconify } from 'react-native-iconify'
import {
  Adapt,
  Button,
  H4,
  Image,
  Input,
  Label,
  Paragraph,
  Select,
  Sheet,
  SizableText,
  Tabs,
  XStack,
  YStack,
} from 'tamagui'
import logo from '../../assets/images/logo.png'
import { Link, router } from 'expo-router'
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
            <Select defaultValue="">
              <Select.Trigger
                width="$10"
                iconAfter={<Iconify icon="mdi:chevron-down" size={24} />}
              >
                <Select.Value placeholder="+94" />
              </Select.Trigger>

              <Adapt when="sm" platform="touch">
                {/* or <Select.Sheet> */}
                <Sheet>
                  <Sheet.Frame>
                    <Adapt.Contents />
                  </Sheet.Frame>
                  <Sheet.Overlay />
                </Sheet>
              </Adapt>

              <Select.Content>
                <Select.ScrollUpButton />
                <Select.Viewport>
                  <Select.Group>
                    <Select.Label />
                    <Select.Item>
                      <Select.ItemText />
                    </Select.Item>
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton />
              </Select.Content>
            </Select>

            <Input flex={1} placeholder="769016274" />
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
            <Label
              fontSize="$2"
              color="$label"
              fontWeight={600}
              width="100%"
              htmlFor="email"
            >
              Email Address
            </Label>
            <Input w="100%" id="email" placeholder="email@domain.com" />
          </XStack>

          <XStack flexWrap="wrap">
            <Label
              fontSize="$2"
              color="$label"
              fontWeight={600}
              width="100%"
              htmlFor="password"
            >
              Password
            </Label>
            <Input w="100%" id="password" />
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
