import { useState, useEffect } from 'react'
import Head from 'next/head'
import theme from '../theme'
import { NavBar } from '../library/nav/NavBar'
import { Section } from '../library/section/Section'
import { LandingPageHero } from '../components/hero/LandingPageHero'
import { WelcomeSection } from '../components/section/WelcomeSection'
import { PopularToursSection } from '../components/section/PopularToursSection'
import { OurDestinationsSection } from '../components/section/OurDestinationsSection'
import { TfbVideoSection } from '../components/section/TfbVideoSection'
import { FaqSection } from '../components/section/FaqSection'
import { GetInspiredSection } from '../components/section/GetInspiredSection'
import { FooterSection } from '../components/section/FooterSection'

const Index = () => {
  const GTM_TRACKING_ID = 'GTM-MPW5FHT'
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  if (!loaded) {
    return null
  }

  return (
    <>
      <Head>
        <title>Tours For Books</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Lato:400,700,900"
          rel="stylesheet"
        />
        <script
          id="gtm-js"
          async
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GTM_TRACKING_ID}');
        `
          }}
        />
      </Head>
      <div>
        <NavBar
          logoUrl="/static/logo.png"
          menuItems={['home', 'tours', 'about', 'contact']}
        />
        <Section
          id="home"
          height="100vh"
          padding="0px"
          backgroundColor="grey"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          backgroundImage="/static/hero.jpg"
        >
          <LandingPageHero />
        </Section>
        <Section id="about" padding="10%" backgroundColor="white">
          <WelcomeSection />
        </Section>
        <Section id="tours" padding="0px" backgroundColor="white">
          <PopularToursSection />
        </Section>
        <Section padding="10%" backgroundColor="white">
          <OurDestinationsSection />
        </Section>
        <Section padding="0px" backgroundColor="white">
          <TfbVideoSection />
        </Section>
        <Section padding="10%" backgroundColor="white">
          <FaqSection />
        </Section>
        {/* <Section padding="0px" backgroundColor="white">
          <GetInspiredSection />
        </Section> */}
        <Section id="contact" padding="0px" backgroundColor="white">
          <FooterSection />
        </Section>
      </div>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
        body,
        input,
        textarea,
        button {
          font-size: ${theme.font.size.normal};
          font-family: ${theme.font.family.normal};
          color: ${theme.palette.shade[80]};
        }
        p {
          margin: 0;
        }
        a {
          cursor: pointer;
        }
        a:hover {
          color: ${theme.palette.orange[100]};
        }
        button {
          font-size: ${theme.font.size.small};
        }
        ::placeholder {
          text-transform: capitalize;
        }
      `}</style>
    </>
  )
}

export default Index
