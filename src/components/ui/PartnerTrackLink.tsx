"use client";

import type { PartnerFormData } from "@/lib/validation";

// Window event PartnerForm listens for to preselect its Track field.
export const PARTNER_TRACK_EVENT = "drift:partner-track";

type Props = {
  track: PartnerFormData["track"];
  className?: string;
  children: React.ReactNode;
};

// Jumps to the inquiry form (plain anchor, so it works without JS) and
// preselects the track the visitor chose.
const PartnerTrackLink = ({ track, className, children }: Props) => (
  <a
    href="#inquire"
    className={className}
    onClick={() =>
      window.dispatchEvent(
        new CustomEvent(PARTNER_TRACK_EVENT, { detail: track })
      )
    }
  >
    {children}
  </a>
);

export default PartnerTrackLink;
