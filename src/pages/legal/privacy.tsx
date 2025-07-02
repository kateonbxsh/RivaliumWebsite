import Head from 'next/head';
import DefaultSplash from '@/assets/images/splash/patch-notes-splash.webp';

export default function PrivacyNotice() {
  return (
    <>
      <Head>
        <title>Rivalium - Privacy Notice</title>
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
              <span className="ml-10" />Welcome to Rivalium, developed by Kaura Interactive! This Privacy Notice explains how Kaura Interactive, as the data controller, collects, uses, stores, and protects your personal information when you access and use Rivalium and related services. We are committed to complying with the General Data Protection Regulation (GDPR) and other applicable EU data protection laws. Please read this notice carefully to understand our practices regarding your personal data.
            </p>
            <p className="text-sm md:text-xl mb-3 md:mb-5 text-left secondary-text text-lightblue">
              <span className="ml-10" />For any questions about this Privacy Notice or our data practices, please contact our Data Protection Officer at <a href="mailto:support@rivalium.online" className="underline hover:text-white">support@rivalium.online</a>.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              1. Data Controller
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Kaura Interactive, a company registered in France, is the data controller responsible for your personal data. Our registered office is at Toulouse, France.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              2. Information We Collect
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />We collect various types of information to provide and improve Rivalium. The categories of data we collect are:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li><strong>Personal Information:</strong> Email address, username, hashed password, and, for in-game purchases, billing details (e.g., name, billing address, phone number).</li>
              <li><strong>Device Information:</strong> Device type, operating system, IP address, browser type, and other technical data necessary for gameplay and troubleshooting.</li>
              <li><strong>Usage Data:</strong> In-game playtime, interactions, and performance metrics to personalize your experience and improve services.</li>
              <li><strong>Transaction Data:</strong> Details of in-game purchases, including items purchased, transaction amount, and payment method (excluding sensitive payment details like credit card numbers, which are handled by third-party payment processors).</li>
              <li><strong>Cookies and Tracking Data:</strong> Information collected via cookies and similar technologies to enhance user experience and analyze service usage (see Section 7 for details).</li>
            </ul>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              3. Legal Basis for Processing
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />We process your personal data based on the following legal grounds under GDPR:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li><strong>Contractual Necessity:</strong> To provide Rivalium services, manage your account, and process in-game purchases (Article 6(1)(b) GDPR).</li>
              <li><strong>Legitimate Interests:</strong> To improve our services, troubleshoot technical issues, and personalize your gaming experience (Article 6(1)(f) GDPR).</li>
              <li><strong>Consent:</strong> For marketing communications and certain non-essential cookies, where you have provided explicit consent (Article 6(1)(a) GDPR).</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws, such as tax or consumer protection regulations (Article 6(1)(c) GDPR).</li>
            </ul>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              4. How We Use Your Information
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />We use your data to:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li>Create and manage your Rivalium account.</li>
              <li>Authenticate your identity for secure logins.</li>
              <li>Send essential notifications (e.g., account recovery, service updates) and, with your consent, marketing communications.</li>
              <li>Personalize in-game features, such as leaderboards and customized content.</li>
              <li>Process in-game purchases securely via third-party payment gateways.</li>
              <li>Troubleshoot technical issues and improve Rivalium’s performance.</li>
              <li>Analyze usage patterns to enhance user experience (subject to your cookie preferences).</li>
            </ul>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              5. Data Sharing and Third Parties
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />We may share your data with:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li><strong>Third-Party Processors:</strong> Trusted partners, such as payment processors and cloud service providers, who process data on our behalf under strict data protection agreements compliant with GDPR.</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our legal rights (e.g., responding to lawful requests from public authorities).</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred to the acquiring entity, with appropriate safeguards in place.</li>
            </ul>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />We do not sell your personal data to third parties.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              6. International Data Transfers
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />If your data is transferred outside the European Economic Area (EEA), we ensure it is protected by appropriate safeguards, such as Standard Contractual Clauses (SCCs) approved by the European Commission or adequacy decisions for specific countries.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              7. Cookies and Tracking Technologies
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />We use cookies and similar technologies to enhance your experience and analyze service usage. You can manage your cookie preferences through our cookie consent tool. Essential cookies are required for Rivalium’s functionality, while non-essential cookies (e.g., for analytics or marketing) require your consent.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              8. Children’s Data
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Rivalium is not intended for users under 16. We do not knowingly collect personal data from children under 16 without verifiable parental consent. If we learn that a user under 16 has provided personal data without consent, we will delete it promptly. Contact us at <a href="mailto:support@rivalium.online" className="underline hover:text-white">support@rivalium.online</a> if you believe we have collected data from a minor.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              9. Data Security
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />We implement robust security measures to protect your data:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li><strong>Encryption:</strong> Passwords are hashed using industry-standard algorithms, and data transmissions use TLS encryption.</li>
              <li><strong>Secure Storage:</strong> Data is stored in secure databases with restricted access, protected by industry-standard protocols.</li>
              <li><strong>Payment Security:</strong> Payment data is processed by PCI DSS-compliant third-party gateways, and we do not store sensitive payment details.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              10. Your GDPR Rights
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Under GDPR, you have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li><strong>Access:</strong> Request a copy of your personal data.</li>
              <li><strong>Rectification:</strong> Correct inaccurate or incomplete data.</li>
              <li><strong>Erasure:</strong> Request deletion of your data. Note that deleting your account anonymizes personal data, retaining only non-personal in-game statistics for historical purposes.</li>
              <li><strong>Restriction:</strong> Request restriction of data processing in certain circumstances.</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests or for direct marketing.</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for processing (e.g., marketing emails) at any time.</li>
              <li><strong>Lodge a Complaint:</strong> Contact your local data protection authority if you believe your rights have been violated.</li>
            </ul>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />To exercise these rights, contact us at <a href="mailto:support@rivalium.online" className="underline hover:text-white">support@rivalium.online</a>. We will respond within one month, as required by GDPR.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              11. Data Retention
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />We retain personal data only as long as necessary for the purposes outlined in this notice:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li>Account data is retained while your account is active. Upon deletion, personal data is anonymized, and non-personal statistics may be retained indefinitely.</li>
              <li>Transaction data is kept for 7 years to comply with tax and financial regulations.</li>
              <li>Usage data is retained for up to 2 years for analytics and service improvement.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              12. Changes to This Privacy Notice
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />We may update this Privacy Notice to reflect changes in our practices or legal requirements. Significant changes will be communicated via email and by updating this page with a new “Last Revised” date. We encourage you to review this notice periodically.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}