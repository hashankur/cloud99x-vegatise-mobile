import {
  Adapt,
  Button,
  H4,
  H5,
  Image,
  Input,
  Paragraph,
  Select,
  Sheet,
  SizableText,
  Tabs,
  XStack,
  YStack,
} from 'tamagui'
import logo from '../assets/images/logo.png'

export default function LoginScreen() {
  return (
    <>
      <YStack flex={1} alignItems="center" gap="$5" px="$5" pt="$5">
        <Image source={logo} width={200} objectFit="contain" />
        <H4 alignSelf="flex-start">Welcome To, Vegatise</H4>

        <Tabs defaultValue="tab1" flexDirection="column" style={{ width: '100%' }}>
          <Tabs.List alignSelf="center" mb="$5">
            <Tabs.Tab value="tab1">
              <SizableText>Phone Number</SizableText>
            </Tabs.Tab>
            <Tabs.Tab value="tab2">
              <SizableText>Email</SizableText>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Content value="tab1" gap="$3">
            <SizableText fontSize="$2" color="red">
              Phone Number
            </SizableText>

            <XStack gap="$2">
              <Select defaultValue="">
                <Select.Trigger width="$10">
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

              <Input flex={1} placeholder="Enter Phone Number" />
            </XStack>

            <Button disabled backgroundColor="$gray6">
              Request OTP
            </Button>
          </Tabs.Content>

          <Tabs.Content value="tab2">
            <SizableText>Email</SizableText>
          </Tabs.Content>
        </Tabs>

        <Paragraph> Not Registered Yet?</Paragraph>
        <Button size="$2" color="red">
          Create An Account
        </Button>
      </YStack>
    </>
  )
}
