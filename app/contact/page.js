import ContactClient from "../../components/contactClient/contactClient";

export const metadata = {
  title: "Contact House of Summary - Get in Touch",
  description:
    "Have questions or partnership inquiries? Contact the House of Summary team today for support, feedback, or business opportunities.",
  alternates: {
    canonical: "https://www.houseofsummary.com/contact",
  },
};

export default function Contact() {
  return <ContactClient />;
}
