import styles from '@/style/pages/error/error.module.scss'
import {NextPage} from 'next/types'

const ErrorPage: NextPage = () => {

    return <div className={styles.main}>
        <span className={styles.error}>404 NOT FOUND</span>
        <span className={styles.errorDesc}>We’re sorry, but the page you’re looking for can’t be found</span>
    </div>

}

export default ErrorPage;