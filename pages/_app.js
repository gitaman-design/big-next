import 'tailwindcss/tailwind.css'
import 'antd/dist/antd.css';
import Header from './header';
import Footer from './footer';
import axios from 'axios';

axios.defaults.baseURL="https://app.bigradar.io/api"


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
  
}

export default MyApp
