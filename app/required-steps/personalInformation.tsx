import { VButtonGradient } from 'components/ui/Button'
import { VInput } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import * as ImagePicker from 'expo-image-picker'
import { router } from 'expo-router'
import { useMemo, useState, type SetStateAction } from 'react'
import { Pressable } from 'react-native'
import { Iconify } from 'react-native-iconify'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { Adapt, Image, Select, Separator, Sheet, XStack, YStack } from 'tamagui'
import profileImageUpload from '../../assets/images/profile-upload.png'
import SelectInput from 'components/forms/select'

export default function PersonalInfoScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const showDatePicker = () => {
    setDatePickerVisibility(true)
  }

  const hideDatePicker = () => {
    setDatePickerVisibility(false)
  }

  const handleConfirm = (date: SetStateAction<Date | undefined>) => {
    console.info('A date has been picked: ', date)
    setDate(date)
    hideDatePicker()
  }

  const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {
    // https://docs.expo.dev/versions/latest/sdk/imagepicker/
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Square image
      quality: 1,
    })
    console.info(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <YStack flex={1} alignItems="center" gap="$5" px="$5" py="$5" bg="white">
      <VText alignSelf="flex-start" type="h3" mb="$2">
        Personal Information
      </VText>
      <Pressable onPress={pickImage}>
        <Image
          source={image ? { uri: image } : profileImageUpload}
          width={160}
          height={160}
          objectFit="contain"
          borderRadius={12}
        />
      </Pressable>
      <VText alignSelf="center" color="$primary" fontWeight={600}>
        Upload Profile Photo
      </VText>
      <Separator borderColor="#DADADA" width="75%" />

      <YStack gap="$5" w="100%">
        <YStack w="100%" gap="$2">
          <VText type="label">Full Name</VText>
          <VInput placeholder="Abdurrahman Ahamed" />
        </YStack>

        <XStack gap="$4">
          <YStack w="100%" gap="$2" f={1}>
            <VText type="label">Date Of Birth</VText>
            <VInput
              type="date"
              placeholder="Date"
              onPress={showDatePicker}
              value={date?.toLocaleDateString()}
            />
          </YStack>

          <YStack w="100%" gap="$2" f={1}>
            <VText type="label">Gender</VText>
            <SelectInput placeholder="Gender" items={['Male', 'Female']} />
          </YStack>
        </XStack>

        <YStack w="100%" gap="$2">
          <VText type="label">Email</VText>
          <VInput type="email" placeholder="vegatise@domain" />
        </YStack>

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
      </YStack>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </YStack>
  )
}
