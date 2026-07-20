import { createFileRoute } from "@tanstack/react-router";
import MenuPageContent from "@/sections/menu-section";

export const Route = createFileRoute("/menu")({
  component: MenuPageContent,
});
