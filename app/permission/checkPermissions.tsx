import PhoneInput from 'components/forms/Phone'
import { VButton } from 'components/ui/Button'
import { VText } from 'components/ui/Text'
import { router } from 'expo-router'
import { Image, ScrollView, XStack, YStack } from 'tamagui'
import { Iconify } from 'react-native-iconify'

import checkPermissionImage from '../../assets/images/permission2.png'

export default function PermissionRequestScreen() {
  const granted = false
  return (
    <ScrollView>
      <YStack flex={1} alignItems="center" gap="$5" px="$5" bg="white">
        <YStack gap="$7" w="100%">
          <YStack gap="$5">
            <VText type="h2" mb="$2" textAlign="center">
              Check permissions{' '}
            </VText>
            <Image source={checkPermissionImage} width={300} objectFit="contain" />
            <VText mb="$2" textAlign="center">
              To begin accurately detecting trip information such as start and end points
              and locating recurring driving patterns, the following accesses are
              required.
            </VText>
          </YStack>
          <YStack alignItems="center" gap="$3">
            <YStack>
              <XStack width={'100%'} justifyContent="space-between" alignItems="center">
                <VText type="h2">Locations</VText>
                <YStack alignItems="center">
                  <Iconify icon="uiw:information-o" size={15} color="gray" />
                  <VText color={granted ? 'green' : 'red'}>Grant Permission</VText>
                </YStack>
              </XStack>
              <VText>
                This permission allows your device to capture and pass location details to
                this application. “Precise” locations should be enabled “while using the
                app”, so each trip can be reliably recorded
              </VText>
            </YStack>
            <YStack>
              <XStack width={'100%'} justifyContent="space-between" alignItems="center">
                <VText type="h2">Camera</VText>
                <YStack alignItems="center">
                  <Iconify icon="uiw:information-o" size={15} color="gray" />
                  <VText color={granted ? 'green' : 'red'}>Grant Permission</VText>
                </YStack>
              </XStack>
              <VText>
                This permission allows your device to capture and pass location details to
                this application. “Precise” locations should be enabled “while using the
                app”, so each trip can be reliably recorded
              </VText>
            </YStack>
            <YStack>
              <XStack width={'100%'} justifyContent="space-between" alignItems="center">
                <VText type="h2">Activity</VText>
                <YStack alignItems="center">
                  <Iconify icon="uiw:information-o" size={15} color="gray" />
                  <VText color={granted ? 'green' : 'red'}>Grant Permission</VText>
                </YStack>
              </XStack>
              <VText>
                Allow this permission to minimize battery usage, which enables the use
                physical motion to help detect starts and ends of trip.
              </VText>
            </YStack>
          </YStack>
          <VButton
            type="primary"
            mb={20}
            onPress={() => {
              router.navigate('/required-steps')
            }}
          >
            Next
          </VButton>
        </YStack>
      </YStack>
    </ScrollView>
  )
}
