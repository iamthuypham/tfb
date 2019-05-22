import { landingPageStrings } from '../../localization/landingPageStrings'
import IconCard from '../../library/card/IconCard'
import TargetIcon from 'react-svg-loader!../../static/target.svg'
import theme from '../../theme'

export const WelcomeSection = () => {
  return (
    <>
      <div>
        <div className="welcome-section-intro">
          <div className="welcome-section-headline">
            <span>{landingPageStrings.bestTravelBookingService}</span>
            <span className="main">{landingPageStrings.welcomeTo}</span>
            <span className="main">{landingPageStrings.toursforbooks}</span>
          </div>
          <div className="welcome-section-intro-content">
            <p>{landingPageStrings.toursforbooksDescription}</p>
            <a>{landingPageStrings.readMore}</a>
          </div>
        </div>

        <div className="welcome-section-features">
          <IconCard
            image="/static/service.png"
            isIconButton
            iconSize="5x"
            iconBackgroundColor={theme.palette.shade[20]}
            title={landingPageStrings.comprehensiveServicesTitle}
            description={landingPageStrings.comprehensiveServices}
            flexDirection="column"
            padding={`${theme.spacing}px`}
          />
          <IconCard
            image={<TargetIcon />}
            isImageComponent
            isIconButton
            iconSize="5x"
            iconBackgroundColor={theme.palette.shade[20]}
            title={landingPageStrings.customerFocusTitle}
            description={landingPageStrings.customerFocus}
            flexDirection="column"
            isInverse
            padding={`${theme.spacing}px`}
          />
          <IconCard
            image="/static/flip-flops.png"
            isIconButton
            iconSize="5x"
            iconBackgroundColor={theme.palette.shade[20]}
            title={landingPageStrings.responsibleTravelTitle}
            description={landingPageStrings.responsibleTravel}
            flexDirection="column"
            padding={`${theme.spacing}px`}
          />
        </div>
      </div>
      <style jsx>{`
        .welcome-section-intro {
          display: flex;
          justify-content: center;
          margin-bottom: ${theme.spacing * 4}px;
        }
        .welcome-section-headline {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
          margin-right: 3%;
        }
        .welcome-section-headline span:first-child {
          font-size: ${theme.font.size.small};
          text-transform: uppercase;
        }
        .welcome-section-headline .main {
          font-family: ${theme.font.family.normal};
          font-size: ${theme.font.size.extraLarge};
          font-weight: 800;
          color: ${theme.palette.blue[100]};
          text-transform: capitalize;
          line-height: 0.9;
        }
        .welcome-section-intro-content {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .welcome-section-intro-content a {
          font-size: ${theme.font.size.small};
          text-transform: uppercase;
          font-weight: 600;
        }
        .welcome-section-features {
          display: flex;
        }
      `}</style>
    </>
  )
}
