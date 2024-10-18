import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useState, type SetStateAction } from 'react'
import { VInput, VInputCompound } from 'components/ui/Input'
import { Iconify } from 'react-native-iconify'

export default function DatePicker({ hasIcon = false }) {
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
      <VInputCompound>
        {hasIcon && (
          <VInputCompound.Button iconLeft>
            <Iconify icon="system-uicons:calendar-days" size={20} color="black" />
          </VInputCompound.Button>
        )}
        <VInputCompound.Input
          type="date"
          placeholder="Date"
          onPress={showDatePicker}
          value={date?.toLocaleDateString()}
        />
        <VInputCompound.Button iconRight>
          <Iconify icon="mdi:chevron-down" size={16} color="black" />
        </VInputCompound.Button>
      </VInputCompound>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  )
}
