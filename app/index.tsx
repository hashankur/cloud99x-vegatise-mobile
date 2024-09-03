import { Link } from '@react-navigation/native'
import { Paragraph, XStack, YStack } from 'tamagui'

export default function WelcomeScreen() {
  return (
    <>
      <YStack f={1} ai="center" jc="center" gap="$8" px="$10" pt="$5">
        <XStack ai="center" jc="center" fw="wrap" gap="$1.5">
          <Paragraph fos="$5" ta="center">
            <Link to="/login">Login</Link>
          </Paragraph>
        </XStack>
      </YStack>
    </>
  )
}
