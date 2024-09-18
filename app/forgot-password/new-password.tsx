import { PasswordInput } from 'components/forms/password'
import { VButton } from 'components/ui/Button'
import { VInput } from 'components/ui/Input'
import { VText } from 'components/ui/Text'
import { Controller, useForm } from 'react-hook-form'
import { YStack } from 'tamagui'

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
    <YStack flex={1} alignItems="center" gap="$10" px="$5" pt="$5" bg="white">
      <VText type="h2">Create New Password</VText>

      <YStack w="100%" gap="$2">
        <VText type="label">Enter New Password</VText>
        <Controller
          control={control}
          rules={{
            minLength: 8,
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PasswordInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {/* {errors.password && <Text>This is required.</Text>} */}

        <VText color="$label">
          Password must be at least
          <VText color="green" fontWeight={600}> 8 Characters </VText>
          and must contain at least
          <VText color="green" fontWeight={600}> a Capital Letter</VText>,
          <VText color="green" fontWeight={600}> a Number </VText>
          and a
          <VText color="green" fontWeight={600}> Special Character</VText>.
        </VText>
      </YStack>

      <YStack w="100%" gap="$2">
        <VText type="label">Confirm Password</VText>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <PasswordInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="confirmPassword"
        />
        {/* {errors.confirmPassword && <Text>This is required.</Text>} */}
      </YStack>

      <VButton
        type="primary"
        // disabled
        // onPress={() => router.navigate('/login')}
        onPress={handleSubmit(onSubmit)}
      >
        Save Changes
      </VButton>
    </YStack>
  )
}
