import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Zakaria Kassemi",
  description:
    "Privacy policy for zakariakassemi.com and the owner's personal publishing tool.",
  robots: { index: true, follow: true },
};

const UPDATED = "June 26, 2026";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 section-padding">
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ color: "var(--text-secondary)" }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
          Privacy Policy
        </h1>
        <p className="text-sm mb-8" style={{ color: "var(--text-muted)" }}>
          Last updated: {UPDATED}
        </p>

        <div className="space-y-6 leading-relaxed text-[15px]">
          <p>
            This Privacy Policy covers the website <strong>zakariakassemi.com</strong> and the
            personal application <strong>&quot;Zakaria Kassemi Poster&quot;</strong>, both operated by
            Zakaria Kassemi (&quot;we&quot;, &quot;I&quot;). The application is a private, single-user
            tool used solely by the owner to publish the owner&apos;s own videos to the owner&apos;s
            own social account. It is not a multi-user product and is not offered to the public.
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              Data we collect
            </h2>
            <ul className="list-disc ps-5 space-y-1">
              <li>
                <strong>Website:</strong> minimal, aggregated, anonymous analytics (e.g. page views).
                No accounts, and no sale of personal data.
              </li>
              <li>
                <strong>Social integration:</strong> the app accesses only the owner&apos;s own
                account, through official OAuth, in order to upload and publish videos the
                owner created. It does not collect, store, or process data belonging to any other
                user.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              How data is used
            </h2>
            <p>
              OAuth access and refresh tokens are stored locally on the owner&apos;s own machine and
              used only to call the posting APIs. Tokens are never shared with third
              parties and can be revoked at any time from your account settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              Third-party services
            </h2>
            <p>
              The site is hosted on Vercel and integrates with APIs for Developers. Their handling of
              data is governed by their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              Data retention &amp; your rights
            </h2>
            <p>
              Authorization tokens are retained only as long as needed to operate the tool and are
              deleted on request or revocation. To request deletion or ask any privacy question,
              contact <a href="mailto:zakariakassemi65@gmail.com" className="underline">zakariakassemi65@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
              Contact
            </h2>
            <p>
              Zakaria Kassemi — Morocco —{" "}
              <a href="mailto:zakariakassemi65@gmail.com" className="underline">zakariakassemi65@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
