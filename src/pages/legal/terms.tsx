import Head from "next/head";
import DefaultSplash from '@/assets/images/splash/patch-notes-splash.webp';

export default function TermsOfService() {

    return <>
    <Head>
      <title>Rivalium Terms Of Service</title>
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

            <p className="text-xs md:text-md mb-3 md:mb-5 text-left secondary-text text-lightblue opacity-60">Last Revised: January 11, 2025
          </p>
          <p className="text-sm md:text-xl mb-3 md:mb-5 text-left secondary-text text-lightblue">
          <span className="ml-10"/>Welcome to Rivalium! By accessing and playing Rivalium, you agree to
            the following terms and conditions. Please read them carefully as
            they govern your use of the game and related services.
          </p>

          <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
            <span className="ml-10"/>For the purposes of these Terms of Service, the following terms shall have the meanings outlined below:
            </p>
            <ul className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
            <li><span className="ml-10"/>“Rivalium” refers to the online multiplayer game developed and owned by kateonbxsh, including all related services, content, and features.</li>
            <li><span className="ml-10"/>“User”, “Player” or "you" refers to any individual who accesses or uses Rivalium, including those who create an account or interact with the game.</li>
            <li><span className="ml-10"/>“Account” refers to the personal profile created by a user to access Rivalium, including their username, password, and associated data.</li>
            <li><span className="ml-10"/>“In-Game Purchases” refers to the transactions made within Rivalium, including the purchase of virtual items, currency, or any other paid content.</li>
            <li><span className="ml-10"/>“User-Generated Content” refers to any content created by players, including but not limited to visual modifications, fan art, and derivative works based on Rivalium.</li>
            <li><span className="ml-10"/>“Support”, "us" or "we" refers to the customer service, technical assistance, developers, and team behind Rivalium.</li>
            <li><span className="ml-10"/>“Terms of Service” or “ToS” refers to this document, which outlines the rules and regulations governing the use of Rivalium.</li>
            </ul>
  
            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
              1. Account Creation
            </h3>
            <p className="text-sm md:text-xl text-left text-lightblue mb-3 secondary-text">
            <span className="ml-10"/>To play Rivalium, players must create an account using a username, email address, and password. 
            Creating an account does not require the submission of personal information; however, if you wish 
            to make in-game purchases in the future, you will be required to provide necessary personal details 
            through our website. <br /><br />
            
            <span className="ml-10"/>By creating an account, you confirm that you are at least 10 years of age. 
            It is your responsibility to protect your account credentials, and you must notify us immediately 
            if you suspect any unauthorized access to your account. Rivalium will ensure the protection and 
            confidentiality of your personal information, which is only requested for specific purposes like 
            processing in-game purchases.
            </p>
  
            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
              2. Age Restrictions
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
                <span className="ml-10"/>Rivalium is intended for players who are 10 years of age or older. 
                By creating an account and using Rivalium, you represent and warrant that you meet this age requirement. 
                If you are under the age of 18, you may be required to obtain consent from a parent or 
                legal guardian to use Rivalium. This includes providing any necessary personal information 
                for account creation and making in-game purchases. In cases where parental consent is required, 
                the parent or guardian must review and accept these Terms of Service on your behalf. <br /><br />

                <span className="ml-10"/>We strongly encourage parents and guardians to monitor and supervise their children’s use of Rivalium, 
                ensuring that their gaming experience is safe, secure, and appropriate for their age. 
                Rivalium is committed to compliance with applicable laws regarding the collection of 
                personal data from minors, including COPPA (Children’s Online Privacy Protection Act) 
                and the General Data Protection Regulation (GDPR). As such, we may require additional 
                information or parental approval before allowing users under 16 years of age to proceed 
                with account creation or purchase transactions. <br /><br />

                <span className="ml-10"/>By continuing to use Rivalium, you confirm that you understand and agree to 
                these age-related terms, and that you take full responsibility 
                for your compliance with the age requirements. 
                Players who do not meet the minimum age requirement or who are unable to 
                provide the necessary parental consent may be prohibited from creating an 
                account or accessing certain features of the game.
            </p>
  
            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
              3. In-Game Purchases
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
            <span className="ml-10"/>Rivalium will introduce in-game purchases for Rivalite, a premium virtual currency used for acquiring various in-game items, skins, and other digital content. Rivalite will be available for purchase through the game’s internal store, and its pricing will be clearly displayed at the time of purchase. Additionally, some in-game purchases may provide players with direct access to virtual items, such as exclusive skins, character customization options, or other in-game assets, without the need to use Rivalite.<br /><br />

            <span className="ml-10"/>By making a purchase, you agree to pay the specified price for the amount of Rivalite, or for the corresponding in-game content or virtual items as stated in the store. These items may be permanent or time-limited and will be delivered to your account immediately after the purchase is confirmed, subject to the availability of the content.<br /><br />

            <span className="ml-10"/>Refunds for Rivalite purchases and in-game items will be processed in accordance with the European Union's 14-day retraction policy, which grants consumers the right to cancel digital content purchases within 14 days of the transaction, provided that the content has not been downloaded, accessed, or used. Once the content has been accessed, downloaded, or used, the right to retract the purchase is forfeited. If you wish to request a refund, you must contact our support team at support@rivalium.online within the specified time frame and in accordance with the EU’s consumer protection laws.<br /><br />

            <span className="ml-10"/>It is important to note that Rivalium reserves the right to modify the pricing, availability, and functionality of in-game items, Rivalite, and virtual items at any time, without prior notice. This includes, but is not limited to, adjusting prices, offering promotional discounts, or modifying the virtual currency's exchange rate. Any such changes will be reflected in the game’s internal store and communicated to players through official channels. Rivalium is not responsible for any changes in the market price of Rivalite or in-game items, which may fluctuate depending on the content and promotional periods.<br /><br />

            <span className="ml-10"/>In the event of an error in pricing or an issue with in-game purchases, Rivalium reserves the right to correct the error and take appropriate measures, which may include canceling the transaction or refunding the amount paid. We recommend players carefully review all purchase details before confirming any transaction.<br /><br />

            <span className="ml-10"/>Rivalium aims to ensure that all in-game purchases, including those for Rivalite and direct virtual items, are transparent, fair, and compliant with local regulations. Our support team is available to assist with any issues regarding purchases, refunds, or account-related questions, and we are committed to offering timely and effective resolution in accordance with our policies.

            </p>
  
            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
              4. Multiplayer Features
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
            <span className="ml-10"/>Rivalium includes multiplayer matchmaking, an in-game chat, 
                and a ranked system with tiers and divisions. By participating 
                in these features, players are expected to adhere to the community 
                guidelines and the rules of conduct set forth by Rivalium. 
                These rules are designed to ensure a fair, respectful, and 
                enjoyable gaming experience for all players. <br /><br />

                <span className="ml-10"/>In multiplayer matchmaking, players will be matched with others based on their skill 
                level, performance, and rankings. The matchmaking system uses a combination of 
                factors, including player behavior, win rates, and experience, to create 
                balanced and competitive matches. Players who exhibit toxic behavior, 
                cheating, or any form of disruptive conduct during matchmaking may face 
                penalties or be removed from the game. <br /><br />

                <span className="ml-10"/>The in-game chat allows players to communicate with each other in real 
                time during gameplay. Chat is a key feature for fostering teamwork, 
                strategy discussion, and socializing. However, players are prohibited 
                from using offensive language, harassment, or making any kind of 
                inappropriate or disruptive comments. Rivalium employs a moderation system 
                to monitor chat and flag harmful content. Any violations of the chat rules 
                can result in penalties such as muting, temporary bans, or permanent bans 
                depending on the severity of the offense. <br /><br />

                <span className="ml-10"/>Rivalium’s ranked system consists of multiple tiers and divisions, designed to 
                challenge players to improve their skills and progress in the game. Players are 
                ranked based on their performance in competitive matches, and their rank may 
                fluctuate depending on wins, losses, and overall gameplay behavior. Players who 
                engage in unfair practices such as smurfing, boosting, or exploiting the 
                ranking system may face disciplinary actions, including account suspension or rank reset. <br /><br />

                <span className="ml-10"/>In all interactions within the game, whether through matchmaking, chat, or 
                ranking, players must behave respectfully and abide by the established rules. 
                Any violation of these rules will be taken seriously, and penalties will be 
                applied accordingly. Players are encouraged to report any suspicious activity, 
                disruptive behavior, or rule violations through the designated reporting 
                system in the game. Rivalium strives to create a positive, enjoyable, and fair 
                gaming environment for everyone, and we are committed to enforcing these rules 
                to maintain that standard. <br /><br />

                <span className="ml-10"/>We reserve the right to modify or update these rules of conduct at any time, 
                and it is the player’s responsibility to stay informed of any changes. By 
                continuing to play Rivalium, you agree to comply with these rules and the 
                consequences for violating them.
            </p>
  
            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
              5. Data Collection and Privacy
            </h3>
            
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
            You acknowledge and agree to our Privacy Policy. Please review our{" "}
            <a href="/legal/privacy" className="text-lightblue text-bold text-white">Privacy Notice</a> for detailed information on how we collect, use, and protect your personal data.
            </p>
  
            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
            6. Moderation and Fair Play
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
                <span className="ml-10"/>In Rivalium, maintaining a fair and respectful gaming environment is essential. The following rules and regulations are in place to ensure that all players can enjoy the game fairly and without disruption:
            </p>    
            <ul className="list-disc list-inside mb-3 text-lightblue secondary-text text-sm md:text-xl text-left">
            <li><strong>Cheating and Hacks:</strong> The use of any cheats, hacks, or third-party programs to alter gameplay is strictly prohibited. This includes using bots, exploits, or modifications that provide an unfair advantage. Players found violating this rule may face immediate suspension or permanent banning of their account.</li>
            <li><strong>Bug Abuse:</strong> Taking advantage of bugs or glitches to gain an unfair advantage is not allowed. If you encounter a bug, we encourage you to report it to the support team. Repeated abuse of bugs will result in penalties, including potential account suspension.</li>
            <li><strong>Offensive Language and Behavior:</strong> Offensive language, slurs, hate speech, or any form of harassment in chat or gameplay is prohibited. Players who engage in such behavior may be muted, temporarily banned, or permanently banned, depending on the severity of the offense.</li>
            <li><strong>Disruptive Gameplay:</strong> Disruptive behavior, including intentionally losing matches, trolling, or sabotaging your team, is a violation of the community standards. Players who engage in such conduct may face penalties such as ranked matchmaking restrictions, temporary bans, or account suspension.</li>
            <li><strong>Respect for All Players:</strong> Rivalium is a game designed to be fun for everyone. We expect all players to respect each other and work together in a positive environment. Negative behavior that detracts from the experience for others will be subject to moderation actions.</li>
            </ul>

  
            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
            7. User-Generated Content
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
            <span className="ml-10"/>Players are allowed to create and share non-advantageous visual modifications (mods), fan art, and derivative works based on Rivalium. These creations can include things like skins, artwork, or videos, as long as they do not interfere with the game's fairness, balance, or overall experience. Furthermore, any content created must not include or promote illegal activities, offensive material, or unethical behavior.
            </p>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
            <span className="ml-10"/>Players should also ensure that their creations comply with applicable laws, including copyright and intellectual property laws. Any user-generated content that violates these rules may be removed, and the user responsible may face account penalties, including suspension or banning.
            </p>

            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
            8. Ownership and Licensing
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
            <span className="ml-10"/>Rivalium is the proprietary software and intellectual property of kateonbxsh. All game assets, including code, graphics, sound, and design, are owned by kateonbxsh, and unauthorized use, duplication, or distribution of any part of the game is strictly prohibited. This includes any attempt to reverse-engineer or modify the game’s code or assets.
            </p>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
            <span className="ml-10"/>Players are granted a limited, non-transferable license to use Rivalium for personal, non-commercial purposes, subject to these Terms of Service. Any commercial use, resale, or redistribution of the game or its assets without express written permission from kateonbxsh is prohibited.
            </p>

            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
            9. Support
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
            <span className="ml-10"/>For assistance with Rivalium, including bug reports, account recovery, or other issues, players can contact our support team via Discord or email at <a href="mailto:support@rivalium.online" className="text-lightblue">support@rivalium.online</a>. We aim to provide timely and helpful support to resolve any problems you may encounter while playing.
            </p>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
            <span className="ml-10"/>Our support team is available to address technical issues, gameplay concerns, and any questions regarding account management. Please be patient as we work to assist you.
            </p>

            <h3 className="text-2xl md:text-3xl text-left font-bold text-lightblue mb-3">
                10. Updates to Terms of Service
            </h3>
            <p className="text-lightblue mb-3 text-left secondary-text text-sm md:text-xl">
                <span className="ml-10"/>We may update or modify these Terms of Service from time to time to reflect changes in the game or legal requirements. When significant changes are made, we will notify players by updating the “Last Revised” date at the top of this page informing you via email or other means. By continuing to use Rivalium after such changes are made, you agree to the updated Terms of Service.
            </p>
  
          <hr className="border-lightblue/[0.2] mb-5 w-full center" />

          <p className="text-lightblue text-bold text-uppercase mb-3 text-left secondary-text text-sm md:text-xl">
            <span className="ml-10"/>BY SELECTING THE “ACCEPT”, "SIGN UP" BUTTON OR OTHERWISE USING OR 
            ACCESSING RIVALIUM, YOU ARE AGREEING TO BE BOUND BY THE TERMS AND CONDITIONS SET OUT IN THESE TERMS,
            AND WE ARE AGREEING TO COMPLY WITH THE TERMS OUTLINED ABOVE.
           </p>

        </div>
      </div>
    </main>
  </>
  

}