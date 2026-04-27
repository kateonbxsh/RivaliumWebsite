"use client";

import {AppProps} from 'next/app';
import '@/style/font.scss';
import '@/style/global.scss';
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

const NoLayout = ({children}: any) => <>{children}</>;

function App({ Component, pageProps }: AppProps) {

    const {pathname: path} = useRouter();
    let navbar = true, footer = true;
    if (path.startsWith("/portal")) {
        navbar = false;
        footer = false;
    }
    return <><Layout navbar={navbar} footer={footer}>
        <Component {...pageProps}/>
    </Layout>
    </>

}

export default App;