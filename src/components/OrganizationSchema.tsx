import { siteConfig } from "@/data/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.logo}`,
  description: siteConfig.description,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "SRTIP, Block B-B53-154",
    addressLocality: "Sharjah",
    addressCountry: "AE",
  },
  contactPoint: siteConfig.contact.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.number,
    contactType: "sales",
    areaServed: phone.label === "UK" ? "GB" : "AE",
  })),
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
