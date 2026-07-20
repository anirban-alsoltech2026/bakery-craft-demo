import { createFileRoute } from "@tanstack/react-router";
import { GallerySection } from "@/sections/gallery-section";

export const Route = createFileRoute("/gallery")({
  component: GallerySection,
});
