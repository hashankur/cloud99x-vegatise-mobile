import { Anchor, Button, H2, H3, Paragraph, XStack, YStack } from "tamagui";
import Onboarding from "./Onboarding";

export default function WelcomeScreen() {
  return (
    <>
      <YStack f={1} ai="center" jc="center" px="$5" pt="$5">
        <XStack ai="center" jc="center" fw="wrap">
          <Onboarding />
        </XStack>
      </YStack>
    </>
  );
}
