import { redirect } from "next/navigation";

export default function NotFound() {
  // Redirect invalid legal notice types to main page
  redirect("/send-legal-notice");
}
