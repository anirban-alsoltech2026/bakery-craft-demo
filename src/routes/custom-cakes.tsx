import { createFileRoute } from "@tanstack/react-router";
import { CustomCakesSection } from "@/sections/custom-cakes-section";

export const Route = createFileRoute("/custom-cakes")({
  component: CustomCakesSection,
});
