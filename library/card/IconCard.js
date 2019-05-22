import { useFortAwesome } from '../../hooks/useFortAwesome'
import theme from '../../theme'

const IconCard = ({
  image,
  isImageComponent,
  faIcon,
  iconSize,
  isIconButton,
  iconBackgroundColor,
  isInverse,
  title,
  description,
  padding,
  flexDirection = 'row',
  justifyContent = 'flex-start',
  backgroundImageUrl
}) => {
  const iconWidthHeight = () => {
    switch (iconSize) {
      case 'lg':
        return theme.spacing * 3.5
      case '2x':
        return theme.spacing * 4
      case '5x':
        return theme.spacing * 7
      default:
        return theme.spacing * 2.5
    }
  }
  const icon = useFortAwesome(faIcon, iconSize)
  return (
    <>
      <div className="icon-card">
        <div className="icon">
          {faIcon ? icon : isImageComponent ? image : <img src={image} />}
        </div>
        <span className="title">{title}</span>
        <p>{description}</p>
      </div>
      <style jsx>
        {`
          .icon-card {
            display: flex;
            flex-direction: ${flexDirection};
            justify-content: ${justifyContent};
            align-items: center;
            padding: ${padding};
            ${backgroundImageUrl
              ? `background-image: url('${backgroundImageUrl}'); background-repeat: no-repeat; background-position: center; background-size: cover`
              : ''};
          }
          .icon-card span {
            font-size: ${theme.font.size.normal};
            text-transform: capitalize;
            font-weight: 600;
            margin-top: ${theme.spacing}px;
          }
          .icon {
            ${isIconButton
              ? `border-radius: 50%; 
              background-color: ${isInverse ? '#6684f2' : iconBackgroundColor};
              height:${iconWidthHeight()}px;
              width: ${iconWidthHeight()}px;
              display: flex;
              justify-content: center;
              align-items: center;`
              : ''}
          }
          .icon img {
            width: ${iconWidthHeight() / 3}px;
          }
          .icon-card .title {
            margin-bottom: ${theme.spacing}px;
          }
        `}
      </style>
    </>
  )
}

export default IconCard
