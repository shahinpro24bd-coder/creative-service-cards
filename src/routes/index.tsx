import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect } from "react";

// The real website is a static HTML site served from public/site.
const SITE_HOME = "/site/html/index.html";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Md. Afzal Mahfuzullah | Vitreo-Retina Specialist & Phaco Surgeon" },
      {
        name: "description",
        content:
          "Vitreo-Retina Specialist & Phaco Surgeon in Dhaka — cataract surgery, retina, glaucoma, pediatric eye care and comprehensive eye checkups.",
      },
      { property: "og:title", content: "Dr. Md. Afzal Mahfuzullah | Vitreo-Retina Specialist" },
      {
        property: "og:description",
        content: "Expert eye care at Vision Eye Hospital, Green Road, Dhaka.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    if (typeof window === "undefined") {
      throw redirect({ href: SITE_HOME, statusCode: 302 });
    }
  },
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace(SITE_HOME);
  }, []);
  return null;
}
