import Head from 'next/head'
import DefaultSplash from '@/assets/images/splash/patch-notes-splash.webp';

export default function PrivacyNotice() {
  return (
    <>
      <Head>
        <title>Rivalium Privacy Notice</title>
      </Head>
      <main className="w-full min-h-screen">
        <div
          className="relative w-full h-[30vh] md:h-[40vh] bg-cover bg-bottom bg-fixed"
          style={{
            backgroundImage: `url(${DefaultSplash.src})`,
          }}
        >
          <div className="w-full h-full inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="title p-4 text-4xl md:text-[5rem] mt-20 text-white text-center">
              PRIVACY NOTICE
            </h1>
          </div>
        </div>

        <div className="bg-backblue bg-opacity-80 p-4 md:p-10 md:px-[20%] shadow-xl">
          <div className="mb-10">

            <p className="text-xs md:text-md mb-3 md:mb-5 text-left secondary-text text-lightblue opacity-60">
              Last Revised: January 11, 2025
            </p>
            <p className="text-sm md:text-xl mb-3 md:mb-5 text-left secondary-text text-lightblue">
              <span className="ml-10"/>Welcome to Rivalium! This Privacy Policy outlines how we collect, use, store, 
              and protect your personal information when you access and use Rivalium and related services. 
              Please read this Privacy Policy carefully to understand our views and practices 
              regarding your personal data and how we treat it.
            </p>

            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
              1. Information We Collect
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10"/>We collect various types of information from you when you access Rivalium or interact with our services. The types of information we collect are as follows:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li><strong>Personal Information:</strong> This includes your email address, username, password (hashed using industry-standard encryption methods), and any personal details required in case we need them for in-game purchases (such as billing address, phone number).</li>
              <li><strong>Device Information:</strong> This includes details about the device you're using to access Rivalium such as device type, operating system and other similar technical data necessary for the game’s functionality and for troubleshooting technical issues.</li>
              <li><strong>Playtime Information:</strong> We track your in-game playtime to provide insights into your game performance, offer personalized content, and for troubleshooting purposes.</li>
              <li><strong>In-Game Purchases:</strong> We collect and store transaction data related to any in-game purchases you make, including the items purchased, transaction amount, and payment method used. We do not store sensitive payment information such as credit card numbers; payment processors handle these transactions in accordance with their own privacy policies.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
              2. How We Use Your Information
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10"/>We use the information we collect from you for various purposes to ensure that Rivalium functions properly and that we can provide the best possible service. The purposes for which we use your information are as follows:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li><strong>Account Management:</strong> Your email, username, and password are used to create and manage your account, as well as to authenticate your identity when logging in.</li>
              <li><strong>Communication:</strong> We use your email address to send important notifications related to your account, including account recovery, updates to Rivalium, and changes to the Privacy Policy or Terms of Service. We will only use your email for marketing purposes if you agree to it on the sign up form.</li>
              <li><strong>In-Game Features:</strong> Your username, playtime, and device information are used to personalize your in-game experience and for administrative tasks like tracking playtime, leaderboard rankings, and offering customized content based on your usage patterns.</li>
              <li><strong>Payment Processing:</strong> If you make in-game purchases, we use your personal details to process payments securely. Sensitive financial information, such as credit card numbers, is not stored by Rivalium but is processed through secure payment gateways that comply with relevant financial regulations and standards.</li>
              <li><strong>Technical Support and Bug Fixes:</strong> Device information, playtime, and in-game data are collected for troubleshooting issues, ensuring the smooth operation of Rivalium, and detecting and resolving bugs or technical problems.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
              3. Data Security
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10"/>We take your privacy and the security of your data seriously. To ensure the confidentiality and integrity of your personal information, we have implemented the following security measures:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li><strong>Encryption:</strong> Your password is securely hashed 
              using industry-standard encryption methods before being stored in our database, 
              and no raw password is stored in any part of the Rivalium ecosystem. 
              All communications between your device and our servers, and between our different servers, are encrypted using TLS (Transport Layer Security) 
              to protect your data from unauthorized access during transmission.</li>
              <li><strong>Data Storage:</strong> Your personal information, 
              transaction data, and other sensitive data are stored in secure databases that 
              are protected by industry-standard security protocols. 
              Access to this data is limited to authorized personnel only.</li>
              <li><strong>Payment Processing:</strong> For in-game purchases, 
              we do not store sensitive financial data such as credit card numbers. 
              Payments are processed through secure third-party payment 
              gateways that comply with Payment Card Industry Data Security Standards (PCI DSS) 
              to ensure your payment data is kept safe.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
              4. Your Rights and Control Over Your Data
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10"/>You have the right to access, correct, and delete your personal information, as well as to withdraw consent for processing your data. Specifically, you can:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li><strong>Access:</strong> You can request a copy of the personal data we hold about you. This includes information about your account, playtime, in-game purchases, and any other personal data we collect.</li>
              <li><strong>Correction:</strong> If any of the personal data we hold about you is inaccurate or incomplete, you can request that we correct it.</li>
              <li><strong>Deletion:</strong> You can request that we delete your account and personal data. 
              Note that if you request deletion of your account, 
              we will retain in-game statistics and other necessary data 
              for historical records and administrative purposes. However no personal data that ties 
              you as person to the database account will be retained, 
              your account will become an anonymous ghost account with in-game statistics.  
              Once your account is deleted, it will no longer be accessible, 
              and you will lose access to any related content.</li>
              <li><strong>Data Portability:</strong> You may request a copy of your personal data in a structured, commonly used, and machine-readable format to transfer it to another service.</li>
              <li><strong>Opt-Out:</strong> You can opt out of certain data processing activities, such as receiving email notifications. However, we may still need to send you essential communications regarding your account or service updates.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
              5. Changes to This Privacy Policy
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10"/>We may update this Privacy Policy 
              from time to time to reflect changes in our practices or legal obligations. 
              We will notify you of any significant changes by mail and by posting a revised version 
              on this page and updating the “Last Revised” date at the top of the policy. 
            </p>

          </div>
        </div>
      </main>
    </>
  )
}
