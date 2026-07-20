import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/sections/about";

export const Route = createFileRoute("/about")({
  component: About,
});
