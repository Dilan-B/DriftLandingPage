import type { Metadata } from "next";
import LegalPageLayout from "@/components/layouts/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Drift collects, uses, and protects your data.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "information-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "ai-verification", title: "AI-Assisted Verification" },
  { id: "photos-proof", title: "Photos & Proof" },
  { id: "social", title: "Friends & Social" },
  { id: "analytics", title: "Analytics & Diagnostics" },
  { id: "data-sharing", title: "Data Sharing" },
  { id: "data-retention", title: "Data Retention" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "your-choices", title: "Your Choices" },
  { id: "account-controls", title: "Account & Data Controls" },
  { id: "contact", title: "Contact Us" },
];

const PrivacyPage = () => (
  <LegalPageLayout
    title="Privacy Policy"
    intro="We've kept this short and human-readable. Here's exactly what Drift collects and why."
    lastUpdated="June 17, 2026"
    sections={sections}
  >
    <section id="overview">
      <h2>Overview</h2>
      <p>
        This Privacy Policy explains what information Drift collects, how we use
        it, and the choices you have. We keep it honest: we don&apos;t sell your
        data to advertisers, and we don&apos;t track you beyond what&apos;s
        needed to run the app.
      </p>
    </section>

    <section id="information-collect">
      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Account information:</strong> name, email, and profile details
          you choose to share.
        </li>
        <li>
          <strong>Task data:</strong> tasks you&apos;ve completed, progress,
          streaks, and earned time.
        </li>
        <li>
          <strong>Proof submissions:</strong> photos or notes you submit to
          verify a task.
        </li>
        <li>
          <strong>Usage data:</strong> how you use features, plus crashes and
          errors.
        </li>
        <li>
          <strong>Device information:</strong> iOS version, device type, and app
          version.
        </li>
      </ul>
    </section>

    <section id="how-we-use">
      <h2>How We Use Information</h2>
      <ul>
        <li>To run and improve Drift</li>
        <li>To verify task completion with AI assistance</li>
        <li>To personalize your experience and suggest tasks</li>
        <li>To send notifications about tasks and progress</li>
        <li>To detect and prevent fraud or abuse</li>
        <li>To comply with legal obligations</li>
      </ul>
    </section>

    <section id="ai-verification">
      <h2>AI-Assisted Task Verification</h2>
      <p>
        Drift may use AI to help verify task completion. When you submit proof,
        our AI can analyze it to confirm you finished the task. AI isn&apos;t
        perfect and can make mistakes — you can always appeal a decision through
        support.
      </p>
    </section>

    <section id="photos-proof">
      <h2>Photos or Proof Submissions</h2>
      <p>
        If you submit photos or notes to verify tasks, we store them for
        verification. You can delete task history at any time in the app.
        Submitted proof is stored securely and is not shared with third parties.
      </p>
    </section>

    <section id="social">
      <h2>Friends & Social Features</h2>
      <p>
        If Drift includes friends or shared activity, we process the information
        needed to connect you with people you choose to add. You control what
        you share, and you can remove connections at any time in the app.
      </p>
    </section>

    <section id="analytics">
      <h2>Analytics and Diagnostics</h2>
      <p>
        We use analytics tools to understand how Drift is used and to fix bugs.
        This data is aggregated and helps us improve performance and design. You
        can opt out in the app settings.
      </p>
    </section>

    <section id="data-sharing">
      <h2>Data Sharing</h2>
      <p>
        We don&apos;t sell or share your personal data with advertisers, except
        as necessary to:
      </p>
      <ul>
        <li>
          <strong>Service providers:</strong> cloud hosting, email delivery, and
          payment processing, bound by confidentiality agreements.
        </li>
        <li>
          <strong>Legal compliance:</strong> when required by law or to protect
          safety and rights.
        </li>
      </ul>
    </section>

    <section id="data-retention">
      <h2>Data Retention</h2>
      <p>
        We retain your account information while your account is active. If you
        delete your account, we delete your personal data within 30 days, except
        where the law requires us to keep records.
      </p>
    </section>

    <section id="childrens-privacy">
      <h2>Children&apos;s Privacy</h2>
      <p>
        Drift is not intended for children under 13, and we don&apos;t knowingly
        collect their data. If we learn we&apos;ve collected data from a child
        under 13, we&apos;ll delete it. Parents or guardians can reach us at{" "}
        <a href="mailto:driftappcontact@gmail.com">driftappcontact@gmail.com</a>.
      </p>
    </section>

    <section id="your-choices">
      <h2>Your Choices</h2>
      <p>You have control over your data. Inside the Drift app you can:</p>
      <ul>
        <li>Edit or delete your profile information</li>
        <li>Delete task history and proof submissions</li>
        <li>Opt out of analytics</li>
        <li>Disable notifications</li>
        <li>Request a copy of your data</li>
      </ul>
    </section>

    <section id="account-controls">
      <h2>Account and Data Controls</h2>
      <p>
        All account settings, data deletion, and privacy controls are managed
        directly inside the Drift app through Settings. This website does not
        host account management or login.
      </p>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <p>
        Questions about this policy or your data? Email us at{" "}
        <a href="mailto:driftappcontact@gmail.com">driftappcontact@gmail.com</a>.
      </p>
    </section>
  </LegalPageLayout>
);

export default PrivacyPage;
