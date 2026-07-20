import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/sections/contact-section";

export const Route = createFileRoute("/contact")({
  component: ContactSection,
});
