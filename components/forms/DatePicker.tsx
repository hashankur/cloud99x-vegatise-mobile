import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useState, type SetStateAction } from 'react'
import { VInput } from 'components/ui/Input'

export default function DatePicker() {
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

  return (
    <>
      <VInput
        type="date"
        placeholder="Date"
        onPress={showDatePicker}
        value={date?.toLocaleDateString()}
      />

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  )
}
