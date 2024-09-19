import { forwardRef } from 'react'
import {
  ListItemFrame,
  ListItemProps,
  ListItemSubtitle,
  ListItemText,
  ListItemTitle,
  styled,
  themeable,
  useListItem,
} from 'tamagui'

const CustomListItemFrame = styled(ListItemFrame, {
  // unstyled: true,
  px: 0,
})

const CustomListItemTitle = styled(ListItemTitle, {
  color: '#2E2E2E',
  fontSize: 16,
  fontWeight: 500,
})

const CustomListItemSubtitle = styled(ListItemSubtitle, {
  color: '#716A6A',
  fontSize: 12,
  textTransform: 'capitalize',
})

export const VListItem = CustomListItemFrame.styleable((propsIn, ref) => {
  const { props } = useListItem(propsIn, {
    Title: CustomListItemTitle,
    Subtitle: CustomListItemSubtitle,
  })
  return <CustomListItemFrame {...props} ref={ref} />
})
