import ImagePicker from 'components/forms/ImagePicker'
import { VButtonGradient } from 'components/ui/Button'
import { VContainer } from 'components/ui/Container'
import { VText } from 'components/ui/Text'
import { router } from 'expo-router'
import { ScrollView, YStack } from 'tamagui'

export default function VehicleInsuranceScreen() {
  return (
    <ScrollView bg="white">
      <YStack flex={1} gap="$5" px="$5" py="$5" bg="white">
        <VText mb="$2">
          <VText type="h3">Take A Photo Of Your Vehicle Insurance</VText>
          {'\n'}
          <VText type="h4">(Third Party/Private/Hiring)</VText>
        </VText>
        <VText type="description">
          If the vehicle owner name on the vehicle documents is different from mine, then
          I hereby confirm that I have the vehicle owner's consent to drive this vehicle
          on the vegatise Platform. This declaration can be treated as a No-Objection
          Certificate and releases vegatise from any legal obligations and consequences.
        </VText>

        <VText type="label">Vehicle Insurance Document</VText>

        <VContainer grouped>
          <VContainer type="input">
            <VText type="label">Vehicle Insurance Front</VText>
            <ImagePicker type="form" />
          </VContainer>

          <VContainer type="input">
            <VText type="label">Vehicle Insurance Rear</VText>
            <ImagePicker type="form" />
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
