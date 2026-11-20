import type { Metadata } from "next";
import LegalPageLayout from "@/components/layouts/LegalPageLayout";
import { pageMetadata } from "@/lib/pageMetadata";
import { CONTACT_INBOX } from "@/lib/links";

// Every statement here should match what the app actually does. When the app
// changes how it handles data, update this page (and the App Store privacy
// labels) in the same release.

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Drift collects, uses, and protects your data, including how the Family plan handles children's information. We never sell your data or show ads.",
  path: "/privacy",
});

const sections = [
  { id: "overview", title: "Overview" },
  { id: "information-collect", title: "Information We Collect" },
  { id: "on-device", title: "What Stays on Your Device" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "ai-verification", title: "AI Task Verification" },
  { id: "social", title: "Friends & Challenges" },
  { id: "family", title: "Family Plan & Children" },
  { id: "data-sharing", title: "Service Providers" },
  { id: "data-retention", title: "Data Retention & Deletion" },
  { id: "your-choices", title: "Your Choices & Rights" },
  { id: "security", title: "Security" },
  { id: "website", title: "This Website" },
  { id: "changes", title: "Changes" },
  { id: "contact", title: "Contact Us" },
];

const Mail = () => <a href={`mailto:${CONTACT_INBOX}`}>{CONTACT_INBOX}</a>;

