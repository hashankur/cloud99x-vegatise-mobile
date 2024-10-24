import ImagePicker from 'components/forms/ImagePicker'
import SelectInput from 'components/forms/Select'
import { VButtonGradient } from 'components/ui/Button'
import { VContainer } from 'components/ui/Container'
import { VInputCompound } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import { router } from 'expo-router'
import { ScrollView, YStack } from 'tamagui'

export default function BillingDocumentScreen() {
  return (
    <ScrollView bg="white">
      <YStack flex={1} gap="$5" px="$5" py="$5" bg="white">
        <VText mb="$2" type="h3">
          Take A Photo Of Your Billing Document
        </VText>
        <VText type="description">
          Billing proof is used to confirm your address. It can be a utility bill (water,
          electricity or landline phone) or a bank statement with your correct address.
        </VText>

        <VText type="label">Billing Document</VText>

        <VContainer grouped>
          <VContainer type="input">
            <VText type="label">Type Of Document</VText>
            <SelectInput
              placeholder="Utility Bill"
              items={['Utility Bill', 'Water Bill', 'Electricity Bill', 'Bank Statement']}
              hasIcon
            />
          </VContainer>

          <VContainer type="input">
            <VText type="label">Image</VText>
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
