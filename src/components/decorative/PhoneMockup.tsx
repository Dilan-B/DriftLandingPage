import GrowthIcon from "@/components/decorative/GrowthIcon";

/**
 * A soft rounded device frame showing a stylized Drift app screen.
 * Built from the same tokens as the app — not a screenshot.
 */
const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[270px] sm:w-[300px]">
      {/* device frame */}
      <div className="relative rounded-[44px] bg-ink-deep p-3 shadow-lift">
        <div className="rounded-[34px] overflow-hidden bg-paper-warm">
          {/* notch */}
          <div className="relative h-7 bg-paper-warm">
            <div className="absolute left-1/2 top-2 -translate-x-1/2 h-4 w-20 rounded-full bg-ink-deep/90" />
          </div>

          {/* screen body */}
          <div className="px-5 pb-7 pt-1">
            {/* header */}
            <div className="flex items-center justify-between mb-5">
              <span className="font-wordmark font-bold text-xl text-ink-deep tracking-tight">
                Drift
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-earn-sage-lo px-2.5 py-1">
                <span className="font-kicker uppercase text-[8px] tracking-[0.12em] text-earn-sage">
                  Sapling
                </span>
              </span>
            </div>

            {/* earned time dial */}
            <div className="rounded-card bg-paper-card border border-line p-5 text-center shadow-soft">
              <p className="font-kicker uppercase text-[8px] tracking-[0.16em] text-ink-faint mb-2">
                Time earned
              </p>
              <p className="font-display text-4xl text-ink-deep leading-none">
                42<span className="text-xl text-ink-mid">m</span>
              </p>
              <div className="mt-4 h-1.5 w-full rounded-full bg-paper-sand overflow-hidden">
                <div className="h-full w-3/5 rounded-full bg-earn-terra" />
              </div>
              <p className="mt-2 text-[11px] text-ink-mid">
                3 of 5 tasks today
              </p>
            </div>

            {/* task card */}
            <div className="mt-4 rounded-card bg-paper-card border border-line p-4 shadow-soft">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-cat-outdoor flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-[13px] font-medium text-ink-deep leading-snug">
                    Take a 10-minute walk
                  </p>
                  <p className="text-[11px] text-ink-mid mt-0.5">
                    Outdoor · +15 min
                  </p>
                </div>
                <span className="rounded-chip bg-cta-bg text-cta-text text-[10px] px-2.5 py-1.5 font-medium">
                  Start
                </span>
              </div>
            </div>

            {/* shielded apps */}
            <div className="mt-4 rounded-card border border-dashed border-line p-4">
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-ink-mid">Shielded apps</p>
                <span className="font-kicker uppercase text-[8px] tracking-[0.12em] text-earn-blue">
                  Locked
                </span>
              </div>
              <div className="mt-3 flex gap-2">
                {["bg-cat-social", "bg-cat-work", "bg-cat-life"].map((c, i) => (
                  <div
                    key={i}
                    className={`h-9 w-9 rounded-[12px] ${c} opacity-90`}
                  />
                ))}
                <div className="h-9 w-9 rounded-[12px] bg-paper-sand grid place-items-center text-ink-faint text-[11px]">
                  +6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating growth accent */}
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-card bg-paper-card border border-line shadow-soft grid place-items-center rotate-6">
        <GrowthIcon stage={3} className="h-12 w-12" />
      </div>
    </div>
  );
};

export default PhoneMockup;
