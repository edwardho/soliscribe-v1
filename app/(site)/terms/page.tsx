'use client'

import { FC } from 'react'
import ScrollToTop from '@/components/ScrollToTop'

const TermsPage: FC = () => {
  return (
    <div className='min-h-screen flex flex-col bg-background'>
      <main className='flex-grow container mx-auto px-4 py-12 max-w-4xl'>
        <h1 className='text-4xl font-bold mb-8 mt-8 text-foreground'>User Terms of Service</h1>
        
        <div className='prose prose-foreground max-w-none'>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>1. Introduction</h2>
            <p className='text-foreground'>Soliscribe, Inc. (&quot;Soliscribe,&quot; &quot;we,&quot; &quot;our,&quot; &quot;us&quot;) offers document analysis and processing tools, as further described in our documentation (collectively, the &quot;Service&quot;), and websites, including but not limited to www.soliscribe.com (the &quot;Websites&quot;).</p>
            <p className='mt-4 text-foreground'>These User Terms of Service (&quot;Terms&quot;) are a binding legal contract between you and Soliscrbe and explain the rules governing your use of our Service and Websites.  These Terms apply to you as a user of the Service, subject to exceptions that apply to Managed Users (as defined and further detailed below in Section 2 (How These Terms Apply)).  By accessing or using the Service and Websites, you acknowledge and agree to be bound by these Terms (as applicable) and confirm you have read and understand our Privacy Statement, which is incorporated by reference.

If you do not agree to these Terms, please do not access or use the Service or Websites.

We may revise these Terms from time to time by posting a modified version on our website.  If, in Soliscrbe sole discretion, the modifications to these Terms are material, we will provide you with reasonable notice prior to the change taking effect, either by emailing the email address associated with your account or by alerting you through the Service and/or Websites.  If you do not agree to or cannot comply with the modified Terms, you must stop using the Service and Websites.  Unless otherwise stated elsewhere in these Terms or in our notice, the updated Terms will take effect upon their posting and will apply on a going-forward basis.  Your continued use of the Service and Websites after any update to these Terms constitutes your acceptance of such changes.

</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>2. How These Terms Apply</h2>
            <p className='text-foreground'>By using Soliscribe, you fall into one or more of the following categories of Soliscribe user:</p>
            
            <p className='mt-4 text-foreground'>&quot;Site Visitors&quot; are users of the Websites.</p>

            <p className='mt-4 text-foreground'>&quot;Free Users&quot; use the free/basic version of the Service.  Free Users have access to a more limited set of Service features and functionality than Managed Users.</p>

            <p className='mt-4 text-foreground'>&quot;Paid Users&quot; use the Service as part of any paid Soliscribe subscription plan. Paid Users have access to additional features and functionality compared to Free Users, as detailed in our pricing plans.</p>

            <p className='mt-4 text-foreground'>These Terms apply in full to all users of Soliscribe, whether you are a Site Visitor, Free User, or Paid User.</p>

            <p className='mt-4 text-foreground'>When you submit content or information to the Service, such as messages or files (&quot;User Data&quot;), you retain ownership of and responsibility for your User Data. By using our Service, you grant us a worldwide, non-exclusive, royalty-free license to host, store, transfer, display, perform, reproduce, modify, and distribute your User Data, solely for the purpose of providing and improving the Service.</p>

            <p className='mt-4 text-foreground'>AS BETWEEN SOLISCRIBE AND CUSTOMER, YOU ACKNOWLEDGE AND AGREE THAT IT IS SOLELY CUSTOMER&apos;S RESPONSIBILITY TO (A) INFORM YOU AND ANY OTHER MANAGED USERS OF ANY RELEVANT CUSTOMER POLICIES, PRACTICES AND SETTINGS THAT MAY IMPACT THE PROCESSING OF CUSTOMER DATA; (B) OBTAIN ANY RIGHTS, PERMISSIONS OR CONSENTS FROM YOU AND ANY OTHER MANAGED USERS THAT ARE NECESSARY FOR THE LAWFUL USE OF CUSTOMER DATA AND THE OPERATION OF THE SERVICE; (C) ENSURE THAT THE TRANSFER AND PROCESSING OF CUSTOMER DATA UNDER THE CUSTOMER AGREEMENT IS LAWFUL; AND (D) RESPOND TO AND RESOLVE ANY DISPUTE WITH YOU AND ANY OTHER MANAGED USERS RELATING TO CUSTOMER DATA, THE SERVICE OR CUSTOMER&apos;S FAILURE TO FULFILL THESE OBLIGATIONS.  IN YOUR CAPACITY AS AN MANAGED USER, SOLISCRIBE MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND (WHETHER EXPRESS OR IMPLIED) TO YOU RELATING TO THE SERVICE, WHICH IS PROVIDED TO YOU ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS.</p>

          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>3. Eligibility and Scope</h2>
            <p className='text-foreground'>To use the Service and Websites you must be, and you represent and warrant that you are, at least 16 years of age and competent to agree to these Terms.  If the law where you reside requires that you must be older in order for Asana to lawfully provide the Service and Websites to you and use your personal data without parental consent, then you must be that older age.</p>
            <p className='text-foreground'>If the representations in the preceding sentence are not true, or if Soliscribe has previously prohibited you from accessing or using the Service and Websites, you may not access or use the Service and Websites.</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>4. Account Registration and Use</h2>
            <h3 className='text-xl font-semibold mb-2 text-foreground'>4.1 Account Registration and Confidentiality</h3>
            <p className='text-foreground'>To access the Service and certain parts of our Websites, you must register for a Soliscribe account by creating a username and password. You agree to provide us with accurate, complete, and current registration information about yourself. It is your responsibility to ensure that your password remains confidential and secure, and you agree that you will not allow others to access the Service using your Soliscribe account. By registering, you agree that you are fully responsible for all activities that occur under your user name and password. We may assume that any communications we receive under your account have been made by you. If you are a workspace or organization owner or administrator, or if you have confirmed in writing that you have the authority to make decisions on behalf of a workspace or organization (&quot;Account Administrator&quot;), you represent and warrant that you are authorized to to do so and agree that Soliscribe is entitled to rely on your instructions.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>4.2 Unauthorized Account Use</h3>
            <p className='text-foreground'>You are responsible for notifying us at support@soliscribe.com if you become aware of any unauthorized use of or access to your account. You understand and agree that we may require you to provide information that may be used to confirm your identity and help ensure the security of your account. Soliscribe will not be liable for any loss, damages, liability, expenses or attorneys&apos; fees that you may incur as a result of someone else using your password or account, either with or without your knowledge and/or authorization, and regardless of whether you have advised us of such unauthorized use. You will be liable for losses, damages, liability, expenses and attorneys&apos; fees incurred by Soliscribe or a third party due to someone else using your account. In the event that the Account Administrator or Customer loses access to an account or otherwise requests information about an account, Soliscribe reserves the right in its sole discretion to request from the Account Administrator or Customer any verification it deems necessary before restoring access to or providing information about such account.</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>5. License</h2>
            <p className='text-foreground'>Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-sublicensable, non-transferable, and revocable right to access and use the Service and Websites only for your own internal use (or for internal uses authorized by the applicable Account Administrator), and only in a manner that complies with these Terms and all legal requirements that apply to you or your use of the Service and Websites. Soliscribe may revoke this license at any time, in its sole discretion.</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>6. Acceptable Use Policy</h2>
            <p className='text-foreground'>6. Acceptable Use Policy. You acknowledge and agree to comply with these Terms, including the following rules regarding acceptable use of the Service and Websites (the &quot;Acceptable Use Policy&quot;).</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>6.1 Disruption of the Service</h3>
            <p className='text-foreground'>You may not:</p>
            <ul className='list-disc pl-6 mt-2 text-foreground'>
              <li>access, tamper with, or use non-public areas of the Service and Websites, Soliscribe&apos;s computer systems, or the technical delivery systems of Soliscribe&apos;s providers;</li>
              <li>probe, scan, or test the vulnerability of any system or network or circumvent any security measure;</li>
              <li>access or search the Service and Websites by any means other than Soliscribe&apos;s publicly supported interfaces (for example, &quot;scraping&quot;); or</li>
              <li>interfere with or disrupt, or attempt to interfere with or disrupt, our infrastructure or the access of any user, host or network, including, without limitation, by sending a virus, overloading, flooding, spamming, mail-bombing the Service and Websites, or by scripting the creation of User Content interferes with the Service and Websites; or</li>
              <li>prompt or otherwise attempt to use artificial intelligence (AI) models to act in a manner that violates these Terms or intentionally circumvents safety filters and functionality of the Service.</li>
            </ul>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>6.2 Misuse of the Service and Websites</h3>
            <p className='text-foreground'>You may not use the Service and Websites to carry out, promote or support:</p>
            <ul className='list-disc pl-6 mt-2 text-foreground'>
              <li>any disinformation, deception, or otherwise fraudulent activities;</li>
              <li>the impersonation of another person or entity or the misrepresentation of an affiliation with a person or entity (e.g., &quot;spoofing&quot;, &quot;phishing&quot;);</li>
              <li>activities that are defamatory, libelous or threatening, or otherwise constitute hate speech, harassment, or stalking;</li>
              <li>the violation of any law or the rights of others (including unlawful tracking, monitoring, and identification or the publishing or sharing of another person&apos;s confidential or personal information without their express authorization and permission);</li>
              <li>for harm or abuse of a minor, including grooming and child sexual exploitation;</li>
              <li>the sending of unsolicited communications, promotions advertisements, or spam;</li>
              <li>the publishing or sharing of malicious content;</li>
              <li>the promotion or advertisement of products or services other than your own without appropriate authorization; or</li>
              <li>the development of services that compete with Soliscribe;</li>
            </ul>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>6.3 User Content</h3>
            <p className='text-foreground'>You may not post any User Content on the Service or Websites (or otherwise make use of the Service or Websites) in a manner that:</p>
            <ul className='list-disc pl-6 mt-2 text-foreground'>
              <li>is deceptive, fraudulent, illegal, obscene, defamatory, disparaging, libelous, threatening, or pornographic (including child pornography, which, upon becoming aware of, we will remove and report to law enforcement, including the National Center for Missing and Exploited Children);</li>
              <li>suggests any content, information or other outputs generated by AI are human-generated;</li>
              <li>criticizes others based on their race, ethnicity, national origin, religion, sex, gender, sexual orientation, disability, or medical condition;</li>
              <li>contains any personal information of minors under the age of 16;</li>
              <li>contains any sensitive personal information as defined by applicable law (such as financial information, payment card numbers, social security numbers, or health information) without Soliscribe&apos;s prior written consent granted as part of a Customer Agreement;</li>
              <li>contains viruses, bots, worms, or similar harmful materials;</li>
              <li>contains any information that you do not have a right to make available under law or any contractual or fiduciary duty; or</li>
              <li>could otherwise cause damage to Soliscribe or any third party.</li>
            </ul>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>6.4 Artificial Intelligence</h3>
            <p className='text-foreground'>If you use any AI or machine learning features and functionality (including third-party models) provided by Soliscribe (collectively, &quot;Soliscribe AI&quot;), you agree to:</p>
            <ul className='list-disc pl-6 mt-2 text-foreground'>
              <li>implement appropriate human oversight and safeguards to mitigate potential risks associated with your use of Soliscribe AI (i.e., impacts on a person&apos;s fundamental rights, health or safety);</li>
              <li>remain responsible for all decisions made, advice given, actions taken, and failures to take action based on your use of Soliscribe AI;</li>
              <li>provide information about your intended use of Soliscribe AI and compliance with this Acceptable Use Policy upon request; and</li>
              <li>evaluate Soliscribe AI outputs for accuracy and appropriateness in light of the probabilistic nature of AI and potential for producing inaccurate content.</li>
            </ul>
            <p className='mt-4 text-foreground'>More information on Soliscribe AI features and how to manage them can be found in the Soliscribe Guide.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>6.5 Acceptable Use Violations</h3>
            <p className='text-foreground'>If we reasonably believe a violation of this Acceptable Use Policy has occurred or may occur in the near future in a manner that may disrupt the Service or Websites for our Customers or other users, we may suspend or terminate your access to the Service and Websites, without any liability to us and in addition to any other remedies that may be available to us. Soliscribe reserves the right to notify the applicable Account Administrator of the foregoing.</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>7. Proprietary Rights</h2>
            <p className='text-foreground'>Soliscribe and its licensors exclusively own all right, title, and interest in and to all intellectual property rights in the Service and Websites. You agree to abide by all applicable copyright and other laws, as well as any additional copyright notices or restrictions contained in the Service and Websites. All present and future rights in and to trade secrets, patents, copyrights, trademarks, service marks, know-how, and other proprietary rights of any type under the laws of any governmental authority, domestic or foreign, including without limitation rights in and to all applications and registrations relating to the Service and Websites shall, as between you and Soliscribe, at all times be and remain the sole and exclusive property of Soliscribe.</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>8. User Content and Feedback</h2>
            <h3 className='text-xl font-semibold mb-2 text-foreground'>8.1 User Content and Submissions on the Service</h3>
            <p className='text-foreground'>The Service allows you to create tasks and submit associated information, text, files, and other materials (collectively, &quot;User Content&quot;) and to share that User Content with others. User Content submitted or otherwise made available to the Service is subject to the following terms:</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>8.2 Free User Content</h3>
            <p className='text-foreground'>Free Users maintain ownership of the User Content that they submit to the Service (&quot;Free User Content&quot;). By submitting Free User Content, Free Users grant Soliscribe a license to access, use, copy, reproduce, process, adapt, publish, transmit, and display that Free User Content, in order to provide the Service, and as permitted by Soliscribe&apos;s Privacy Statement, including if required to do so by law or in good faith to comply with legal process. We reserve the right to remove any Free User Content on the Service that violates these Terms or that is otherwise objectionable in Soliscribe&apos;s sole discretion.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>8.3 Managed User Content on the Service</h3>
            <p className='text-foreground'>User Content submitted to the Service by Managed Users is Customer Data, which is owned and controlled by the Customer, in accordance with the Customer Agreement.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>8.4 Feedback</h3>
            <p className='text-foreground'>The Service and the Websites may have certain features that allow you to submit comments, information, and other materials (collectively, &quot;Feedback&quot;) to Soliscribe, and/or share such Feedback with other users, or the public. If you submit Feedback, Soliscribe may use such Feedback for any purpose without any compensation or obligation to you. We reserve the right to remove any Feedback posted in our public forums for any reason at our sole discretion.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>8.5 User Content and Feedback Representations</h3>
            <p className='text-foreground'>You represent and warrant that you have all required rights to submit User Content and Feedback without violation or infringement of any third-party rights. You understand that Soliscribe does not control, and is not responsible for, User Content or Feedback, and that by using the Service and/or Websites, you may be exposed to User Content or Feedback from other users that is offensive, indecent, inaccurate, misleading, or otherwise objectionable.</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>9. WARRANTIES, DISCLAIMER, AND LIMITATION OF LIABILITY</h2>
            <p className='text-foreground'>THE SERVICE AND WEBSITES AND USER CONTENT, WHETHER PROVIDED BY SOLISCRIBE, ITS LICENSORS, ITS VENDORS OR ITS USERS, AND OTHER INFORMATION ON OR ACCESSIBLE FROM THE SERVICE AND WEBSITES ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY, REPRESENTATION, CONDITION, OR GUARANTEE OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY IMPLIED WARRANTIES, REPRESENTATIONS, CONDITIONS OR GUARANTEES OF QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT, ALL OF WHICH ARE DISCLAIMED TO THE FULLEST EXTENT PERMITTED BY LAW. SPECIFICALLY, BUT WITHOUT LIMITATION, SOLISCRIBE DOES NOT WARRANT THAT: (i) THE INFORMATION AVAILABLE ON THE SERVICE AND WEBSITES IS FREE OF ERRORS; (ii) THE FUNCTIONS OR FEATURES (INCLUDING BUT NOT LIMITED TO MECHANISMS FOR THE DOWNLOADING AND UPLOADING OF USER CONTENT) WILL BE UNINTERRUPTED, SECURE, OR FREE OF ERRORS; (iii) DEFECTS WILL BE CORRECTED, OR (iv) THE SERVICE AND WEBSITES OR THE SERVER(S) THAT MAKE THE SERVICE AND WEBSITES AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. SOLISCRIBE DOES NOT WARRANT, ENDORSE, GUARANTEE OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICE AND WEBSITES OR ANY WEBSITE FEATURED OR LINKED TO THROUGH THE SERVICE AND WEBSITES, AND SOLISCRIBE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICE AND WEBSITES. SOLISCRIBE WILL NOT BE LIABLE FOR THE OFFENSIVE OR ILLEGAL CONDUCT OF ANY THIRD PARTY. YOU VOLUNTARILY ASSUME THE RISK OF HARM OR DAMAGE FROM THE FOREGOING. THE FOREGOING LIMITATIONS WILL APPLY EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE AND TO THE FULLEST EXTENT PERMITTED BY LAW.</p>

            <p className='mt-4 text-foreground'>IN NO EVENT SHALL SOLISCRIBE OR ITS AFFILIATES, LICENSORS, VENDORS, OR ANY OF THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR OTHER REPRESENTATIVES BE LIABLE TO YOU OR ANY OTHER PERSON OR ENTITY FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, LOSS OF USE, OR COSTS OF OBTAINING SUBSTITUTE GOODS OR SERVICES), ARISING OUT OF OR IN CONNECTION WITH THE SERVICE AND WEBSITES, ANY MATERIALS, INFORMATION, OR RECOMMENDATIONS APPEARING ON THE SERVICE AND WEBSITES, OR ANY LINK PROVIDED ON THE SERVICE AND WEBSITES, WHETHER OR NOT SOLISCRIBE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND WHETHER BASED UPON WARRANTY, CONTRACT, TORT, STRICT LIABILITY, VIOLATION OF STATUTE, OR OTHERWISE. THIS EXCLUSION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW. IN ANY EVENT, OUR AGGREGATE LIABILITY WILL NOT EXCEED $100.</p>

            <p className='mt-4 text-foreground'>Some countries and U.S. jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages such as above in this section 9. Accordingly, some of the above limitations may not apply to you.</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>10. Indemnification</h2>
            <p className='text-foreground'>YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD SOLISCRIBE, ITS AFFILIATES, AND ITS RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, MEMBERS, SHAREHOLDERS, CONTRACTORS, OR REPRESENTATIVES HARMLESS FROM AND AGAINST ANY CLAIM OR DEMAND, INCLUDING WITHOUT LIMITATION, REASONABLE ATTORNEYS&apos; FEES, MADE IN CONNECTION WITH OR ARISING OUT OF YOUR USE OF THE SERVICE AND WEBSITES, YOUR CONNECTION TO THE SERVICE AND WEBSITES, YOUR VIOLATION OF THE TERMS, YOUR VIOLATION OF AN APPLICABLE LAW, YOUR SUBMISSION, POSTING, OR TRANSMISSION OF USER CONTENT TO THE SERVICE AND WEBSITES, AND/OR YOUR VIOLATION OF ANY RIGHTS OF ANOTHER INDIVIDUAL OR ENTITY. WE RESERVE THE RIGHT TO ASSUME THE EXCLUSIVE DEFENSE AND CONTROL OF SUCH DISPUTES, AND IN ANY EVENT YOU WILL COOPERATE WITH US IN ASSERTING ANY AVAILABLE DEFENSES.</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>11. Third-Party Links, Services and Websites</h2>
            <p className='text-foreground'>The Service and Websites may include information and content provided by third parties, including links to third-party websites, resources, and/or goods and services. Soliscribe is not responsible and will not be liable for any damages or losses caused by or relating to, (i) any content, advertising, products, or other materials on or available from such sites or resources, (ii) the availability of or any errors or omissions in such websites or resources, or (iii) any information handling practices or other business practices of the operators of such sites or resources. Your interactions with such third parties will be governed by the third parties&apos; own terms of service and privacy policies, and any other similar terms.</p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>12. General Terms</h2>
            <h3 className='text-xl font-semibold mb-2 text-foreground'>12.1 Modifications to the Service</h3>
            <p className='text-foreground'>We reserve the right at any time to modify or discontinue, temporarily or permanently, the Service and Websites (or any part thereof), with or without notice. You agree that Soliscribe shall not be liable to you or any third party for any modification, suspension or discontinuation of the Service and Websites.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>12.2 Controlling Law</h3>
            <p className='text-foreground'>These Terms will be governed by the laws of California notwithstanding its conflicts of law principles. However, some countries (including those in the European Union) have laws that require agreements to be governed by the local laws of the consumer&apos;s country. This paragraph does not override those laws.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>12.3 Initial Dispute Resolution</h3>
            <p className='text-foreground'>Most disputes can be resolved without resort to formal dispute resolution. If you take any issue with us or our Service, you agree that before taking any formal action, you will contact us at dispute-notice@soliscribe.com and provide a brief, written description of the dispute and your contact information (including your username, if your dispute relates to an account). Except for intellectual property and small claims court claims, the parties agree to use their best efforts to settle any dispute, claim, question, or disagreement directly through consultation with Soliscribe, and good faith negotiations shall be a condition to either party initiating a lawsuit.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>12.4 No Waiver</h3>
            <p className='text-foreground'>The failure of Soliscribe to exercise or enforce any right or remedy in these Terms does not waive that right or remedy. If any provision of these Terms is found to be invalid or unenforceable, the parties agree that the court should endeavor to give effect, to the maximum extent permitted by law, to the parties&apos; intentions as reflected in the provision, and the other provisions of these Terms will remain in full force and effect.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>12.5 Third-Party Beneficiaries</h3>
            <p className='text-foreground'>You agree that, except as otherwise expressly provided in these Terms, there shall be no third-party beneficiaries to these Terms.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>12.6 Entire Agreement</h3>
            <p className='text-foreground'>These Terms (and all terms and conditions incorporated herein)  constitute the entire agreement between you and Soliscribe, and supersede any prior agreements between you and Soliscribe on the subject matter. To the extent of any conflict or inconsistency between the provisions in these Terms and any other terms or resources referenced in these Terms, the terms contained directly in these Terms will first prevail; provided, however, that if there is a conflict or inconsistency between an applicable Customer Agreement and these Terms, the terms of the Customer Agreement will first prevail, followed by the provisions in these Terms, and then followed by the pages referenced in these Terms (e.g., the Privacy Statement). The applicable Customer will be responsible for notifying Managed Users of those conflicts or inconsistencies and until such time the terms set forth herein will be binding.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>12.7 Translations</h3>
            <p className='text-foreground'>Any non-English translations of these Terms are provided for convenience only. In the event of any ambiguity or conflict between translations, the English version shall control.</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>12.8 Miscellaneous</h3>
            <p className='text-foreground'>These Terms, and any rights or licenses granted hereunder, may not be assigned or delegated by you. These Terms, and any rights or licenses granted hereunder, may be assigned or delegated by Soliscribe without restriction. These Terms bind and inure to the benefit of each party and the party&apos;s successors and permitted assigns. These Terms may not be modified by an oral statement by a representative of Soliscribe. No agency, partnership, joint venture or employee-employer relationship is intended or created by these Terms. You agree that any agreements made by and between you and us in electronic form are as legally binding as if made in physical written form. If you are using the Service and Websites for or on behalf of the U.S. government, your license rights do not exceed those granted to non-government consumers. The section titles in these Terms are for convenience only and have no legal or contractual effect. Any provision of these Terms that by its nature is reasonably intended to survive beyond their termination or expiration shall survive. Notwithstanding the generality of the foregoing, the following sections shall survive any termination or expiration of these Terms: Sections 1 (Introduction); 2 (How These Terms Apply); 7 (Proprietary Rights); 8 (User Content and Feedback); 9 (Warranties, Disclaimer, and Limitation of Liability); 10 (Indemnification); and 12 (General Terms).</p>

            <h3 className='text-xl font-semibold mb-2 mt-4 text-foreground'>12.9 Notices</h3>
            <p className='text-foreground'>We may deliver notice to you by email, posting a notice on the Service and Websites or any other method we choose and such notice will be effective on dispatch. If you give notice to us, it will be effective when received and you must use the following email address: legal@soliscribe.com.</p>
          </section>
        </div>
      </main>
      <ScrollToTop />
    </div>
  )
}

export default TermsPage
