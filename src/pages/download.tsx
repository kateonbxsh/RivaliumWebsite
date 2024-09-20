import Button from "@/components/Button"
import styles from "@/style/pages/download/download.module.scss"
import { DiLinux, DiApple, DiWindows } from "react-icons/di";

export default function DownloadPage() {

    return <>
        <div className={styles.container}>
            <span className={styles.containerTitle}>DOWNLOAD</span>
            <div className="h-1/2 w-full my-5 flex flex-row items-center justify-evenly">
                <div className="m-2 w-1/2 h-full flex flex-col items-center">
                    <span className="text-sky-200 text-2xl">
                        Miminal specs required
                    </span>
                    <hr className="border-sky-200/[0.5] my-2 w-full center"/>
                    <ul className="text-sky-200/[0.7] text-xl">
                        <li>Intel Core i3 (6th gen or newer) or AMD equivalent</li>
                        <li>Nvidia GTX 750 Ti or AMD equivalent (2 GB VRAM)</li>
                        <li>4 GB RAM</li>
                        <li>1 - 2 GB disk space</li>
                        <li>Stable broadband space (1 Mbps upload/download)</li>
                        <li>Windows 7/8/8.1/10 (64-bit)</li>
                    </ul>
                </div>
                <div className="m-2 w-1/2 h-full flex flex-col items-center">
                    <span className="text-sky-200 text-2xl">
                        Recommended specs
                    </span>
                    <hr className="border-sky-200/[0.5] my-2 w-full"/>
                    <ul className="text-sky-200/[0.7] text-xl">
                        <li>Intel Core i5 (9th gen or newer) or AMD Ryzen 5</li>
                        <li>Nvidia GTX 1650 or AMD RX 570 (4 GB VRAM)</li>
                        <li>8 GB RAM</li>
                        <li>3 GB disk space</li>
                        <li>Low-latency broadband connection (5-10 Mbps upload/download)</li>
                        <li>Windows 10/11 (64-bit)</li>
                    </ul>
                </div>
            </div>
            <hr className="border-sky-200/[0.5] my-2 w-full"/>
            <span className="text-sky-200 text-2xl">
                Choose your preferred platform
            </span>
            <div className="flex flex-row w-full justify-center">
                <Button big type="main" content="WINDOWS" Icon={DiWindows}/>
                <Button big disabled content="MAC OS" Icon={DiApple}/>
                <Button big disabled content="LINUX" Icon={DiLinux}/>
            </div>
        </div>
    </>

}