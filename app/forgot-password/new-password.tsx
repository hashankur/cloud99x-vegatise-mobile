import { VInput } from 'components/ui/Input'
import { Controller, useForm } from 'react-hook-form'
import { Text } from 'react-native'
import { Button, H4, Label, Paragraph, XStack, YStack } from 'tamagui'

export default function CreateNewPasswordScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })
  const onSubmit = (data) => console.log(data)

  return (
    <YStack flex={1} alignItems="center" gap="$1" px="$5" pt="$5" bg="white">
      <H4>Create New Password</H4>

      <XStack flexWrap="wrap" mt="$5">
        <Label fontSize="$2" color="$label" fontWeight={600} width="100%">
          Enter New Password
        </Label>
        <Controller
          control={control}
          rules={{
            minLength: 8,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <VInput
              type="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}
        <Paragraph fontSize="$1" color="$label" mt="$2">
          Password must be at least Characters and must contain at least a Capital Letter,
          a Number and a Special Character.
        </Paragraph>
      </XStack>

      <XStack flexWrap="wrap" mt="$5">
        <Label fontSize="$2" color="$label" fontWeight={600} width="100%">
          Confirm Password
        </Label>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <VInput
              type="password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="confirmPassword"
        />
        {errors.confirmPassword && <Text>This is required.</Text>}

        <Button
          w="100%"
          backgroundColor="$btn"
          color="white"
          fontWeight={600}
          mt="$8"
          // onPress={() => router.navigate('/login')}
          onPress={handleSubmit(onSubmit)}
        >
          Save Changes
        </Button>
      </XStack>
    </YStack>
  )
}
