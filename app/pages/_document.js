import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyCustomDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return { ...page, styleTags } // return styles collected
	}

	render () {
		return (
			<html>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<script src="https://cdn.polyfill.io/v2/polyfill.min.js"/>
				<title>Juddle | Re-imagine Recruitment</title>
				<meta name="description" content="Juddle is an innovative new recruiting technology, driven by artificial intelligence. Sign up below and be one of the first to receive our beta app." />
				<meta property="og:description" content="Juddle is an innovative new recruiting technology, driven by artificial intelligence. Sign up below and be one of the first to receive our beta app." />
				<meta property="og:type" content="business" />
				<meta property="og:title" content="Juddle | Re-imagine Recruitment" />
				<meta property="og:url" content="http://juddle.com/" />
				<meta property="og:image" content="http://juddle.com/images/juddle-web-image.jpg" />
				<link rel="apple-touch-icon" sizes="180x180" href="../static/images/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="../static/images/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="../static/images/favicon-16x16.png" />
				<link rel="manifest" href="../static/images/site.webmanifest" />
				<link rel="mask-icon" href="../static/images/safari-pinned-tab.svg" color="#5bbad5" />
				<meta name="msapplication-TileColor" content="#2b5797" />
				<meta name="theme-color" content="#ffffff" />
				<meta name="msapplication-config" content="../static/images/browserconfig.xml" />
				<link rel='shortcut icon' type='image/x-icon' href='../static/images/favicon.ico' />
				{this.props.styleTags}
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
			</html>
		)
	}
}