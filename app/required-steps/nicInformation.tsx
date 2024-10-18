import ImagePicker from 'components/forms/ImagePicker'
import { VButtonGradient } from 'components/ui/Button'
import { VContainer } from 'components/ui/Container'
import { VInput } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import { router } from 'expo-router'
import { ScrollView, YStack } from 'tamagui'

export default function NicInformationScreen() {
  return (
    <ScrollView bg="white">
      <YStack flex={1} gap="$5" px="$5" py="$5" bg="white">
        <VText type="h3" mb="$2">
          Take A Photo Of Your National Identity Card (NIC)
        </VText>

        <VContainer grouped>
          <VContainer type="input">
            <VText type="label">NIC Front</VText>
            <ImagePicker type="form" />
          </VContainer>

          <VContainer type="input">
            <VText type="label">NIC Rear</VText>
            <ImagePicker type="form" />
          </VContainer>

          <VContainer type="input">
            <VText type="label">NIC Number</VText>
            <VInput placeholder="29798279402V" />
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
