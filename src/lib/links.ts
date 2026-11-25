export const APP_STORE_URL =
  "https://apps.apple.com/us/app/drift-productivity/id6778215875";

// Where every contact link and form on the site sends mail.
export const CONTACT_INBOX = "hello@ridilabs.com";

// Supabase edge function (in the Drift app repo: supabase/functions/site-inquiry)
// that emails Partner and Contact form submissions to CONTACT_INBOX via Resend.
export const INQUIRY_ENDPOINT =
  "https://kxsikaymdykepcniozlp.supabase.co/functions/v1/site-inquiry";
