import type { Metadata } from "next";
import LegalPageLayout from "@/components/layouts/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Drift.",
};

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "use-of-drift", title: "Use of Drift" },
  { id: "accounts", title: "Accounts" },
  { id: "user-content", title: "User Content" },
  { id: "ai-features", title: "AI Features" },
  { id: "acceptable-use", title: "Acceptable Use" },
  { id: "app-store", title: "App Store / Apple" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "limitation", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact" },
];

const TermsPage = () => (
  <LegalPageLayout
    title="Terms of Service"
    intro="Plain-language terms for using Drift. Please read them before joining."
    lastUpdated="[Insert Date]"
    sections={sections}
  >
    <section id="acceptance">
      <h2>Acceptance of Terms</h2>
      <p>
        By downloading and using Drift, you agree to these Terms of Service. If
        you don&apos;t agree, you may not use the app. We may update these terms;
        continued use after changes means you accept them.
      </p>
    </section>

    <section id="use-of-drift">
      <h2>Use of Drift</h2>
      <p>
        Drift is a screen-time tool designed to help you build healthier digital
        habits. By using Drift:
      </p>
      <ul>
        <li>You agree to use it lawfully and for its intended purpose</li>
        <li>You won&apos;t bypass, hack, or circumvent the app</li>
        <li>You won&apos;t reverse-engineer Drift or its infrastructure</li>
        <li>You accept that Drift is provided as-is, without guarantees</li>
      </ul>
    </section>

    <section id="accounts">
      <h2>Accounts</h2>
      <p>
        You&apos;re responsible for keeping your account credentials
        confidential. Account creation, settings, and deletion are handled inside
        the app. If you&apos;re a minor, your parent or guardian is responsible
        for your use.
      </p>
    </section>

    <section id="user-content">
      <h2>User Content and Task Submissions</h2>
      <p>
        When you submit task proof, you grant Drift a license to use, store, and
        process that content for verification and improvement. You represent that
        you have the right to submit what you share.
      </p>
    </section>

    <section id="ai-features">
      <h2>AI Features and Verification</h2>
      <p>
        Drift uses AI to assist with task verification. AI is not perfect and can
        make mistakes. You can appeal verification decisions through support. We
        are not liable for AI errors, but we work continually to improve
        accuracy.
      </p>
    </section>

    <section id="acceptable-use">
      <h2>Acceptable Use</h2>
      <p>You agree not to use Drift to:</p>
      <ul>
        <li>Submit false, harmful, illegal, explicit, or hateful content</li>
        <li>Harass, threaten, or abuse other users</li>
        <li>Submit fake proof or cheat the system</li>
        <li>Share private information about others without consent</li>
        <li>Transmit malware or harmful code</li>
        <li>Violate anyone&apos;s rights or privacy</li>
      </ul>
    </section>

    <section id="app-store">
      <h2>App Store / Apple Terms</h2>
      <p>
        Drift is distributed through the Apple App Store, so your use is also
        governed by Apple&apos;s App Store Terms of Service. Where these Terms
        conflict with Apple&apos;s, Apple&apos;s terms govern your relationship
        with Apple.
      </p>
    </section>

    <section id="disclaimers">
      <h2>Disclaimers</h2>
      <p>
        Drift is provided &quot;as-is&quot; without warranties of any kind. We
        don&apos;t warrant that Drift will be error-free, uninterrupted, or
        secure, and we don&apos;t guarantee specific results — those depend on
        your commitment.
      </p>
    </section>

    <section id="limitation">
      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Drift and its creators are not
        liable for any indirect, incidental, special, or consequential damages
        arising from your use of the app.
      </p>
    </section>

    <section id="termination">
      <h2>Termination</h2>
      <p>
        We may suspend or terminate your account for violations of these Terms or
        for abuse, fraud, or illegal activity. You can delete your account at any
        time in the app settings.
      </p>
    </section>

    <section id="changes">
      <h2>Changes to Terms</h2>
      <p>
        We may update these Terms from time to time. We&apos;ll reflect material
        changes by updating the &quot;Last updated&quot; date above. Continued use
        means you accept the new terms.
      </p>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href="mailto:driftappcontact@gmail.com">driftappcontact@gmail.com</a>.
      </p>
    </section>
  </LegalPageLayout>
);

export default TermsPage;
