import ImagePicker from 'components/forms/ImagePicker'
import { VButtonGradient } from 'components/ui/Button'
import { VContainer } from 'components/ui/Container'
import { VText } from 'components/ui/Text'
import { router } from 'expo-router'
import { RadioGroup, ScrollView, YStack } from 'tamagui'

export default function VehicleImageScreen() {
  return (
    <ScrollView>
      <YStack flex={1} gap="$5" px="$5" py="$5" bg="white">
        <VText type="h3" mb="$2">
          Take A Photo Of Your Vehicle
        </VText>
        <VText type="description">
          If the vehicle owner name on the vehicle documents is different from mine, then
          I hereby confirm that I have the vehicle owner's consent to drive this vehicle
          on the vegatise Platform. This declaration can be treated as a No-Objection
          Certificate and releases vegatise from any legal obligations and consequences.
        </VText>

        <VContainer type="input">
          <VText type="label">Vehicle Image</VText>
          <VText type="description">
            * Please Upload Image Of Front View, Side View And Back View Of The Vehicle
          </VText>
        </VContainer>

        <VContainer grouped>
          <VContainer type="input">
            <VText type="label">Front View</VText>
            <ImagePicker type="form" />
          </VContainer>

          <VContainer type="input">
            <VText type="label">Back View</VText>
            <ImagePicker type="form" />
          </VContainer>

          <VContainer type="input">
            <VText type="label">Side View</VText>
            <ImagePicker type="form" />
          </VContainer>

          <VContainer type="input">
            <VText type="label">Vehicle Condition</VText>
            <RadioGroup gap="$2" name="condition">
              <VContainer.Split>
                <RadioGroup.Item value="excellent">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <VText>Excellent Condition</VText>
              </VContainer.Split>

              <VContainer.Split>
                <RadioGroup.Item value="good">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <VText>Good Condition</VText>
              </VContainer.Split>

              <VContainer.Split>
                <RadioGroup.Item value="minorDamage">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <VText>Minor Scratch/Dents</VText>
              </VContainer.Split>
            </RadioGroup>
          </VContainer>

          <VButtonGradient>
            <VButtonGradient.Button
              type="gradient"
              onPress={() => {
                router.navigate('./')
              }}
            >
              Submit
            </VButtonGradient.Button>
          </VButtonGradient>
        </VContainer>
      </YStack>
    </ScrollView>
  )
}
