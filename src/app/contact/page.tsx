import { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import PageFooter from "@/components/layout/PageFooter";

export const metadata: Metadata = {
  title: "Contact - Ben Ko",
  description: "Get in touch with Ben Ko for project collaborations and design consultations.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1">
        <ContactForm />
      </div>
      <PageFooter />
    </div>
  );
}