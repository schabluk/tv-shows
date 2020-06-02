import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

export default function useScreenQuery() {
  const theme = useTheme()

  return useMediaQuery(theme.breakpoints.up('md'))
}
