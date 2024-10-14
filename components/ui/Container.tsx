import { XStack, YStack, styled, withStaticProperties } from 'tamagui'

const VContainerBase = styled(YStack, {
  width: '100%',

  variants: {
    type: {
      input: {
        gap: '$2',
      },
    },
    // Use with VContainer.Split
    half: {
      true: {
        gap: '$2',
        width: '100%',
        flex: 1,
      },
    },
    // To group containers with gap vertically
    grouped: {
      true: {
        gap: '$5',
        width: '100%',
      },
    },
  } as const,
})

const VContainerSplit = styled(XStack, {
  gap: '$4',
})

export const VContainer = withStaticProperties(VContainerBase, {
  Split: VContainerSplit,
})
