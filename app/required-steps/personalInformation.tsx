import { VButtonGradient } from 'components/ui/Button';
import { VInput } from 'components/ui/Input';
import { VText } from 'components/ui/Text';
import { router } from 'expo-router';
import { useMemo, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Adapt, Image, Select, Separator, Sheet, XStack, YStack } from "tamagui";
import profileImageUpload from '../../assets/images/profile-upload.png';

import { Check, ChevronDown } from '@tamagui/lucide-icons';


export default function OtpEnterScreen() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.info("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };

  const items = [
    { name: 'Male' },
    { name: 'Female' },
  ]

  const [val, setVal] = useState('apple')

  return (
    <YStack flex={1} alignItems="center" gap="$5" px="$5" py="$5" bg="white">
      <VText alignSelf="flex-start" type="h3" mb="$2">OTP Verification</VText>
      <Image source={profileImageUpload} width={160} height={160} objectFit="contain" />
      <VText alignSelf="center" color="$primary" fontWeight={600}>Upload Profile Photo</VText>
      <Separator borderColor="#DADADA" width="75%" />

      <YStack gap="$5" w="100%">
        <YStack w="100%" gap="$2">
          <VText type="label">Full Name</VText>
          <VInput placeholder="Abdurrahman Ahamed" />
        </YStack>

        <XStack gap="$2">
          <YStack w="100%" gap="$2" f={1}>
            <VText type="label">Date Of Birth</VText>
            <VInput type="date" placeholder="Date" onPress={showDatePicker} value={date.toLocaleDateString()} />
          </YStack>

          <YStack w="100%" gap="$2" f={1}>
            <VText type="label">Gender</VText>

            <Select value={val} onValueChange={setVal} disablePreventBodyScroll>
              <Select.Trigger iconAfter={ChevronDown}>
                <Select.Value placeholder="Something" />
              </Select.Trigger>

              <Adapt platform="touch">
                <Sheet modal dismissOnSnapToBottom snapPointsMode="fit">
                  <Sheet.Frame>
                    <Sheet.ScrollView>
                      <Adapt.Contents />
                    </Sheet.ScrollView>
                  </Sheet.Frame>
                  <Sheet.Overlay />
                </Sheet>
              </Adapt>

              <Select.Content>
                <Select.Viewport >
                  <Select.Group>
                    {/* for longer lists memoizing these is useful */}
                    {useMemo(
                      () =>
                        items.map((item, i) => {
                          return (
                            <Select.Item
                              index={i}
                              key={item.name}
                              value={item.name.toLowerCase()}
                            >
                              <Select.ItemText>{item.name}</Select.ItemText>
                              <Select.ItemIndicator marginLeft="auto">
                                <Check size={16} />
                              </Select.ItemIndicator>
                            </Select.Item>
                          )
                        }),
                      [items]
                    )}
                  </Select.Group>
                </Select.Viewport>
              </Select.Content>
            </Select>

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
              router.navigate('/create-account/otpEnter')
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
