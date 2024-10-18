import DatePicker from 'components/forms/DatePicker'
import ImagePicker from 'components/forms/ImagePicker'
import SelectInput from 'components/forms/Select'
import { VButtonGradient } from 'components/ui/Button'
import { VContainer } from 'components/ui/Container'
import { VInput } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import { router } from 'expo-router'
import { Separator, YStack } from 'tamagui'

export default function PersonalInfoScreen() {
  return (
    <YStack flex={1} alignItems="center" gap="$5" px="$5" py="$5" bg="white">
      <VText alignSelf="flex-start" type="h3" mb="$2">
        Personal Information
      </VText>

      <ImagePicker type="profile" />

      <VText alignSelf="center" color="$primary" fontWeight={600}>
        Upload Profile Photo
      </VText>
      <Separator borderColor="#DADADA" width="75%" />

      <VContainer grouped>
        <VContainer type="input">
          <VText type="label">Full Name</VText>
          <VInput placeholder="Abdurrahman Ahamed" />
        </VContainer>

        <VContainer.Split>
          <VContainer type="input" half>
            <VText type="label">Date Of Birth</VText>
            <DatePicker />
          </VContainer>

          <VContainer type="input" half>
            <VText type="label">Gender</VText>
            <SelectInput placeholder="Gender" items={['Male', 'Female']} />
          </VContainer>
        </VContainer.Split>

        <VContainer type="input">
          <VText type="label">Email</VText>
          <VInput type="email" placeholder="vegatise@domain" />
        </VContainer>

        <VButtonGradient>
          <VButtonGradient.Button
            type="gradient"
            onPress={() => {
              router.navigate('./')
            }}
          >
            Save
          </VButtonGradient.Button>
        </VButtonGradient>
      </VContainer>
    </YStack>
  )
}
