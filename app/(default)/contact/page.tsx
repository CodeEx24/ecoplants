"use client";

import React, { lazy, Suspense } from "react";
import ContactBackground from "@/app/assets/main/Contact.webp";

// Lazy load components
const LandingPageDefault = lazy(
  () => import("@/components/default/LandingPageDefault"),
);
const ContactUs = lazy(() => import("./components/ContactUs"));
const RequestAQuote = lazy(() => import("./components/RequestAQuote"));
const Subscription = lazy(() => import("./components/Subscription"));

const LoadingFallback = () => (
  <div>Loading...</div> // Customize this fallback UI as needed
);

export default function ContactPage() {
  return (
    <div>
      <div className="relative">
        <Suspense fallback={<LoadingFallback />}>
          <LandingPageDefault title="Contact Us" image={ContactBackground} />
        </Suspense>
      </div>

      <Suspense fallback={<LoadingFallback />}>
        <ContactUs />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <RequestAQuote />
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <Subscription />
      </Suspense>

      <div className="absolute inset-0 h-full w-[100vw]"></div>
    </div>
  );
}
