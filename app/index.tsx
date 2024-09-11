import { Anchor, Button, H2, H3, Paragraph, XStack, YStack } from 'tamagui'
import Onboarding from './onboarding/Onboarding'

export default function WelcomeScreen() {
  return (
    <>
      <YStack>
        <XStack pt="$0">
          <Onboarding />
        </XStack>
      </YStack>
    </>
  )
}
