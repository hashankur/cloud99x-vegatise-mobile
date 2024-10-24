import { VInputCompound } from 'components/ui/Input'
import { Key, useMemo, useState } from 'react'
import { Iconify } from 'react-native-iconify'
import { Adapt, Select, Sheet } from 'tamagui'

export default function SelectInput({ placeholder, items, hasIcon = false }) {
  const [val, setVal] = useState<string | undefined>(undefined)

  const icons = {
    selected: <Iconify icon="mdi:check" size={16} color="black" />,
    chevron: <Iconify icon="mdi:chevron-down" size={16} />,
  }

  return (
    <Select value={val} onValueChange={setVal} disablePreventBodyScroll>
      <VInputCompound>
        {hasIcon && (
          <VInputCompound.Button iconLeft>
            <Iconify icon="mingcute:bill-line" size={20} color="black" />
          </VInputCompound.Button>
        )}
        <Select.Trigger
          iconAfter={icons.chevron}
          backgroundColor="#EFF1F999"
          borderWidth={0}
          flex={1}
        >
          <Select.Value placeholder={placeholder} color="#5E6366" fontSize={12} />
        </Select.Trigger>
      </VInputCompound>

      <Adapt platform="touch">
        <Sheet
          modal
          dismissOnSnapToBottom
          snapPointsMode="mixed"
          snapPoints={['fit', '50%']}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>
          <Sheet.Overlay />
        </Sheet>
      </Adapt>

      <Select.Content>
        <Select.Viewport>
          <Select.Group>
            {/* for longer lists memoizing these is useful */}
            {useMemo(
              () =>
                items?.map((item: string, i: number) => {
                  return (
                    <Select.Item
                      index={i}
                      key={item}
                      value={item.toString().toLowerCase()}
                    >
                      <Select.ItemText>{item}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        {icons.selected}
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
  )
}
