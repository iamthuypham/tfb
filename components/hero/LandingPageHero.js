import { landingPageStrings } from '../../localization/landingPageStrings'
import StandardButton from '../../library/button/StandardButton'
import theme from '../../theme'

export const LandingPageHero = () => {
  const handleScrollToView = item =>
    document.getElementById(item).scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <div className="landing-page-hero">
        <div className="landing-page-hero-headline">
          <span>{landingPageStrings.startYourAdventure}</span>
          <span>{landingPageStrings.discoverVietnam}</span>
        </div>
        <StandardButton
          name={landingPageStrings.exploreNow}
          value={landingPageStrings.exploreNow}
          outline={false}
          onClick={() => handleScrollToView('about')}
        />
      </div>
      <style jsx>{`
        .landing-page-hero {
          height: 35%;
        }
        .landing-page-hero,
        .landing-page-hero-headline {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          color: ${theme.palette.shade[0]};
        }
        .landing-page-hero-headline span:first-child {
          font-size: ${theme.font.size.superLarge};
          font-family: ${theme.font.family.normal};
          font-weight: 700;
          text-transform: uppercase;
          line-height: 1;
        }
        .landing-page-hero-headline span ~ span {
          font-size: ${theme.font.size.normal};
          text-transform: uppercase;
        }
      `}</style>
    </>
  )
}
