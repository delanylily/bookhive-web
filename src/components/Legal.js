import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Legal = () => {
  return (
    <div className="container">
      <div className="legal-content">
        <Link
          to="/"
          className="btn"
          style={{
            marginBottom: "2rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <FaArrowLeft /> Back to Home
        </Link>

        <h1>Legal Information</h1>

        <section>
          <h2>Terms of Service</h2>
          <p>Last updated: March 2025</p>

          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing or using the BookHive application ("Service"), you
            agree to be bound by these Terms of Service ("Terms"). If you
            disagree with any part of the terms, you may not access the Service.
          </p>

          <h3>2. Description of Service</h3>
          <p>
            BookHive is a book exchange platform that connects readers to share
            and discover books in their community.
          </p>

          <h3>3. User Accounts</h3>
          <p>
            When you create an account with us, you must provide accurate,
            complete, and current information. Failure to do so constitutes a
            breach of the Terms, which may result in immediate termination of
            your account.
          </p>
          <p>
            You are responsible for safeguarding the password and for all
            activities that occur under your account.
          </p>

          <h3>4. User Content</h3>
          <p>
            Our Service allows you to post, link, store, share and otherwise
            make available certain information, text, graphics, or other
            material ("Content"). You are responsible for the Content that you
            post on or through the Service.
          </p>
          <p>
            By posting Content, you grant us the right to use, modify, publicly
            perform, publicly display, reproduce, and distribute such Content on
            and through the Service.
          </p>

          <h3>5. Prohibited Uses</h3>
          <p>
            You may use the Service only for lawful purposes and in accordance
            with these Terms. You agree not to:
          </p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "2rem",
              marginBottom: "1rem",
            }}
          >
            <li>
              Use the Service in any way that violates any applicable law or
              regulation
            </li>
            <li>
              Impersonate any person or entity or falsely state or misrepresent
              your affiliation
            </li>
            <li>
              Engage in any conduct that restricts or inhibits anyone's use or
              enjoyment of the Service
            </li>
            <li>
              Use the Service to advertise or offer to sell goods and services
            </li>
            <li>
              Post or transmit any content that is unlawful, harmful,
              threatening, abusive, harassing, defamatory, or otherwise
              objectionable
            </li>
          </ul>

          <h3>6. Intellectual Property</h3>
          <p>
            The Service and its original content, features, and functionality
            are and will remain the exclusive property of BookHive and its
            licensors.
          </p>

          <h3>7. Termination</h3>
          <p>
            We may terminate or suspend your account immediately, without prior
            notice or liability, for any reason whatsoever, including without
            limitation if you breach the Terms.
          </p>

          <h3>8. Limitation of Liability</h3>
          <p>
            In no event shall BookHive, nor its directors, employees, partners,
            agents, suppliers, or affiliates, be liable for any indirect,
            incidental, special, consequential or punitive damages, including
            without limitation, loss of profits, data, use, goodwill, or other
            intangible losses, resulting from your access to or use of or
            inability to access or use the Service.
          </p>

          <h3>9. Changes</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will try to
            provide at least 30 days' notice prior to any new terms taking
            effect.
          </p>

          <h3>10. Governing Law</h3>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of the United States, without regard to its conflict of law
            provisions.
          </p>

          <h3>11. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            Email:{" "}
            <a href="mailto:bookhive.app.info@gmail.com">
              bookhive.app.info@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2>Privacy Policy</h2>
          <p>Last updated: March 2025</p>

          <h3>Introduction</h3>
          <p>
            Welcome to BookHive. We respect your privacy and are committed to
            protecting your personal data. This privacy policy will inform you
            about how we look after your personal data when you use our
            application and tell you about your privacy rights.
          </p>

          <h3>The Data We Collect</h3>
          <p>We collect and process the following data:</p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "2rem",
              marginBottom: "1rem",
            }}
          >
            <li>
              <strong>Account Information</strong>: Name, email address, and
              profile picture
            </li>
            <li>
              <strong>Location Data</strong>: Your approximate location to help
              find books and users nearby
            </li>
            <li>
              <strong>User Content</strong>: Information about books you add,
              messages you send, and other content you create
            </li>
            <li>
              <strong>Usage Data</strong>: Information about how you use our
              application
            </li>
            <li>
              <strong>Device Information</strong>: Information about your mobile
              device
            </li>
          </ul>

          <h3>How We Use Your Data</h3>
          <p>We use your data for the following purposes:</p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "2rem",
              marginBottom: "1rem",
            }}
          >
            <li>To provide and maintain our service</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>
              To gather analysis or valuable information so that we can improve
              our service
            </li>
            <li>To monitor the usage of our service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h3>Data Sharing and Disclosure</h3>
          <p>We may share your information in the following situations:</p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "2rem",
              marginBottom: "1rem",
            }}
          >
            <li>
              <strong>With Other Users</strong>: When you share books or
              communicate with other users
            </li>
            <li>
              <strong>With Service Providers</strong>: To help us provide,
              maintain, and improve our services
            </li>
            <li>
              <strong>For Legal Reasons</strong>: To comply with legal
              obligations
            </li>
            <li>
              <strong>Business Transfers</strong>: In connection with any
              merger, sale of company assets, or acquisition
            </li>
          </ul>

          <h3>Data Security</h3>
          <p>
            We implement appropriate security measures to protect your personal
            data against unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h3>Your Rights</h3>
          <p>Depending on your location, you may have the following rights:</p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "2rem",
              marginBottom: "1rem",
            }}
          >
            <li>The right to access, update or delete your information</li>
            <li>The right to rectification</li>
            <li>The right to object</li>
            <li>The right of restriction</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>

          <h3>Children's Privacy</h3>
          <p>
            Our service does not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information from anyone
            under 13.
          </p>

          <h3>Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last Updated" date.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            Email:{" "}
            <a href="mailto:bookhive.app.info@gmail.com">
              bookhive.app.info@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;
