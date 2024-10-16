import SelectInput from 'components/forms/Select'
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
          Vehicle Information
        </VText>

        <VContainer grouped>
          <VContainer type="input">
            <VText type="label">Car Type</VText>
            <SelectInput
              placeholder="SUV"
              items={[
                'Hatchback',
                'Sedan',
                'MUV',
                'SUV',
                'Convertible',
                'Coupe',
                'Pickup Truck',
              ]}
            />
          </VContainer>

          <VContainer.Split>
            <VContainer type="input" half>
              <VText type="label">Car Brand</VText>
              <VInput placeholder="Toyota" />
            </VContainer>

            <VContainer type="input" half>
              <VText type="label">Car Model</VText>
              <VInput placeholder="CHR" />
            </VContainer>
          </VContainer.Split>

          <VContainer type="input">
            <VText type="label">Car Number Plate</VText>
            <VInput placeholder="BHP 4080" />
          </VContainer>

          <VContainer.Split>
            <VContainer type="input" half>
              <VText type="label">Year of Making the Car</VText>
              <SelectInput
                placeholder={2018}
                items={Array.from({ length: 41 }, (_, index) => 2000 + index)}
              />
            </VContainer>

            <VContainer type="input" half>
              <VText type="label">Car Color</VText>
              <VInput placeholder="Black" />
            </VContainer>
          </VContainer.Split>

          <VContainer type="input">
            <VText type="label">Your Identity</VText>
            <RadioGroup gap="$2" name="identity">
              <XStack gap="$4">
                <RadioGroup.Item value="owner">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <VText>I Am The Owner And Driver Of This Vehicle</VText>
              </XStack>

              <XStack gap="$4">
                <RadioGroup.Item value="notOwner">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <VText>I Am Not The Owner Of The Vehicle</VText>
              </XStack>
            </RadioGroup>
          </VContainer>

          <VContainer type="input">
            <VText type="label">Car Usage</VText>
            <RadioGroup gap="$2" name="usage">
              <XStack gap="$4">
                <RadioGroup.Item value="businessCar">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <VText>Business Car</VText>
              </XStack>

              <XStack gap="$4">
                <RadioGroup.Item value="private">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <VText>Private</VText>
              </XStack>

              <XStack gap="$4">
                <RadioGroup.Item value="rentCar">
                  <RadioGroup.Indicator />
                </RadioGroup.Item>
                <VText>Rent A Car</VText>
              </XStack>
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
