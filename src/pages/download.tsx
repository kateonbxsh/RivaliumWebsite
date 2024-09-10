import Button from "@/components/Button"
import styles from "@/style/pages/download/download.module.scss"

export default function DownloadPage() {

    return <>
        <div className={styles.container}>
            <span className={styles.containerTitle}>DOWNLOAD</span>
            <span className="text-sky-200">
                Choose your preferred platform.
            </span>
            <div>
                <Button big type="main" content="WINDOWS" />
                <Button big disabled content="MAC OS" />
                <Button big disabled content="LINUX" />
            </div>
        </div>
    </>

}