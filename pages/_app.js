import Layout from '../components/Layout';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import '../styles/globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
