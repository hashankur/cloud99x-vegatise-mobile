import SelectInput from 'components/forms/select'
import DatePicker from 'components/forms/DatePicker'
import { VButtonGradient } from 'components/ui/Button'
import { VContainer } from 'components/ui/Container'
import { VInput } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import { router } from 'expo-router'
import { useState } from 'react'
import { Iconify } from 'react-native-iconify'
import { Checkbox, RadioGroup, ScrollView, XStack, YStack } from 'tamagui'

export default function DrivingLicenseScreen() {
  const [checked, setChecked] = useState(false)

  return (
    <ScrollView>
      <YStack flex={1} gap="$5" px="$5" py="$5" bg="white">
        <VText type="h3" mb="$2">
          Take A Photo Of Your Driving License
        </VText>
        <VText type="description">
          If the vehicle owner name on the vehicle documents is different from mine, then
          I hereby confirm that I have the vehicle owner's consent to drive this vehicle
          on the vegatise Platform. This declaration can be treated as a No-Objection
          Certificate and releases vegatise from any legal obligations and consequences.
        </VText>

        <VText type="label">Driving License</VText>

        <VContainer grouped>
          <VContainer type="input">
            <VText type="label">Driving License Front</VText>
            <VContainer borderColor="#C5D0E6" borderWidth={1} borderRadius={20} p="$5">
              <VText alignSelf="center" color="$primary" fontWeight={600}>
                Add Your Photos Here
              </VText>
            </VContainer>
          </VContainer>

          <VContainer type="input">
            <VText type="label">Driving License Rear</VText>
            <VContainer borderColor="#C5D0E6" borderWidth={1} borderRadius={20} p="$5">
              <VText alignSelf="center" color="$primary" fontWeight={600}>
                Add Your Photos Here
              </VText>
            </VContainer>
          </VContainer>

          <VContainer type="input">
            <VText type="label">Driving License Number</VText>
            <VInput placeholder="A129023942" />
          </VContainer>

          <VContainer type="input">
            <VText type="label">Expiration Date</VText>
            <DatePicker />
          </VContainer>

          <VContainer.Split alignItems="center">
            <Checkbox
              backgroundColor={checked ? '$primary' : 'white'}
              onCheckedChange={() => setChecked(!checked)}
            >
              <Checkbox.Indicator>
                <Iconify icon="fa6-solid:check" size={12} color="white" />
              </Checkbox.Indicator>
            </Checkbox>
            <VText type="label" fontWeight={400}>
              My license dosent have an expiration date (for older licenses)
            </VText>
          </VContainer.Split>

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
