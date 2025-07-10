import Footer from './footer';
import Navbar from './header';

function Terms() {
  return (<>
  <section className="sticky top-0 z-50">
        <Navbar />
      </section>

      {/* Header Section */}
      <header className="text-center py-8 space-y-2 mt-5 bg-[#4361ee]">
        <h2 className="text-3xl text-white font-bold">
        Terms and Conditions
        </h2>
        <h6 className="text-lg text-white">
          • <strong>Last updated:</strong> June 15, 2023
        </h6>
      </header>
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      
      <p>
        Welcome to LaCleo Digital. These terms and conditions (“Terms”) govern your use of our website, services, and any related products and offerings (collectively referred to as the “Services”). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use our Services.
      </p>
      <ol>
        <li>
          <strong>General</strong>
          <ul>
            <li><strong>Eligibility:</strong> You must be at least 18 years old and have the legal authority to enter into agreements to use our Services.</li>
            <li><strong>Modification:</strong> We reserve the right to modify or update these Terms at any time without prior notice. Any changes will be effective immediately upon posting on our website. It is your responsibility to review these Terms periodically for any updates or changes.</li>
          </ul>
        </li>
        <li>
          <strong>Services</strong>
          <ul>
            <li><strong>Description:</strong> LaCleo Digital provides a range of digital marketing services, including but not limited to search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, content marketing, email marketing, and website design and development.</li>
            <li><strong>Client Responsibilities:</strong> You agree to provide accurate and complete information necessary for us to deliver our services effectively. You are responsible for providing access to relevant accounts, platforms, and resources required for the execution of our services. It is your responsibility to comply with all applicable laws and regulations related to your use of our Services.</li>
            <li><strong>Service Limitations:</strong> While we strive to provide high-quality services, we cannot guarantee specific results or outcomes. The success of digital marketing efforts can vary based on various factors, including market conditions and competition. We will use our expertise to deliver the best possible results, but we do not guarantee specific rankings, traffic, conversions, or revenue.</li>
          </ul>
        </li>
        <li>
          <strong>Fees and Payments</strong>
          <ul>
            <li><strong>Pricing:</strong> The pricing for our Services will be provided to you in a separate agreement, proposal, or invoice. All prices are in the currency stated, and you are responsible for any applicable taxes or fees.</li>
            <li><strong>Payment Terms:</strong> Payment terms will be specified in the agreement or invoice. Unless otherwise agreed upon, payment is due upon receipt of the invoice. Failure to make timely payments may result in the suspension or termination of our Services.</li>
          </ul>
        </li>
        <li>
          <strong>Intellectual Property</strong>
          <ul>
            <li><strong>Ownership:</strong> All intellectual property rights, including copyrights, trademarks, and trade secrets, associated with our Services, content, and materials remain the property of LaCleo Digital or its licensors.</li>
            <li><strong>Usage:</strong> You are granted a limited, non-exclusive, non-transferable license to use the materials and content provided as part of our Services for your internal business purposes only. You may not reproduce, distribute, modify, or create derivative works without our prior written consent.</li>
          </ul>
        </li>
        <li>
          <strong>Confidentiality</strong>
          <ul>
            <li><strong>Confidential Information:</strong> During the course of our engagement, both parties may have access to confidential information about each other. Confidential information includes, but is not limited to, business strategies, financial information, client lists, and trade secrets. Both parties agree to keep such information confidential and not disclose it to any third parties without prior written consent.</li>
          </ul>
        </li>
        <li>
          <strong>Limitation of Liability</strong>
          <ul>
            <li><strong>Disclaimer:</strong> LaCleo Digital will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use of our Services. We are not responsible for any loss or damage to your data, reputation, or business arising from the use of our Services.</li>
          </ul>
        </li>
        <li>
          <strong>Termination</strong>
          <ul>
            <li><strong>Termination:</strong> Either party may terminate the Services by providing written notice to the other party. Any outstanding fees or obligations will become immediately due upon termination.</li>
          </ul>
        </li>
        <li>
          <strong>Governing Law</strong>
          <ul>
            <li><strong>Jurisdiction:</strong> These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where LaCleo Digital is registered, without regard to its conflict of laws principles.</li>
          </ul>
        </li>
        <li>
          <strong>Severability</strong>
          <ul>
            <li>If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.</li>
          </ul>
        </li>
      </ol>
      <p>
        By using our Services, you acknowledge that you have read, understood, and agreed to these Terms. If you have any questions or concerns, please contact us at <a href="mailto:info@lacleodigital.com">info@lacleodigital.com</a>.
      </p>
    </div>
    <Footer></Footer>
    </>
  );
}

export default Terms;
