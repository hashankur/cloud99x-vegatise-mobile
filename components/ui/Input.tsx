import { XStack } from 'tamagui'
import { Input, styled, withStaticProperties } from 'tamagui'
import { VButton } from './Button'

export const VInput = styled(Input, {
  backgroundColor: '#EFF1F999', // Opacity 60%
  borderWidth: 0,
  width: '100%',
  color: '#5E6366',
  placeholderTextColor: '#ABAFB1',
  fontSize: 12,
  fontWeight: 400,

  variants: {
    type: {
      email: {
        keyboardType: 'email-address',
        textContentType: 'emailAddress',
      },
      password: {
        secureTextEntry: true,
        textContentType: 'password',
        backgroundColor: 'transparent',
      },
      phone: {
        keyboardType: 'phone-pad',
        textContentType: 'telephoneNumber',
        backgroundColor: 'transparent',
      },
      otp: {
        keyboardType: 'number-pad',
        textContentType: 'oneTimeCode',
        backgroundColor: '#EDEDED',
        size: '$6',
        fontSize: 25,
        fontWeight: 500,
        textAlign: 'center',
        maxLength: 1,
      },
      date: {
        textContentType: 'birthdate',
        showSoftInputOnFocus: false,
      },
    },
    state: {
      error: {
        backgroundColor: '#FCF3F2',
        // opacity: 0.7,    // Add opacity to color
      },
      success: {
        backgroundColor: '#F0F9F6',
        // opacity: 0.7,
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

const VInputWrapper = styled(XStack, {
  alignItems: 'center',
  backgroundColor: '#EFF1F999', // Opacity 60%
  borderRadius: '$5',
  width: '100%',
  // flex: 1,
})

const VInputButton = styled(VButton, {
  circular: true,
  size: '$1.5',
  backgroundColor: 'transparent',

  variants: {
    iconLeft: {
      true: {
        ml: '$3',
      },
    },
    iconRight: {
      true: {
        mr: '$3',
      },
    },
  },
})

export const VInputCompound = withStaticProperties(VInputWrapper, {
  Button: VInputButton,
  Input: VInput,
})
