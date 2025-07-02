import Head from "next/head";
import DefaultSplash from '@/assets/images/splash/patch-notes-splash.webp';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Rivalium - Terms of Service</title>
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
              TERMS OF SERVICE
            </h1>
          </div>
        </div>

        <div className="bg-backblue bg-opacity-80 p-4 md:p-10 md:px-[20%] shadow-xl">
          <div className="mb-10">
            <p className="text-xs md:text-md mb-3 md:mb-5 text-left secondary-text text-lightblue opacity-60">
              Last Revised: January 11, 2025
            </p>
            <p className="text-sm md:text-xl mb-3 md:mb-5 text-left secondary-text text-lightblue">
              <span className="ml-10" />Welcome to Rivalium, developed and operated by Kaura Interactive! By accessing or playing Rivalium, you agree to these Terms of Service ("ToS"). Please read them carefully, as they govern your use of the game and related services. If you do not agree with these terms, you must not use Rivalium.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              1. Definitions
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />For the purposes of these Terms of Service:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li><strong>Rivalium:</strong> The online multiplayer game developed and owned by Kaura Interactive, including all related services, content, and features.</li>
              <li><strong>User, Player, or You:</strong> Any individual who accesses or uses Rivalium, including those who create an account or interact with the game.</li>
              <li><strong>Account:</strong> The personal profile created by a user to access Rivalium, including their username, password, and associated data.</li>
              <li><strong>In-Game Purchases:</strong> Transactions made within Rivalium for virtual items, currency (e.g., Rivalite), or other digital content.</li>
              <li><strong>User-Generated Content:</strong> Content created by players, such as visual modifications, fan art, or derivative works based on Rivalium.</li>
              <li><strong>Support, Us, or We:</strong> Kaura Interactive’s customer service, technical assistance, developers, and team supporting Rivalium.</li>
              <li><strong>Terms of Service or ToS:</strong> This document, outlining the rules and regulations governing the use of Rivalium.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              2. Account Creation
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />To play Rivalium, you must create an account using a username, email address, and password. For in-game purchases, additional personal details (e.g., billing address) may be required through our website.
            </p>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />You confirm that you are at least 16 years of age or have verifiable parental consent if under 16, in compliance with GDPR (Article 8). You are responsible for protecting your account credentials and must notify us immediately at <a href="mailto:support@rivalium.online" className="underline hover:text-white">support@rivalium.online</a> if you suspect unauthorized access. Kaura Interactive protects your personal data as outlined in our <a href="/legal/privacy" className="underline hover:text-white">Privacy Notice</a>.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              3. Age Restrictions
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Rivalium is intended for players aged 16 or older. If you are under 16, you must obtain verifiable parental consent to create an account or make in-game purchases, as required by GDPR. Parents or guardians must review and accept these ToS on behalf of users under 16.
            </p>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />We encourage parents to supervise their children’s use of Rivalium to ensure a safe and appropriate gaming experience. If we identify an account belonging to a user under 16 without parental consent, we may suspend or terminate it. Contact <a href="mailto:support@rivalium.online" className="underline hover:text-white">support@rivalium.online</a> for assistance with parental consent or related inquiries.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              4. In-Game Purchases
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Rivalium offers in-game purchases, including Rivalite (premium virtual currency) and direct purchases of virtual items (e.g., skins, character customization options). Pricing is clearly displayed in the game’s store.
            </p>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Under the EU Consumer Rights Directive (2011/83/EU), you have a 14-day right of withdrawal for digital content purchases, provided the content has not been accessed or used. Once accessed, the right of withdrawal is forfeited, as you expressly consent to immediate delivery upon purchase. To request a refund, contact <a href="mailto:support@rivalium.online" className="underline hover:text-white">support@rivalium.online</a> within 14 days.
            </p>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Kaura Interactive may modify pricing, availability, or functionality of in-game items or Rivalite at any time, with changes reflected in the store. We may correct pricing errors or cancel erroneous transactions, refunding the amount paid if necessary.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              5. Multiplayer Features and Community Conduct
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Rivalium includes multiplayer matchmaking, in-game chat, and a ranked system with tiers and divisions. You agree to adhere to our community guidelines, which prohibit:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li>Toxic behavior, harassment, or offensive language in chat or gameplay.</li>
              <li>Cheating, smurfing, boosting, or exploiting the ranking system.</li>
              <li>Disruptive actions, such as intentional match sabotage or trolling.</li>
            </ul>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Violations may result in penalties, including muting, temporary bans, rank resets, or permanent bans, depending on severity. Report issues via the in-game reporting system or at <a href="mailto:support@rivalium.online" className="underline hover:text-white">support@rivalium.online</a>. We may update community guidelines, and continued use of Rivalium constitutes acceptance of these updates.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              6. Data Collection and Privacy
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Your use of Rivalium is subject to our <a href="/legal/privacy" className="underline hover:text-white">Privacy Notice</a>, which details how Kaura Interactive collects, uses, and protects your personal data in compliance with GDPR.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              7. Moderation and Fair Play
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />To ensure a fair and enjoyable gaming environment, the following are prohibited:
            </p>
            <ul className="list-disc list-inside text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <li><strong>Cheating and Hacks:</strong> Using cheats, hacks, bots, or third-party programs to alter gameplay may result in immediate account suspension or banning.</li>
              <li><strong>Bug Abuse:</strong> Exploiting bugs or glitches for unfair advantage is prohibited. Report bugs to <a href="mailto:support@rivalium.online" className="underline hover:text-white">support@rivalium.online</a>. Repeated abuse may lead to penalties.</li>
              <li><strong>Offensive Behavior:</strong> Harassment, hate speech, or offensive language may result in muting, temporary bans, or permanent bans.</li>
              <li><strong>Disruptive Gameplay:</strong> Intentional match sabotage or trolling may lead to matchmaking restrictions or account suspension.</li>
            </ul>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              8. User-Generated Content
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />You may create and share non-advantageous visual modifications, fan art, or derivative works based on Rivalium, provided they comply with applicable laws (e.g., copyright, intellectual property) and do not promote illegal or offensive content. Kaura Interactive reserves the right to remove non-compliant content and apply account penalties, including suspension or banning.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              9. Ownership and Licensing
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Rivalium, including all code, graphics, sound, and design, is the proprietary intellectual property of Kaura Interactive. Unauthorized use, duplication, reverse-engineering, or distribution is prohibited. You are granted a limited, non-transferable, non-commercial license to use Rivalium, subject to these ToS.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              10. Account Termination and Suspension
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />Kaura Interactive may suspend or terminate your account for violations of these ToS, including cheating, abusive behavior, or non-compliance with community guidelines. Upon termination, you will lose access to your account and any associated content (e.g., Rivalite, virtual items), with no entitlement to refunds unless required by EU law.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              11. Support
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />For assistance with Rivalium, including bug reports, account issues, or refunds, contact our support team via Discord or at <a href="mailto:support@rivalium.online" className="underline hover:text-white">support@rivalium.online</a>. We aim to respond promptly and resolve issues in accordance with EU consumer protection laws.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              12. Dispute Resolution
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />If you have a complaint, please contact us at <a href="mailto:support@rivalium.online" className="underline hover:text-white">support@rivalium.online</a>. EU residents may also use the European Commission’s Online Dispute Resolution (ODR) platform at <a href="https://ec.europa.eu/consumers/odr" className="underline hover:text-white">https://ec.europa.eu/consumers/odr</a>. We aim to resolve disputes amicably and in compliance with EU consumer protection laws.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              13. Limitation of Liability
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />To the extent permitted by EU law, Kaura Interactive is not liable for indirect, incidental, or consequential damages arising from your use of Rivalium, including loss of data or virtual items. Our liability is limited to the amount paid for in-game purchases, where applicable, in accordance with the EU Consumer Rights Directive.
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              14. Governing Law and Jurisdiction
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />These ToS are governed by the laws of [Insert EU Country, e.g., Ireland], without prejudice to mandatory consumer protections under your country of residence’s laws. Disputes not resolved through ODR or support shall be subject to the exclusive jurisdiction of the courts of [Insert EU Country, e.g., Ireland].
            </p>

            <h3 className="text-2xl md:text-3xl text-left text-lightblue mb-3">
              15. Updates to Terms of Service
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />We may update these ToS to reflect changes in Rivalium or legal requirements. Significant changes will be communicated via email and by updating the “Last Revised” date. Continued use of Rivalium constitutes acceptance of the updated ToS.
            </p>

            <hr className="border-lightblue/[0.2] mb-5 w-full center" />

            <p className="text-lightblue uppercase mb-3 text-left secondary-text text-sm md:text-xl">
              <span className="ml-10" />BY SELECTING “ACCEPT”, “SIGN UP”, OR USING RIVALIUM, YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE, AND KAURA INTERACTIVE AGREES TO COMPLY WITH THE TERMS OUTLINED ABOVE.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}