const PrivacyPage = () => (
  <LegalPageLayout
    title="Privacy Policy"
    intro="We've kept this short and human-readable. Here's exactly what Drift collects, why, and who can see it."
    lastUpdated="November 20, 2026"
    sections={sections}
  >
    <section id="overview">
      <h2>Overview</h2>
      <p>
        This policy explains what information the Drift iPhone app and this
        website collect, how we use it, and the choices you have. In short: we
        collect what the app needs to work, we don&apos;t show ads, and we
        never sell your data.
      </p>
      <p>
        Drift has two kinds of accounts. <strong>Personal</strong> accounts
        are for people 13 and older. <strong>Child</strong> accounts exist
        only inside a parent&apos;s Family plan and collect much less. See{" "}
        <a href="#family">Family Plan &amp; Children</a>.
      </p>
    </section>

    <section id="information-collect">
      <h2>Information We Collect</h2>
      <p>For personal and parent accounts:</p>
      <ul>
        <li>
          <strong>Account information:</strong> your email address, a username,
          and an optional profile photo. Passwords are handled by our
          authentication provider; we never see them.
        </li>
        <li>
          <strong>Task and time data:</strong> the tasks you create, complete or
          delete (title, length, category), your earned screen-time balance,
          minutes used, levels, XP and streaks.
        </li>
        <li>
          <strong>Proof results:</strong> when a task needs proof, we keep the
          type of proof (note, photo or video) and a short written summary of
          what it showed. We don&apos;t store the photos or video frames
          themselves. See <a href="#ai-verification">AI Task Verification</a>.
        </li>
        <li>
          <strong>Friends and challenges:</strong> who you&apos;re connected to
          and the challenges you send or receive.
        </li>
        <li>
          <strong>Subscription status:</strong> whether your subscription is
          active and when it renews. Apple handles payment; we never receive
          your card details.
        </li>
        <li>
          <strong>Usage events and device information:</strong> events such as
          app opened, task created or completed, and screens viewed, plus your
          iOS version and app version. These are stored with our own database,
          not a third-party analytics or advertising service.
        </li>
        <li>
          <strong>Notification token:</strong> so we can send you
          notifications you&apos;ve allowed.
        </li>
        <li>
          <strong>Support messages and feedback</strong> you send us.
        </li>
        <li>
          <strong>Research participant ID:</strong> only if you redeem an
          access code for a research study that asks for one.
        </li>
      </ul>
    </section>

    <section id="on-device">
      <h2>What Stays on Your Device</h2>
      <p>Several features work entirely on your iPhone and don&apos;t send data to us:</p>
      <ul>
        <li>
          <strong>Blocked apps:</strong> Apple&apos;s Screen Time system gives
          Drift anonymous tokens for the apps you pick. We can&apos;t see which
          apps they are, and we don&apos;t see which apps you use.
        </li>
        <li>
          <strong>Calendar and places:</strong> if you turn on task suggestions,
          Drift reads your calendar and saved locations on your device to
          suggest tasks. Calendar events and coordinates are not uploaded.
        </li>
        <li>
          <strong>Motion, NFC and Health:</strong> Sleep Guard, Lockbox and the
          steps shortcut check motion, an NFC tag or your step count on your
          device.
        </li>
        <li>
          <strong>Contacts:</strong> if you choose to find friends from your
          contacts, email addresses are converted into one-way hashes on your
          phone. Only the hashes are sent, to check for matching Drift
          accounts, and they aren&apos;t stored.
        </li>
      </ul>
    </section>

    <section id="how-we-use">
      <h2>How We Use Information</h2>
      <ul>
        <li>To run Drift: track tasks, earned time and blocking</li>
        <li>To value tasks and check proof with AI (personal accounts)</li>
        <li>To connect you with friends you add</li>
        <li>To send notifications you&apos;ve allowed</li>
        <li>To understand how the app is used and fix problems</li>
        <li>To prevent fraud and abuse</li>
        <li>To comply with legal obligations</li>
      </ul>
      <p>We don&apos;t use your information for advertising.</p>
    </section>

    <section id="ai-verification">
      <h2>AI Task Verification</h2>
      <p>
        For personal accounts, Drift uses OpenAI&apos;s API to estimate how
        much screen time a task is worth (based on its title and length) and to
        check proof when a task needs it. Proof you submit (a note, a photo, or
        still frames taken from a short video) is sent through our server to
        OpenAI for that check. Videos never leave your phone; only a few still
        frames do.
      </p>
      <p>
        We keep the result and a short written summary of the proof, not the
        images. Under OpenAI&apos;s API terms, this data isn&apos;t used to
        train their models. AI can make mistakes; if you think a decision was
        wrong, contact us. AI verification is never used for child accounts.
      </p>
    </section>

    <section id="social">
      <h2>Friends &amp; Challenges</h2>
      <p>
        Friends you add can see your username, profile photo, level, and how
        much screen time you earned and used today. They can&apos;t see your
        tasks. People can find you only by typing your exact username. You can
        remove a friend at any time.
      </p>
    </section>

    <section id="family">
      <h2>Family Plan &amp; Children</h2>
      <p>
        The Family plan lets a parent or guardian set tasks for their children
        and approve them before screen time unlocks. Children, including
        children under 13, can use Drift only through a parent&apos;s Family
        plan.
      </p>

      <h3>How a child account is created</h3>
      <p>
        A parent first creates their own Drift account and Family plan, which
        gives them a private family code. A child account can be created only
        by entering that code on the child&apos;s iPhone, so a child can&apos;t
        join without a parent choosing to share it. Children don&apos;t create
        an email address or password, and never see a payment screen.
      </p>

      <h3>What we collect from a child account</h3>
      <ul>
        <li>The name entered when joining (we recommend a first name or nickname)</li>
        <li>An automatically generated username and account ID</li>
        <li>Tasks their parent assigns, and whether each one is done, approved or sent back</li>
        <li>Their screen-time balance and minutes used on blocked apps (not which apps)</li>
        <li>App requests they type, such as the name of an app they&apos;d like to use</li>
        <li>Usage events, iOS and app version, and a notification token, as described above</li>
      </ul>
      <p>
        We don&apos;t collect a child&apos;s email, phone number, photos,
        location, contacts or calendar. Child accounts don&apos;t use AI
        verification or friends and challenges.
      </p>

      <h3>Who can see it</h3>
      <p>
        A child&apos;s information is visible to the parent who owns the family
        and to the child. It isn&apos;t shown to other users, used for
        advertising, or sold. Our service providers process it only to run
        the app (see <a href="#data-sharing">Service Providers</a>).
      </p>

      <h3>Parents&apos; rights</h3>
      <p>
        Parents can see their child&apos;s tasks, approvals, history and
        remaining time in their own Drift app. A parent can also ask us at any
        time to:
      </p>
      <ul>
        <li>Give them a copy of the information we hold about their child</li>
        <li>Delete their child&apos;s account and information</li>
        <li>Stop any further collection from their child</li>
      </ul>
      <p>
        Email <Mail /> from the email address on the parent account. We may ask
        a few questions to confirm you&apos;re the parent before we act. Deleting
        a child&apos;s information ends their access to Drift.
      </p>
      <p>
        If you believe a child under 13 is using a personal account rather than a
        Family plan, contact us and we&apos;ll delete it.
      </p>
    </section>

    <section id="data-sharing">
      <h2>Service Providers</h2>
      <p>
        We don&apos;t sell or rent personal information, and we don&apos;t
        share it with advertisers or data brokers. We share it only with
        providers that help us run Drift, and only for that purpose:
      </p>
      <ul>
        <li>
          <strong>Supabase:</strong> database, accounts and file storage
          (United States)
        </li>
        <li>
          <strong>OpenAI:</strong> AI task valuation and proof checks
          (personal accounts only)
        </li>
        <li>
          <strong>Apple and RevenueCat:</strong> subscriptions and payments
        </li>
        <li>
          <strong>Expo and Apple:</strong> delivering push notifications
        </li>
        <li>
          <strong>Resend:</strong> account emails such as password resets
        </li>
        <li>
          <strong>Cloudflare:</strong> hosting this website
        </li>
      </ul>
      <p>
        We may also disclose information when required by law, or to protect
        the safety and rights of our users and others.
      </p>
    </section>

    <section id="data-retention">
      <h2>Data Retention &amp; Deletion</h2>
      <p>
        We keep your information while your account is active. You can delete
        your account from your profile in the app. When you do, we remove or
        anonymize the personal information tied to it: your username, photo,
        task titles, balance and subscription details. Copies may remain in
        backups for a limited time before they&apos;re overwritten, and we keep
        records only where the law requires it.
      </p>
      <p>
        When a parent deletes their account, their family is closed and
        children are removed from it. A child&apos;s own information is
        deleted when a parent asks us to (see{" "}
        <a href="#family">Parents&apos; rights</a>).
      </p>
    </section>

    <section id="your-choices">
      <h2>Your Choices &amp; Rights</h2>
      <ul>
        <li>Edit your username and profile photo in the app</li>
        <li>Turn off notifications in iOS Settings</li>
        <li>Turn calendar and place suggestions on or off in the app</li>
        <li>Delete your account in the app</li>
        <li>
          Ask for a copy of your data, a correction, or deletion by emailing{" "}
          <Mail />
        </li>
      </ul>
      <p>
        Depending on where you live (for example the EU, UK or California), you
        may have additional rights over your data. Email us to use them; we
        won&apos;t treat you differently for doing so.
      </p>
    </section>

    <section id="security">
      <h2>Security</h2>
      <p>
        Data is encrypted in transit and at rest with our hosting provider.
        Access rules in our database stop one account from reading another
        account&apos;s data; the only exception is a parent seeing their own
        children&apos;s information. Your sign-in session is stored encrypted on
        your phone. No system is perfectly secure, but we work to protect your
        information and will notify you if a breach affects you, as the law
        requires.
      </p>
    </section>

    <section id="website">
      <h2>This Website</h2>
      <p>
        driftproductivity.com doesn&apos;t have accounts or logins. We use
        Cloudflare Web Analytics, which counts visits without cookies and
        without tracking you across sites. If you use the contact form, it
        opens an email in your own email app; we only receive what you send.
      </p>
    </section>

    <section id="changes">
      <h2>Changes</h2>
      <p>
        If we make a material change, we&apos;ll update this page and the date at
        the top. If a change affects how we handle children&apos;s
        information, we&apos;ll notify parents before it takes effect.
      </p>
    </section>

    <section id="contact">
      <h2>Contact Us</h2>
      <p>
        Questions about this policy, your data, or your child&apos;s data? Email{" "}
        <Mail />.
      </p>
    </section>
  </LegalPageLayout>
);

export default PrivacyPage;
