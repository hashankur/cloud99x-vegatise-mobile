import { Anchor, Button, H2, H3, Paragraph, XStack, YStack } from "tamagui";
import Onboarding from "./Onboarding";

export default function WelcomeScreen() {
  return (
    <>
      <YStack>
        <XStack pt="$3">
          <Onboarding />
        </XStack>
      </YStack>
    </>
  );
}
