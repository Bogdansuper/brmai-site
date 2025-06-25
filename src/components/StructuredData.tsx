import Script from 'next/script';

interface StructuredDataProps {
  data: Record<string, any>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
}

// Вспомогательные функции для создания схем
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BRM AI",
  "url": "https://mybrmai.com",
  "logo": "https://mybrmai.com/icon.png",
  "description": "AI-powered business automation solutions provider",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Barcelona",
    "addressRegion": "Catalonia",
    "addressCountry": "ES"
  },
  "sameAs": [
    "https://www.linkedin.com/in/bogdan-antonov-b48901206"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+34-637-523-323",
    "contactType": "sales",
    "availableLanguage": ["en", "es", "ru", "uk", "ca"],
    "email": "brmai@mybrmai.com"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BRM AI",
  "image": "https://mybrmai.com/icon.png",
  "url": "https://mybrmai.com",
  "telephone": "+34-637-523-323",
  "email": "brmai@mybrmai.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Barcelona",
    "addressRegion": "Catalonia",
    "addressCountry": "ES"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
};

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const serviceSchema = (service: {
  name: string,
  description: string,
  provider?: string,
  areaServed?: string[],
  serviceType?: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": service.provider || "BRM AI"
  },
  "areaServed": service.areaServed || ["US", "CA", "UK", "AU"],
  "serviceType": service.serviceType
}); 