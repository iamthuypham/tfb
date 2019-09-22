import { useState, useEffect } from 'react'
import { config } from '../config'
import Card from '../library/card/Card'
import { Section } from '../library/section/Section'
import theme from '../theme'
import { NavBar } from '../library/nav/NavBar'
import Head from 'next/head'
import Link from 'next/link'

const Blog = props => {
  const [items, setItems] = useState([])
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
          setItems(data.items)
        })
    }
  }, [setItems])
  console.log(items, props)
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
        <NavBar
          logoUrl="/static/logo.png"
          menuItems={['home', 'tours', 'about', 'contact']}
        />
        <Section
          id="blog"
          height="auto"
          padding="100px 30px 30px 30px"
          backgroundColor="white"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {items.map(item => (
            <Card
              key={item.guid._}
              cardImg={null}
              width="100%"
              padding={`${theme.spacing * 3}px`}
              isReverse={false}
              isInverse={false}
              setIsMouseEnter={() => null}
              margin="0 0 10px 0"
            >
              <Link
                href={`/blog/[title]?id=${
                  item.guid._.match('[^/]*$')[0]
                }&title=${item.title}&pubDate=${item.pubDate}`}
                as={`/blog/${item.title}`}
              >
                <a>
                  <h1>{item.title}</h1>
                  <h4>{new Date(item.pubDate).toLocaleString()}</h4>
                </a>
              </Link>
            </Card>
          ))}
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
        a:link,
        a:visited {
          color: ${theme.palette.shade[80]};
          text-decoration: none;
          cursor: pointer;
        }

        a:link:active,
        a:visited:active {
          color: ${theme.palette.shade[80]};
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

export default Blog
