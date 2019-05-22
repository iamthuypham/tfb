import { landingPageStrings } from '../../localization/landingPageStrings'
import IconCard from '../../library/card/IconCard'
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import theme from '../../theme'

export const FooterSection = () => (
  <>
    <div className="footer-section">
      <div className="social-links-large">
        <IconCard
          image=""
          faIcon={faWhatsapp}
          iconSize="lg"
          isIconButton
          iconBackgroundColor={theme.palette.shade[20]}
          title={landingPageStrings.textUs}
          description={landingPageStrings.phoneContact}
          flexDirection="column"
          justifyContent="center"
          padding={`${theme.spacing}px`}
        />
        <IconCard
          image=""
          faIcon={faEnvelope}
          iconSize="lg"
          isIconButton
          iconBackgroundColor={theme.palette.shade[20]}
          title={landingPageStrings.emailSupport}
          description={landingPageStrings.emailContact}
          flexDirection="column"
          justifyContent="center"
          padding={`${theme.spacing}px`}
        />
        <IconCard
          image=""
          faIcon={faTwitter}
          iconSize="lg"
          isIconButton
          iconBackgroundColor={theme.palette.shade[20]}
          title={landingPageStrings.twitter}
          description={landingPageStrings.twitterHandle}
          flexDirection="column"
          justifyContent="center"
          padding={`${theme.spacing}px`}
        />
        <IconCard
          image=""
          faIcon={faFacebookF}
          iconSize="lg"
          isIconButton
          iconBackgroundColor={theme.palette.shade[20]}
          title={landingPageStrings.facebook}
          description={landingPageStrings.facebookHandle}
          flexDirection="column"
          justifyContent="center"
          padding={`${theme.spacing}px`}
        />
      </div>
      <div className="copyright">
        <div className="brand">
          <img src="/static/logo.png" />
        </div>
        <span className="brand-name">
          {landingPageStrings.vietnamtours} {landingPageStrings.forbooks}
        </span>
        <span>{landingPageStrings.blvAddress}</span>
        <div className="icon">
          <IconCard
            image=""
            faIcon={faTwitter}
            isIconButton
            iconBackgroundColor={theme.palette.shade[0]}
            padding={`${theme.spacing}px`}
          />
          <IconCard
            image=""
            faIcon={faFacebookF}
            isIconButton
            iconBackgroundColor={theme.palette.shade[0]}
            padding={`${theme.spacing}px`}
          />
          <IconCard
            image=""
            faIcon={faInstagram}
            isIconButton
            iconBackgroundColor={theme.palette.shade[0]}
            padding={`${theme.spacing}px`}
          />
        </div>
        <div className="content">
          <span>&copy; {landingPageStrings.copyright}</span>
          <span> {landingPageStrings.betterlifevietnam}</span>
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .footer-section {
          width: 100%;
          padding: 5% 15%;
          background-color: ${theme.palette.blue[0]};
        }
        .social-links-large {
          display: flex;
          justify-content: space-between;
          padding-top: ${theme.spacing}px;
          padding-bottom: ${theme.spacing}px;
        }
        .copyright {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: ${theme.spacing * 5}px;
        }
        .copyright .brand img {
          width: ${theme.spacing * 6}px;
          height: ${theme.spacing * 6}px;
        }
        .copyright .brand-name {
          font-family: ${theme.font.family.title};
          font-size: ${theme.font.size.medium};
          color: ${theme.palette.blue[100]};
          text-transform: capitalize;
        }
        .copyright .icon {
          display: flex;
        }
        .copyright .content {
          padding-top: ${theme.spacing * 5}px;
          padding-bottom: ${theme.spacing * 5}px;
          font-size: ${theme.font.size.small};
          text-transform: uppercase;
        }
        .copyright .content span:last-child {
          color: ${theme.palette.blue[100]};
          font-weight: 600;
        }
      `}
    </style>
  </>
)
