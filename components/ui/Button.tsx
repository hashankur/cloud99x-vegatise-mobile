import { Button, XStack, styled, withStaticProperties } from 'tamagui'

export const VButton = styled(Button, {
  width: '100%',

  variants: {
    type: {
      primary: {
        backgroundColor: '$btn',
        color: 'white',
        fontSize: 18,
        fontWeight: 600,
        height: 50,
      },
    },
    size: {
      '...size': (size, { tokens }) => {
        return {
          width: tokens.size[size] ?? size,
          height: tokens.size[size] ?? size,
        }
      },
    },
  } as const,
})
