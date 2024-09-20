import { Button, XStack, styled, withStaticProperties } from 'tamagui'
import { LinearGradient } from 'tamagui/linear-gradient'

export const VButton = styled(Button, {
  width: '100%',
  fontSize: 18,
  fontWeight: 600,

  variants: {
    type: {
      primary: {
        backgroundColor: '$btn',
        color: 'white',
        height: 50,
      },
      gradient: {
        backgroundColor: 'transparent',
        color: 'white',
        height: 40,
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

const GradientWrapper = styled(LinearGradient, {
  borderRadius: '$6',
  width: '75%',
  mx: 'auto',
  colors: ['#C8102E', '#FB4E02'],
  start: [0, 0.5],
  end: [0.5, 0],
})

export const VButtonGradient = withStaticProperties(GradientWrapper, {
  Button: VButton,
})
