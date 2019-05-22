import { landingPageStrings } from '../../localization/landingPageStrings'
import StandardButton from '../../library/button/StandardButton'
import { VnMap } from '../map/VnMap'
import theme from '../../theme'

export const OurDestinationsSection = () => {
  const openMessenger = () => {
    const url = 'https://www.facebook.com/messages/t/toursforbooks'
    window.open(url, '_blank')
  }

  return (
    <>
      <div className="our-destinations-section">
        <div className="our-destinations-section-headline">
          <span>{landingPageStrings.discoverTheWorld}</span>
          <span>{landingPageStrings.ourDestinations}</span>
        </div>
        <div className="our-destination-section-map">
          <VnMap />
        </div>
        <StandardButton
          name={landingPageStrings.contactUs}
          onClick={openMessenger}
        />
      </div>
      <style jsx>{`
        .our-destinations-section {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .our-destinations-section-headline {
          text-align: center;
          display: flex;
          flex-direction: column;
          margin-bottom: ${theme.spacing * 5}px;
        }
        .our-destinations-section-headline span:first-child {
          font-size: ${theme.font.size.small};
          text-transform: uppercase;
          color: ${theme.palette.blue[100]};
        }
        .our-destinations-section-headline span:last-child {
          font-family: ${theme.font.family.normal};
          font-size: ${theme.font.size.large};
          font-weight: 800;
          text-transform: capitalize;
          line-height: 0.9;
        }
        .our-destination-section-map {
          margin-bottom: ${theme.spacing * 5}px;
          width: 100%;
        }
      `}</style>
    </>
  )
}
