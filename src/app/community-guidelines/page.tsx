import type { Metadata } from "next";
import LegalPageLayout from "@/components/layouts/LegalPageLayout";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "How we keep Drift respectful, safe, and honest.",
};

const sections = [
  { id: "overview", title: "Overview" },
  { id: "respectful", title: "Be Respectful" },
  { id: "prohibited", title: "Prohibited Content" },
  { id: "harassment", title: "No Harassment" },
  { id: "fake-proof", title: "No Fake Proof" },
  { id: "private-info", title: "No Private Info" },
  { id: "reporting", title: "Reporting" },
  { id: "enforcement", title: "Enforcement" },
];

const CommunityGuidelinesPage = () => (
  <LegalPageLayout
    title="Community Guidelines"
    intro="Drift is built on trust and respect. These guidelines keep it safe, inclusive, and focused on genuine growth."
    lastUpdated="[Insert Date]"
    sections={sections}
  >
    <section id="overview">
      <h2>Overview</h2>
      <p>
        If Drift includes friends or shared activity, everyone is expected to
        follow these guidelines. They&apos;re simple: be kind, be honest, and
        respect other people&apos;s privacy.
      </p>
    </section>

    <section id="respectful">
      <h2>Be Respectful</h2>
      <p>
        Treat other users, friends, and the Drift team with kindness.
        Disagreements happen — keep them civil, and celebrate others&apos;
        progress even when it looks different from yours.
      </p>
    </section>

    <section id="prohibited">
      <h2>Prohibited Content</h2>
      <p>Do not submit, share, or post content that is:</p>
      <ul>
        <li>
          <strong>Harmful or illegal:</strong> violence, threats, illegal
          activity, or self-harm
        </li>
        <li>
          <strong>Hateful:</strong> slurs, discrimination, or content targeting
          protected groups
        </li>
        <li>
          <strong>Explicit:</strong> sexual, adult, or NSFW content
        </li>
        <li>
          <strong>Abusive:</strong> personal attacks, trolling, or spam
        </li>
      </ul>
    </section>

    <section id="harassment">
      <h2>No Harassment</h2>
      <p>
        Do not harass, bully, shame, or target other users. This includes
        repeated unwanted contact and coordinated attacks. Report harassment
        right away.
      </p>
    </section>

    <section id="fake-proof">
      <h2>No Fake Proof</h2>
      <p>
        Submit genuine proof of task completion. Faking submissions undermines
        the system and your own growth. AI verification and community trust
        depend on honesty.
      </p>
    </section>

    <section id="private-info">
      <h2>No Private Information About Others</h2>
      <p>
        Don&apos;t share other people&apos;s personal information — phone numbers,
        addresses, real names, or financial details — without explicit consent.
      </p>
    </section>

    <section id="reporting">
      <h2>Reporting Violations</h2>
      <p>See something that breaks these guidelines? Report it by:</p>
      <ul>
        <li>Tapping Report on a user&apos;s profile or submission in the app</li>
        <li>
          Emailing{" "}
          <a href="mailto:driftappcontact@gmail.com">
            driftappcontact@gmail.com
          </a>{" "}
          with details
        </li>
      </ul>
    </section>

    <section id="enforcement">
      <h2>Enforcement</h2>
      <p>
        Violations may lead to warnings, content removal, temporary suspension,
        or permanent termination. We review reports case-by-case and give users a
        chance to explain when appropriate.
      </p>
    </section>
  </LegalPageLayout>
);

export default CommunityGuidelinesPage;
