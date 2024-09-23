import { ScrollView, Separator, YGroup, YStack } from 'tamagui'
import { router } from 'expo-router'
import { VText } from 'components/ui/Text'
import { VButtonGradient } from 'components/ui/Button'
import { Iconify } from 'react-native-iconify'
import { VListItem } from 'components/ui/ListItem'

export default function RequiredStepsScreen() {
  const statusIcons = {
    pending: (
      <Iconify icon="heroicons:exclamation-circle-20-solid" size={20} color="#ECAD0B" />
    ),
    review: <Iconify icon="heroicons:clock-20-solid" size={20} color="#ABAFB1" />,
    rejected: <Iconify icon="heroicons:x-circle-20-solid" size={20} color="#FA3C3C" />,
    approved: (
      <Iconify icon="heroicons:check-circle-20-solid" size={20} color="#71BA78" />
    ),
  }

  const listItems = [
    {
      title: 'Personal Information',
      status: 'pending',
      slug: 'personalInformation',
    },
    {
      title: 'Vehicle Information',
      status: 'pending',
      slug: 'vehicleInformation',
    },
    {
      title: 'Address and Routes',
      status: 'pending',
      slug: 'addressRoutes',
    },
    {
      title: 'Driving License',
      status: 'pending',
    },
    {
      title: 'NIC Information',
      status: 'pending',
    },
    {
      title: 'Vehicle Image',
      status: 'pending',
    },
    {
      title: 'Vehicle Registration Document',
      status: 'pending',
    },
    {
      title: 'Revenue License',
      status: 'pending',
    },
    {
      title: 'Vehicle Insurance',
      status: 'pending',
    },
    {
      title: 'Billing Proof (Optional)',
      status: 'pending',
    },
  ]

  return (
    <ScrollView>
      <YStack flex={1} alignItems="center" gap="$5" px="$5" py="$5" bg="white">
        <YStack gap="$5" w="100%">
          <YStack alignItems="center">
            <VText type="h2" mb="$2">
              Required Steps
            </VText>
            <VText>Here's What You Need To Do To Set Up Your Account</VText>
          </YStack>

          <VText type="h3">Submitted</VText>

          <YGroup alignSelf="center" size="$5" separator={<Separator />}>
            {listItems.map((item, index) => (
              <YGroup.Item key={index}>
                <VListItem
                  hoverTheme
                  pressTheme
                  title={item.title}
                  subTitle={item.status}
                  icon={
                    item.status === 'pending'
                      ? statusIcons.pending
                      : item.status === 'review'
                        ? statusIcons.review
                        : item.status === 'rejected'
                          ? statusIcons.rejected
                          : statusIcons.approved
                  }
                  iconAfter={
                    <Iconify icon="heroicons:chevron-right-20-solid" size={20} />
                  }
                  onPress={() => {
                    router.navigate(`/required-steps/${item.slug}`)
                  }}
                />
              </YGroup.Item>
            ))}
          </YGroup>

          <VButtonGradient>
            <VButtonGradient.Button
              type="gradient"
              onPress={() => {
                router.navigate('/')
              }}
            >
              Next
            </VButtonGradient.Button>
          </VButtonGradient>
        </YStack>
      </YStack>
    </ScrollView>
  )
}
