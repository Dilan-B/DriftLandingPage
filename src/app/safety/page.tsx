import type { Metadata } from "next";
import LegalPageLayout from "@/components/layouts/LegalPageLayout";

export const metadata: Metadata = {
  title: "Safety & AI Verification",
  description: "How Drift uses AI, its limits, and how to stay safe.",
};

const sections = [
  { id: "how-ai-works", title: "How It Works" },
  { id: "ai-limits", title: "AI Can Make Mistakes" },
  { id: "sensitive-info", title: "Sensitive Information" },
  { id: "not-professional", title: "Not Professional Help" },
  { id: "appeals", title: "Appeals & Support" },
];

const SafetyPage = () => (
  <LegalPageLayout
    title="Safety & AI Verification"
    intro="A plain explanation of how AI helps verify tasks — and where its limits are."
    lastUpdated="June 17, 2026"
    sections={sections}
  >
    <section id="how-ai-works">
      <h2>How AI Verification Works</h2>
      <p>
        When you submit proof of a completed task, Drift may use AI to help
        confirm it. In short:
      </p>
      <ul>
        <li>
          <strong>You submit proof</strong> — a photo, a note, or a task status
        </li>
        <li>
          <strong>AI reviews it</strong> — the system checks the proof against
          the task
        </li>
        <li>
          <strong>You get feedback</strong> — approved, needs review, or a
          request for more
        </li>
        <li>
          <strong>It learns over time</strong> — getting better at recognizing
          your tasks
        </li>
      </ul>
    </section>

    <section id="ai-limits">
      <h2>AI Can Make Mistakes</h2>
      <p>AI is powerful but imperfect. It can misread context or miss genuine work. That&apos;s why:</p>
      <ul>
        <li>
          <strong>We allow appeals.</strong> Disagree? Contact support for a
          manual review.
        </li>
        <li>
          <strong>Humans stay in the loop</strong> for edge cases.
        </li>
        <li>
          <strong>We improve continuously</strong> by tracking where AI falls
          short.
        </li>
      </ul>
    </section>

    <section id="sensitive-info">
      <h2>Don&apos;t Submit Sensitive Information</h2>
      <p>Be thoughtful about task proof. Please don&apos;t include:</p>
      <ul>
        <li>
          <strong>Financial info</strong> — bank accounts, cards, or payment
          details
        </li>
        <li>
          <strong>Medical records</strong> — health information or prescriptions
        </li>
        <li>
          <strong>Personal documents</strong> — IDs, passports, or private
          addresses
        </li>
        <li>
          <strong>Other people&apos;s information</strong> — keep friends and
          family private
        </li>
      </ul>
      <p>
        If you accidentally submit something sensitive, contact support and
        we&apos;ll delete it.
      </p>
    </section>

    <section id="not-professional">
      <h2>Not a Substitute for Professional Help</h2>
      <p>
        Drift is a tool for building better digital habits. It is{" "}
        <strong>not</strong> a replacement for professional help. Do not rely on
        Drift for:
      </p>
      <ul>
        <li>
          <strong>Mental health support</strong> — see a therapist or counselor
        </li>
        <li>
          <strong>Medical advice</strong> — see a doctor
        </li>
        <li>
          <strong>Emergencies</strong> — call your local emergency number
        </li>
        <li>
          <strong>Addiction recovery</strong> — seek professional treatment
        </li>
      </ul>
      <p>
        If you&apos;re struggling, please reach out to someone you trust or a
        professional. Drift can support your journey, but it can&apos;t replace
        real help.
      </p>
    </section>

    <section id="appeals">
      <h2>Appeals and Support</h2>
      <p>
        If you disagree with a verification decision or have a safety concern,
        email{" "}
        <a href="mailto:driftappcontact@gmail.com">driftappcontact@gmail.com</a>.
        We review appeals manually and take your feedback seriously.
      </p>
    </section>
  </LegalPageLayout>
);

export default SafetyPage;
