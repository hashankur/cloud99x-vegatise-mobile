import { Link } from 'expo-router'
import React from 'react'
import type { StackProps, TabLayout, TabsTabProps } from 'tamagui'
import {
  AnimatePresence,
  H5,
  Paragraph,
  SizableText,
  Tabs,
  YStack,
  styled,
} from 'tamagui'

export default function IslandTabs({ tabs, children }) {
  const [tabState, setTabState] = React.useState<{
    currentTab: string
    /**
     * Layout of the Tab user might intend to select (hovering / focusing)
     */
    intentAt: TabLayout | null
    /**
     * Layout of the Tab user selected
     */
    activeAt: TabLayout | null
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabLayout | null
  }>({
    activeAt: null,
    currentTab: 'tab1',
    intentAt: null,
    prevActiveAt: null,
  })

  const setCurrentTab = (currentTab: string) => setTabState({ ...tabState, currentTab })
  const setIntentIndicator = (intentAt) => setTabState({ ...tabState, intentAt })
  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt })
  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState

  // 1 = right, 0 = nowhere, -1 = left
  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0
    }
    return activeAt.x > prevActiveAt.x ? -1 : 1
  })()

  const handleOnInteraction: TabsTabProps['onInteraction'] = (type, layout) => {
    if (type === 'select') {
      setActiveIndicator(layout)
    } else {
      setIntentIndicator(layout)
    }
  }

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$4"
      padding="$2"
      // height={150}
      flexDirection="column"
      // activationMode="manual"
      backgroundColor="white" // entire
      borderRadius="$4"
      // position="relative"
      w="100%"
      // h="100%"
      // minHeight={250}
      f={1}
      zIndex={-1}
    >
      <YStack>
        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Manage your account"
          gap="$2"
          backgroundColor="$bgAlt" // Tab group bg
          p="$1.5"
        >
          {/* Order of active and intent indicator matters relative to the tabs */}
          <AnimatePresence>
            {intentAt && (
              <TabsRovingIndicator
                borderRadius="$4"
                width={intentAt.width}
                height={intentAt.height}
                x={intentAt.x}
                y={intentAt.y}
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {activeAt && (
              <TabsRovingIndicator
                borderRadius="$4"
                theme="active"
                width={activeAt.width}
                height={activeAt.height}
                x={activeAt.x}
                y={activeAt.y}
              />
            )}
          </AnimatePresence>

          <Tabs.Tab
            flex={1}
            unstyled
            paddingVertical="$2"
            paddingHorizontal="$3"
            value="tab1"
            onInteraction={handleOnInteraction}
          >
            <SizableText fontWeight={600} fontSize="$2">
              {tabs[0]}
            </SizableText>
          </Tabs.Tab>
          <Tabs.Tab
            flex={1}
            unstyled
            paddingVertical="$2"
            paddingHorizontal="$3"
            value="tab2"
            onInteraction={handleOnInteraction}
          >
            <SizableText>{tabs[1]}</SizableText>
          </Tabs.Tab>
        </Tabs.List>
      </YStack>
      <AnimatePresence exitBeforeEnter custom={{ direction }} initial={false}>
        <AnimatedYStack key={currentTab}>
          {children}
          <YStack alignItems="center" my="$3">
            <Paragraph>Not Registered Yet?</Paragraph>
            <Paragraph color="red" fontWeight={500}>
              <Link href="/">Create An Account</Link>
            </Paragraph>
          </YStack>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  )
}

const TabsRovingIndicator = ({ active, ...props }: { active?: boolean } & StackProps) => {
  return (
    <YStack
      position="absolute"
      backgroundColor="white"
      // shadowRadius="$2"
      // shadowOffset={{ width: 1, height: 0 }}
      // shadowOpacity={0.25}
      // shadowColor="black"
      // opacity={0.7}
      animation="100ms"
      enterStyle={{
        opacity: 0,
      }}
      exitStyle={{
        opacity: 0,
      }}
      {...(active && {
        backgroundColor: '$color8',
        opacity: 0.6,
      })}
      {...props}
    />
  )
}

const AnimatedYStack = styled(YStack, {
  flex: 1,
  x: 0,
  opacity: 1,

  animation: '100ms',
  variants: {
    // 1 = right, 0 = nowhere, -1 = left
    direction: {
      ':number': (direction) => ({
        enterStyle: {
          x: direction > 0 ? -25 : 25,
          opacity: 0,
        },

        exitStyle: {
          zIndex: 0,
          x: direction < 0 ? -25 : 25,
          opacity: 0,
        },
      }),
    },
  } as const,
})
