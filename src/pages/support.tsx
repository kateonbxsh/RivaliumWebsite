import Head from "next/head";
import Link from "next/link";
import Button from "@/components/Button";
import { FaArrowRight, FaMailBulk } from "react-icons/fa";

export default function SupportPage() {
  return (
    <>
      <Head>
        <title>Support - Rivalium: The Realm of Rivals</title>
      </Head>
      <main className="w-full min-h-screen relative">
        <div className="w-full flex flex-row justify-center">
            <h1 className="title text-4xl md:text-[5rem] p-10 mt-20 md:mt-[150px] md:mt-[">SUPPORT</h1>
        </div>
        <div className="bg-backblue bg-opacity-70 w-full p-4 sm:p-5 md:px-[10%]">
          <div className="w-full my-4 sm:my-5 flex flex-col sm:flex-row items-center justify-between secondary-text gap-4 sm:gap-0">
            <div className="sm:w-1/2 flex flex-col items-center bg-sky-900/[0.5] border border-sky-200/[0.3] rounded-lg p-4 mx-4">
              <span className="text-sky-200 text-sm sm:text-base md:text-2xl">
                Contact Support
              </span>
              <hr className="border-sky-200/[0.2] my-2 w-full" />
              <p className="text-sky-200/[0.7] text-xs sm:text-sm md:text-lg text-center mb-4">
                Reach out to us directly at{" "}
                <a
                  href="mailto:support@rivalium.online"
                  className="underline hover:text-sky-100"
                >
                  support@rivalium.online
                </a>{" "}
                <br />
                or
                <br />
                Use the form below to send us a message.
              </p>
              <form className="w-full flex flex-col items-center space-y-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full sm:w-3/4 bg-sky-900/[0.5] text-sky-200 placeholder-sky-200/[0.5] text-xs sm:text-sm md:text-lg p-2 rounded border border-sky-200/[0.3] focus:outline-none focus:border-sky-200"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full sm:w-3/4 bg-sky-900/[0.5] text-sky-200 placeholder-sky-200/[0.5] text-xs sm:text-sm md:text-lg p-2 rounded border border-sky-200/[0.3] focus:outline-none focus:border-sky-200"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  className="w-full sm:w-3/4 bg-sky-900/[0.5] text-sky-200 placeholder-sky-200/[0.5] text-xs sm:text-sm md:text-lg p-2 rounded border border-sky-200/[0.3] focus:outline-none focus:border-sky-200 h-24 sm:h-32 resize-none scrollbar-thin"
                  required
                ></textarea>
                <Button
                  type="main"
                  content="SEND"
                  Icon={FaMailBulk}
                />
              </form>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col items-center bg-sky-900/[0.5] border border-sky-200/[0.3] rounded-lg p-4">
              <span className="text-sky-200 text-sm sm:text-base md:text-2xl">
                Advanced Support
              </span>
              <hr className="border-sky-200/[0.2] my-2 w-full" />
              <p className="text-sky-200/[0.7] text-xs sm:text-sm md:text-lg text-center mb-4">
                For personalized assistance, log in to your Rivalium account to access advanced support options, including ticket tracking and priority responses.
              </p>
              <Link href="/portal">
                <Button
                  type="main"
                  content="LOG IN"
                  Icon={FaArrowRight}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}