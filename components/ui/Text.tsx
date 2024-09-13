import { SizableText, View, styled } from 'tamagui'

export const Text = styled(SizableText, {
  variants: {
    type: {
      h1: {
        fontSize: 24,
        fontWeight: 700,
      },
      h2: {
        fontSize: 20,
        fontWeight: 600,
      },
      h3: {
        fontSize: 18,
        fontWeight: 600,
      },
      h4: {
        fontSize: 16,
        fontWeight: 500,
      },
      base: {
        fontSize: 12,
      },
      header: {
        fontSize: 20,
        fontWeight: 700,
      },
      tab: {
        fontSize: 12,
        fontWeight: 600,
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
