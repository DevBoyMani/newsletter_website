import CareersClient from "../../components/careersClient/careersClient";

const title = "Careers at House of Summary - Join Our Creative Teams";
const description =
  "Explore exciting career opportunities at House of Summary. Be part of a creative team dedicated to simplifying complex news for global readers.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.houseofsummary.com/careers",
  },
  openGraph: {
    title,
    description,
  },
};

export default function CareersPage() {
  return <CareersClient />;
}
