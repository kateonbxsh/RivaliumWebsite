import {AppProps} from 'next/app';
import '@/style/font.scss';
import '@/style/global.scss';
import '@/style/pages/main/navbar.scss'
import '@/style/pages/main/main.scss'
import '@/style/components/buttons.scss'
import HomeLayout from '@/components/HomeLayout';

function App({ Component, pageProps }: AppProps) {

    const Layout = HomeLayout;

    return <Layout>
        <Component {...pageProps}/>
    </Layout>

}

export default App;