export const metadata = {
  title: "Placement Preparation - CareerCompanion",
  other: {
    "google-adsense-account": "ca-pub-6563298862178501",
  },
  description: "privacy policy",
}
export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-sm leading-7">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy describes how <strong>CampusCareer</strong> (“we”,
        “our”, or “us”) collects, uses, and protects information when you visit
        our website.
      </p>

      <p className="mb-4">
        By using this website, you agree to the collection and use of information
        in accordance with this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Information We Collect
      </h2>
      <p className="mb-4">
        We do not collect personal information such as name, email address, or
        phone number unless you voluntarily provide it by contacting us.
      </p>
      <p className="mb-4">
        Like many websites, we automatically collect certain non-personal
        information including IP address, browser type, device information,
        pages visited, and date/time of access.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Cookies and Web Beacons
      </h2>
      <p className="mb-4">
        CampusCareer uses cookies to improve user experience. Cookies are small
        files stored on your device that help analyze website traffic and user
        behavior.
      </p>

      <p className="mb-4">
        You can choose to disable cookies through your individual browser
        options. More detailed information about cookie management is available
        in your browser’s help section.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Google AdSense & Third-Party Ads
      </h2>
      <p className="mb-4">
        We use Google AdSense to display advertisements. Google is a third-party
        vendor that uses cookies (including the DoubleClick DART cookie) to serve
        ads based on users’ visits to this and other websites.
      </p>

      <p className="mb-4">
        Google’s use of advertising cookies enables it and its partners to serve
        ads to users based on their visit to our site and/or other sites on the
        internet.
      </p>

      <p className="mb-4">
        Users may opt out of personalized advertising by visiting:
        <br />
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline"
        >
          https://policies.google.com/technologies/ads
        </a>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Third-Party Privacy Policies
      </h2>
      <p className="mb-4">
        CampusCareer’s Privacy Policy does not apply to other advertisers or
        websites. We advise you to consult the respective Privacy Policies of
        third-party ad servers or websites for more detailed information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Children’s Information
      </h2>
      <p className="mb-4">
        CampusCareer does not knowingly collect any Personal Identifiable
        Information from children under the age of 13. If you believe that your
        child has provided such information on our website, please contact us
        immediately and we will do our best to promptly remove such information
        from our records.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Consent
      </h2>
      <p className="mb-4">
        By using our website, you hereby consent to our Privacy Policy and agree
        to its terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Updates to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </p>

      <p className="mt-8 text-muted-foreground">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </main>
  );
}
