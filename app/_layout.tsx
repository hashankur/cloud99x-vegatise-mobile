import '../tamagui-web.css'

import { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { SplashScreen, Stack } from 'expo-router'
import { Provider } from './Provider'
import {
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
  useFonts,
} from '@expo-google-fonts/poppins'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '/',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontLoaded, fontError] = useFonts({
    // Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    // InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
    Poppins300: Poppins_300Light,
    Poppins300Italic: Poppins_300Light_Italic,
    Poppins400: Poppins_400Regular,
    Poppins400Italic: Poppins_400Regular_Italic,
    Poppins500: Poppins_500Medium,
    Poppins500Italic: Poppins_500Medium_Italic,
    Poppins600: Poppins_600SemiBold,
    Poppins600Italic: Poppins_600SemiBold_Italic,
    Poppins700: Poppins_700Bold,
    Poppins700Italic: Poppins_700Bold_Italic,
    Poppins800: Poppins_800ExtraBold,
    Poppins800Italic: Poppins_800ExtraBold_Italic,
    Poppins900: Poppins_900Black,
    Poppins900Italic: Poppins_900Black_Italic,
  })

  useEffect(() => {
    if (fontLoaded || fontError) {
      // Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
      SplashScreen.hideAsync()
    }
  }, [fontLoaded, fontError])

  if (!fontLoaded && !fontError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <Provider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="login/index"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="login/otp"
            options={{
              headerShadowVisible: false,
              headerTitle: '',
            }}
          />

          <Stack.Screen
            name="forgot-password/index"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="forgot-password/otp"
            options={{
              headerShadowVisible: false,
              headerTitle: '',
            }}
          />

          <Stack.Screen
            name="forgot-password/new-password"
            options={{
              headerShadowVisible: false,
              headerTitle: '',
            }}
          />

          <Stack.Screen
            name="create-account/index"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="create-account/otpRequest"
            options={{
              headerShadowVisible: false,
              headerTitle: '',
            }}
          />

          <Stack.Screen
            name="create-account/otpEnter"
            options={{
              headerShadowVisible: false,
              headerTitle: '',
            }}
          />

          <Stack.Screen
            name="create-account/otpVerify"
            options={{
              headerShadowVisible: false,
              headerTitle: '',
            }}
          />

          <Stack.Screen
            name="required-steps/index"
            options={{
              headerShadowVisible: false,
              headerTitle: '',
            }}
          />

          <Stack.Screen
            name="required-steps/personalInformation"
            options={{
              headerTitle: 'Getting Started',
              statusBarColor: '#C23030',
              headerStyle: {
                backgroundColor: '#C23030',
              },
              headerTitleStyle: {
                color: '#F4F4F4',
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />

          <Stack.Screen
            name="required-steps/vehicleInformation"
            options={{
              headerTitle: 'Getting Started',
              statusBarColor: '#C23030',
              headerStyle: {
                backgroundColor: '#C23030',
              },
              headerTitleStyle: {
                color: '#F4F4F4',
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />

          <Stack.Screen
            name="required-steps/addressRoutes"
            options={{
              headerTitle: 'Getting Started',
              statusBarColor: '#C23030',
              headerStyle: {
                backgroundColor: '#C23030',
              },
              headerTitleStyle: {
                color: '#F4F4F4',
                fontSize: 20,
                fontWeight: 'bold',
              },
            }}
          />

          <Stack.Screen
            name="permission/checkPermissions"
            options={{
              headerShadowVisible: false,
              headerTitle: '',
            }}
          />

          <Stack.Screen
            name="permission/index"
            options={{
              headerShadowVisible: false,
              headerTitle: '',
            }}
          />

          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="modal"
            options={{
              title: 'Tamagui + Expo',
              presentation: 'modal',
              animation: 'slide_from_right',
              gestureEnabled: true,
              gestureDirection: 'horizontal',
            }}
          />
        </Stack>
      </ThemeProvider>
    </Provider>
  )
}
