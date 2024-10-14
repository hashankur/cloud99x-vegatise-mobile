import SelectInput from 'components/forms/select'
import { VButtonGradient } from 'components/ui/Button'
import { VContainer } from 'components/ui/Container'
import { VInput } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import { router } from 'expo-router'
import { RadioGroup, ScrollView, XStack, YStack } from 'tamagui'

export default function VehicleInfoScreen() {
  return (
    <ScrollView>
      <YStack flex={1} alignItems="center" gap="$5" px="$5" py="$5" bg="white">
        <VText alignSelf="flex-start" type="h3" mb="$2">
          Address And Routes
        </VText>

        <VContainer grouped>
          <VContainer type="input">
            <VText type="label">Address Line 1</VText>
            <VInput placeholder="259/73 Rajagiriya" />
          </VContainer>

          <VContainer type="input">
            <VText>
              <VText type="label">Address Line 2</VText>
              <VText type="label" fontWeight={400}>
                {' (Optional)'}
              </VText>
            </VText>
            <VInput placeholder="05, Colombo 06" />
          </VContainer>

          <VContainer type="input">
            <VText>
              <VText type="label">If Commuting Please State Work Address</VText>
              <VText type="label" fontWeight={400}>
                {' (Optional)'}
              </VText>
            </VText>
            <VInput placeholder="World Trade Center 7/02" />
          </VContainer>

          <VContainer.Split>
            <VContainer half>
              <VText type="label">City</VText>
              <SelectInput placeholder="Colombo" items={[]} />
            </VContainer>

            <VContainer half>
              <VText type="label">Province</VText>
              <SelectInput placeholder="Western" items={[]} />
            </VContainer>
          </VContainer.Split>

          <VContainer type="input">
            <VText>
              <VText type="label">Average Kilometers (KM) Per Day</VText>
            </VText>
            <VInput placeholder="10 KM" />
          </VContainer>

          <VContainer type="input">
            <VText type="label">On Average Which Routes Do You Travel</VText>
            <VContainer.Split>
              <VContainer half>
                <VText type="label" fontWeight={400} fontSize={10}>
                  From
                </VText>
                <VInput placeholder="Borella" />
              </VContainer>

              <VContainer half>
                <VText type="label" fontWeight={400} fontSize={10}>
                  To
                </VText>
                <VInput placeholder="Galle Road" />
              </VContainer>
            </VContainer.Split>
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
