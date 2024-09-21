import SelectInput from 'components/forms/select'
import { VButtonGradient } from 'components/ui/Button'
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

        <YStack gap="$5" w="100%">
          <YStack w="100%" gap="$2">
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
          </YStack>

          <XStack gap="$4">
            <YStack w="100%" gap="$2" f={1}>
              <VText type="label">Car Brand</VText>
              <VInput placeholder="Toyota" />
            </YStack>

            <YStack w="100%" gap="$2" f={1}>
              <VText type="label">Car Model</VText>
              <VInput placeholder="CHR" />
            </YStack>
          </XStack>

          <YStack w="100%" gap="$2">
            <VText type="label">Car Number Plate</VText>
            <VInput placeholder="BHP 4080" />
          </YStack>

          <XStack gap="$4">
            <YStack w="100%" gap="$2" f={1}>
              <VText type="label">Year of Making the Car</VText>
              <SelectInput
                placeholder={2018}
                items={Array.from({ length: 41 }, (_, index) => 2000 + index)}
              />
            </YStack>

            <YStack w="100%" gap="$2" f={1}>
              <VText type="label">Car Color</VText>
              <VInput placeholder="Black" />
            </YStack>
          </XStack>

          <YStack w="100%" gap="$2">
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
          </YStack>

          <YStack w="100%" gap="$2">
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
          </YStack>

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
        </YStack>
      </YStack>
    </ScrollView>
  )
}
