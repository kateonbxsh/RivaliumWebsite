import {AppProps} from 'next/app';
import '@/style/font.scss';
import '@/style/global.scss';
import Layout from '@/components/Layout';
import { usePathname } from 'next/navigation';

const NoLayout = ({children}: any) => <>{children}</>;

function App({ Component, pageProps }: AppProps) {

    const path = usePathname();
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