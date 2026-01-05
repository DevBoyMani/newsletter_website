import ContactClient from "../../components/contactClient/contactClient";

const title = "Contact House of Summary - Get in Touch";
const description =
  "Have questions or partnership inquiries? Contact the House of Summary team today for support, feedback, or business opportunities.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.houseofsummary.com/contact",
  },
  openGraph: {
    title,
    description,
  },
};

export default function Contact() {
  return <ContactClient />;
}
