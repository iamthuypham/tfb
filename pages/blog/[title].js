import { useState, useEffect } from 'react'
import { Section } from '../../library/section/Section'
import theme from '../../theme'
import { NavBar } from '../../library/nav/NavBar'
import Head from 'next/head'
import ReactHtmlParser from 'react-html-parser'
import { useRouter } from 'next/router'
import { config } from '../../config'

const Article = props => {
  const [items, setItems] = useState([])
  const [item, setItem] = useState(null)
  const router = useRouter()
  useEffect(() => {
    if (items.length === 0) {
      fetch(`${config.baseUri}/getBlog`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          const items = data.items
          setItems(items)
        })
    }
  }, [setItems])

  useEffect(() => {
    if (items.length !== 0 && !item && router.query.id) {
      const item = items.find(item => {
        return item.guid._.match('[^/]*$')[0] === router.query.id
      })
      setItem(item)
    }
  }, [items, setItem])

  console.log(props, router)
  return (
    <>
      <Head>
        <title>Tours For Books Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah|Lato:400,700,900"
          rel="stylesheet"
        />
      </Head>
      <div>
        <NavBar logoUrl="/static/logo.png" menuItems={[]} />
        <Section
          id="article"
          height="auto"
          padding="100px 17% 30px 17%"
          backgroundColor="white"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <h6>{new Date(router.query.pubDate).toLocaleString()}</h6>
          <h1>{router.query.title}</h1>
          {item && <div>{ReactHtmlParser(item.content_encoded)}</div>}
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
          font-size: ${theme.font.size.medium};
          font-family: ${theme.font.family.normal};
          color: ${theme.palette.shade[80]};
        }
        p {
          margin: 0;
          line-height: 1.5;
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
        h6 {
          align-self: start;
        }
      `}</style>
    </>
  )
}

export default Article
