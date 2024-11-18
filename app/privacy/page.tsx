'use client'

import { FC } from 'react'
import ScrollToTop from '@/components/ScrollToTop'

const PrivacyPage: FC = () => {
  return (
    <div className='min-h-screen flex flex-col bg-background'>
      <main className='flex-grow container mx-auto px-4 py-12 max-w-4xl'>
        <h1 className='text-4xl font-bold mb-8 mt-8 text-foreground'>Privacy Policy</h1>
        
        <div className='prose prose-foreground max-w-none'>
          <p className='text-foreground'>
            Last updated: November 1, 2024
          </p>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>Introduction</h2>
            <p className='text-foreground'>
              At Soliscribe, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. By using Soliscribe, you agree to the collection and use of information in accordance with this policy.
            </p>
            <p className='text-foreground'>
              We encourage you to read this Privacy Policy carefully to understand our practices regarding your personal data and how we treat it. If you do not agree with our policies and practices, you should not use our service.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>Information We Collect</h2>
            <p className='text-foreground'>We collect several types of information from and about users of our service:</p>
            
            <h3 className='text-xl font-semibold mb-3 text-foreground'>Personal Information</h3>
            <ul className='list-disc pl-6 mb-4 text-foreground'>
              <li>Account information (name, email address, password)</li>
              <li>Profile information and preferences</li>
              <li>Payment and billing information</li>
              <li>Communications and correspondence with us</li>
              <li>User-generated content and feedback</li>
            </ul>

            <h3 className='text-xl font-semibold mb-3 text-foreground'>Automatically Collected Information</h3>
            <ul className='list-disc pl-6 mb-4 text-foreground'>
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Location information</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>How We Use Your Information</h2>
            <p className='text-foreground'>We use the information we collect for various purposes:</p>
            
            <h3 className='text-xl font-semibold mb-3 text-foreground'>Service Provision and Improvement</h3>
            <ul className='list-disc pl-6 mb-4 text-foreground'>
              <li>Provide, maintain, and improve our services</li>
              <li>Develop new features and functionality</li>
              <li>Personalize your experience</li>
              <li>Process your transactions and payments</li>
              <li>Provide customer support and respond to inquiries</li>
            </ul>

            <h3 className='text-xl font-semibold mb-3 text-foreground'>Communications</h3>
            <ul className='list-disc pl-6 mb-4 text-foreground'>
              <li>Send administrative messages and updates</li>
              <li>Provide technical notices and security alerts</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Respond to your comments and questions</li>
            </ul>

            <h3 className='text-xl font-semibold mb-3 text-foreground'>Analytics and Improvement</h3>
            <ul className='list-disc pl-6 mb-4 text-foreground'>
              <li>Analyze usage patterns and trends</li>
              <li>Monitor and improve service performance</li>
              <li>Debug and fix technical issues</li>
              <li>Prevent fraud and abuse</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>Information Sharing and Disclosure</h2>
            <p className='text-foreground'>We may share your information in the following circumstances:</p>
            <ul className='list-disc pl-6 mb-4 text-foreground'>
              <li>With service providers and business partners who assist in operating our service</li>
              <li>In response to legal requests or to comply with applicable laws</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a business transaction (e.g., merger or acquisition)</li>
              <li>With your consent or at your direction</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>Data Security</h2>
            <p className='text-foreground'>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:
            </p>
            <ul className='list-disc pl-6 mb-4 text-foreground'>
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and audits</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>Your Rights and Choices</h2>
            <p className='text-foreground'>You have several rights regarding your personal information:</p>
            <ul className='list-disc pl-6 mb-4 text-foreground'>
              <li>Access and review your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent for certain processing activities</li>
              <li>Request data portability</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>Children&apos;s Privacy</h2>
            <p className='text-foreground'>
              Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold mb-4 text-foreground'>Changes to This Privacy Policy</h2>
            <p className='text-foreground'>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions, concerns, or requests related to this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mb-4">
              Email: privacy@soliscribe.com<br />
            </p>
          </section> */}
        </div>
      </main>
      <ScrollToTop />
    </div>
  )
}

export default PrivacyPage
