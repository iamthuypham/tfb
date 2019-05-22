import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../theme'

export const useFortAwesome = (faIcon, iconSize) => (
  <FontAwesomeIcon
    icon={faIcon}
    color={theme.palette.blue[100]}
    size={iconSize}
  />
)
