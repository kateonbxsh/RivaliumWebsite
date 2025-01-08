import Button from "@/components/Button"
import { apiUrl } from "@/components/constant";
import Head from "next/head";
import Link from "next/link";
import { DiLinux, DiApple, DiWindows } from "react-icons/di";

export default function DownloadPage() {

    return <>
        <Head>
            <title>Download Rivalium - The Realm of Rivals</title>
        </Head>
        <main className="w-full h-screen relative">
            <div className="w-full flex flex-row justify-center">
                <h1 className="title text-4xl md:text-[5rem] p-10 mt-20 md:mt-[150px] md:mt-[">DOWNLOAD - PRE-ALPHA</h1>
            </div>
            <div className="bg-backblue opacity-90 md:px-[10%] w-full p-5">
                <div className="w-full my-5 flex flex-row items-start justify-evenly secondary-text">
                    <div className="m-2 w-1/2 h-full flex flex-col items-center">
                        <span className="text-sky-200 md:text-2xl text-xs">
                            Miminal specs required
                        </span>
                        <hr className="border-sky-200/[0.5] my-2 w-full center"/>
                        <ul className="text-sky-200/[0.7] md:text-lg text-xs scrollbar-thin">
                            <li>Intel Core i3 (6th gen or newer) or AMD equivalent</li>
                            <li>Nvidia GTX 750 Ti or AMD equivalent (2 GB VRAM)</li>
                            <li>4 GB RAM</li>
                            <li>1 - 2 GB disk space</li>
                            <li>Stable broadband space (1 Mbps upload/download)</li>
                            <li>Windows 7/8/8.1/10 (64-bit)</li>
                        </ul>
                    </div>
                    <div className="m-2 w-1/2 h-full flex flex-col items-center">
                        <span className="text-sky-200 md:text-2xl text-xs">
                            Recommended specs
                        </span>
                        <hr className="border-sky-200/[0.5] my-2 w-full"/>
                        <ul className="text-sky-200/[0.7] md:text-lg text-xs scrollbar-thin">
                            <li>Intel Core i5 (9th gen or newer) or AMD Ryzen 5</li>
                            <li>Nvidia GTX 1650 or AMD RX 570 (4 GB VRAM)</li>
                            <li>8 GB RAM</li>
                            <li>3 GB disk space</li>
                            <li>Low-latency broadband connection (5-10 Mbps upload/download)</li>
                            <li>Windows 10/11 (64-bit)</li>
                        </ul>
                    </div>
                </div>
                <hr className="border-sky-200/[0.5] my-6 md:my-8 w-full"/>
                <span className="text-sky-200 my-1 secondary-text md:text-2xl md:my-5 text-xs">
                    Choose your preferred platform
                </span>
                <div className="flex flex-row w-full justify-center my-3 md:my-5">
                    <Link href={apiUrl + "/cdn/download/windows"}>
                        <Button big type="main" content="WINDOWS" Icon={DiWindows}/>
                    </Link>
                    <Button big disabled content="MAC OS" Icon={DiApple}/>
                    <Button big disabled content="LINUX" Icon={DiLinux}/>
                </div>
            </div>
        </main>
    </>

}