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
          Address And Routes
        </VText>

        <YStack gap="$5" w="100%">
          <YStack w="100%" gap="$2">
            <VText type="label">Address Line 1</VText>
            <VInput placeholder="259/73 Rajagiriya" />
          </YStack>

          <YStack w="100%" gap="$2">
            <VText>
              <VText type="label">Address Line 2</VText>
              <VText type="label" fontWeight={400}>
                {' (Optional)'}
              </VText>
            </VText>
            <VInput placeholder="05, Colombo 06" />
          </YStack>

          <YStack w="100%" gap="$2">
            <VText>
              <VText type="label">If Commuting Please State Work Address</VText>
              <VText type="label" fontWeight={400}>
                {' (Optional)'}
              </VText>
            </VText>
            <VInput placeholder="World Trade Center 7/02" />
          </YStack>

          <XStack gap="$4">
            <YStack w="100%" gap="$2" f={1}>
              <VText type="label">City</VText>
              <SelectInput placeholder="Colombo" items={[]} />
            </YStack>

            <YStack w="100%" gap="$2" f={1}>
              <VText type="label">Province</VText>
              <SelectInput placeholder="Western" items={[]} />
            </YStack>
          </XStack>

          <YStack w="100%" gap="$2">
            <VText>
              <VText type="label">Average Kilometers (KM) Per Day</VText>
            </VText>
            <VInput placeholder="10 KM" />
          </YStack>

          <YStack gap="$2">
            <VText type="label">On Average Which Routes Do You Travel</VText>
            <XStack gap="$4">
              <YStack w="100%" gap="$2" f={1}>
                <VText type="label">From</VText>
                <VInput placeholder="Borella" />
              </YStack>

              <YStack w="100%" gap="$2" f={1}>
                <VText type="label">To</VText>
                <VInput placeholder="Galle Road" />
              </YStack>
            </XStack>
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
