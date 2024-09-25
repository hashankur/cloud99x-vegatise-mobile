import React,{ useEffect, useState } from 'react'
import { VButton, VButtonGradient } from 'components/ui/Button'
import { VText } from 'components/ui/Text'
import { router } from 'expo-router'
import { Image, ScrollView, XStack, YStack } from 'tamagui'
import { Iconify } from 'react-native-iconify'
import * as Location from 'expo-location'
import * as Camera from 'expo-camera'
import * as Media from 'expo-media-library'

import checkPermissionImage from '../../assets/images/permission2.png'

export default function PermissionRequestScreen() {
    const [locationPermission, setLocationPermission] = useState("");
    const [cameraPermission, setCameraPermission] = useState("");
    const [mediaPermission, setMediaPermission] = useState("");

    useEffect(() => {
        (async () =>{
            const { status: locationStatus } = await Location.requestBackgroundPermissionsAsync();
            setLocationPermission(locationStatus);

            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
            setLocationPermission(cameraStatus);

            const { status: mediaStatus } = await Media.requestPermissionsAsync();
            setMediaPermission(mediaStatus);
        })()

    }, [])

    const requestLocationPermission = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        setLocationPermission(status);
    }

    const requestCameraPermission = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setCameraPermission(status);
    }

    const requestMediaPermission = async () => {
        const { status } = await Media.requestPermissionsAsync();
        setMediaPermission(status);
    }

    const permissionIcon = {
        granted: <Iconify icon="mage:information-circle-fill" color="gray" size={25} />,
        notGranted: <Iconify icon="mage:information-circle" color="gray" size={25} />
    }

    const isAllGranted = 
      locationPermission === 'granted' && 
      cameraPermission === 'granted' && 
      mediaPermission === 'granted' && true;

  return (
    <ScrollView>
    <YStack flex={1} alignItems="center" gap="$5" px="$5"  bg="white" pb='$5'>
      <YStack gap="$7" w="100%">
        <YStack gap='$5' alignItems='center'>
          <VText type="h2" mb="$2" textAlign='center'>Check permissions </VText>
          <Image source={checkPermissionImage} width={300} objectFit="contain"/>
            <VText mb="$2" textAlign='center'>To begin accurately detecting trip information such as start and end points and locating recurring driving patterns, the following accesses are required.</VText>
        </YStack>
        <YStack alignItems='center' gap='$3'>
            <YStack>
                <XStack  width={'100%'} justifyContent='space-between' alignItems='center'>
                    <VText type='h2'>Locations</VText>
                    <YStack alignItems='center'>
                        {locationPermission === 'granted' ? permissionIcon.granted : permissionIcon.notGranted}
                        {locationPermission === 'granted' ? (<VText color="green">Granted</VText>) : (
                    <VButton onPress={requestLocationPermission} width={'$12'} height={'$3'} color={'$backgroundTransparent'}>
                      <VText color="red">Grant Permission</VText>
                    </VButton>
                  )}
                    </YStack>
                </XStack>
                <VText>This permission allows your device to capture and pass location details to this application. “Precise” locations should be enabled “while using the app”, so each trip can be reliably recorded</VText>
            </YStack>
            <YStack>
                <XStack  width={'100%'} justifyContent='space-between' alignItems='center'>
                    <VText type='h2'>Camera</VText>
                    <YStack alignItems='center'>
                        {cameraPermission === 'granted' ? permissionIcon.granted : permissionIcon.notGranted}
                        {cameraPermission === 'granted' ? (<VText color="green">Granted</VText>) : (
                    <VButton onPress={requestCameraPermission} width={'$12'} height={'$3'} color={'$backgroundTransparent'}>
                      <VText color="red">Grant Permission</VText>
                    </VButton>
                  )}
                    </YStack>
                </XStack>
                <VText>This permission allows your device to capture and pass location details to this application. “Precise” locations should be enabled “while using the app”, so each trip can be reliably recorded</VText>
            </YStack>
            
            <YStack>
                <XStack  width={'100%'} justifyContent='space-between' alignItems='center'>
                    <VText type='h2'>Storage</VText>
                    <YStack alignItems='center'>
                        {mediaPermission === 'granted' ? permissionIcon.granted : permissionIcon.notGranted}
                        {mediaPermission === 'granted' ? (<VText color="green">Granted</VText>) : (
                    <VButton onPress={requestMediaPermission} width={'$12'} height={'$3'} color={'$backgroundTransparent'}>
                      <VText color="red">Grant Permission</VText>
                    </VButton>
                  )}
                    </YStack>
                </XStack>
                <VText>This permission allows your device to capture and pass location details to this application. “Precise” locations should be enabled “while using the app”, so each trip can be reliably recorded</VText>
            </YStack>
        </YStack>
        <VButtonGradient>
        <VButtonGradient.Button
              type="gradient"
              onPress={() => router.navigate('/')}
              disabled={!isAllGranted}
              style={{ opacity: isAllGranted ? 1 : 0.5 }}
            >
            Next
          </VButtonGradient.Button>
        </VButtonGradient>
        
      </YStack>
    </YStack>
    </ScrollView>
  )
}
