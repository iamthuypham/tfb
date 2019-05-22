const dev = process.env.NODE_ENV !== 'production'

const server = dev
  ? 'http://locahost:3000'
  : 'https://www.vietnamtoursforbooks.com'

const baseUri = dev
  ? `http://localhost:5001/${process.env.PROJECT_ID}/${
      process.env.REACT_APP_ZONE1
    }`
  : `https://${process.env.REACT_APP_ZONE1}-${process.env.PROJECT_ID}.${
      process.env.REACT_APP_ZONE2
    }`

exports.config = {
  baseUri,
  server
}
