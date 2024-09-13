import { Input, styled } from 'tamagui'

export const VInput = styled(Input, {
  backgroundColor: '#EFF1F999', // Opacity 60%
  borderWidth: 0,
  width: '100%',
  flex: 1,
  placeholderTextColor: '#ABAFB1',
  color: '#5E6366',

  variants: {
    type: {
      email: {
        keyboardType: 'email-address',
        textContentType: 'emailAddress',
      },
      password: {
        secureTextEntry: true,
        textContentType: 'password',
      },
      phone: {
        keyboardType: 'phone-pad',
        textContentType: 'telephoneNumber',
      },
    },
    state: {
      error: {
        backgroundColor: '#FCF3F2',
        opacity: 0.7,
      },
      success: {
        backgroundColor: '#F0F9F6',
        opacity: 0.7,
      },
    },
    centered: {
      true: {
        alignItems: 'center',
        justifyContent: 'center',
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
