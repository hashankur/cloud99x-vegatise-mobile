import { Button, H4, H5, Image, Input, Label, Paragraph, XStack, YStack } from 'tamagui'
import otpImage from '../../assets/images/otp2.png'
import { router } from 'expo-router'

export default function CreateNewPasswordScreen() {
  return (
    <YStack flex={1} alignItems="center" gap="$1" px="$5" pt="$5" bg="white">
      <H4>Create New Password</H4>

      <XStack flexWrap="wrap" mt="$5">
        <Label
          fontSize="$2"
          color="$label"
          fontWeight={600}
          width="100%"
          htmlFor="newPassword"
        >
          Enter New Password
        </Label>
        <Input w="100%" id="newPassword" />
        <Paragraph fontSize="$1" color="$label" mt="$2">
          Password must be at least 8 Characters and must contain at least a Capital
          Letter, a Number and a Special Character.
        </Paragraph>
      </XStack>

      <XStack flexWrap="wrap" mt="$5">
        <Label
          fontSize="$2"
          color="$label"
          fontWeight={600}
          width="100%"
          htmlFor="newPasswordConfirm"
        >
          Confirm Password
        </Label>
        <Input w="100%" id="newPasswordConfirm" />

        <Button
          w="100%"
          backgroundColor="$btn"
          color="white"
          fontWeight={600}
          mt="$8"
          onPress={() => router.navigate('/login')}
        >
          Save Changes
        </Button>
      </XStack>
    </YStack>
  )
}
