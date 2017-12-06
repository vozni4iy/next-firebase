import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import { Provider } from 'react-redux'
import configureStore from 'src/lib/GetStore'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = (
      <style dangerouslySetInnerHTML={{ __html: styleSheet.rules().map(rule => rule.cssText).join('\n') }} />
    )
    return { ...page, styles }
  }

  render () {
    const store = configureStore()
    return (
      <html>
        <Head>
          <title>Bolerplate</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src="SCRIPT_SRC"></script>
        </Head>
        <body>
            <Provider store={store}>
              <Main />
            </Provider>
          <NextScript />
        </body>
      </html>
    )
  }
}
