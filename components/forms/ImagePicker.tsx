import { useState } from 'react'
import { Pressable } from 'react-native'
import { Image } from 'tamagui'
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker'
import profileImageUpload from '../../assets/images/profile-upload.png'
import { VContainer } from 'components/ui/Container'
import { VText } from 'components/ui/Text'
import { Iconify } from 'react-native-iconify'

export default function ImagePicker({ type }) {
  const [image, setImage] = useState<string | null>(null)

  const pickImage = async () => {
    // https://docs.expo.dev/versions/latest/sdk/imagepicker/
    // No permissions request is necessary for launching the image library
    let result = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: type === 'profile' ? [1, 1] : undefined, // Square image for profile image
      quality: 1,
    })
    console.info(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  const profileUpload = () => {
    return (
      <Image
        source={image ? { uri: image } : profileImageUpload}
        width={160}
        height={160}
        objectFit="contain"
        borderRadius={12}
      />
    )
  }

  const formUpload = () => {
    return image ? (
      <Image source={{ uri: image }} height={200} objectFit="fill" borderRadius={20} />
    ) : (
      <VContainer
        borderColor="#C5D0E6"
        borderWidth={1}
        borderRadius={20}
        p="$4"
        alignItems="center"
      >
        <Iconify icon="akar-icons:camera" size={20} color="black" />
        <VText color="$primary" fontWeight={600} mt="$2">
          Add Your Photos Here
        </VText>
      </VContainer>
    )
  }

  return (
    <Pressable onPress={pickImage}>
      {type === 'profile' ? profileUpload : formUpload}
    </Pressable>
  )
}
