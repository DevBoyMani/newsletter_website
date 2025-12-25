"use client";

import { useParams } from "next/navigation";
import SocialMediaIntern from "../../components/socialMediaIntern/socialMediaIntern";
import PythonDeveloper from "../../components/pythonDeveloper/pythonDeveloper";
import ContentWriterLondon from "../../components/contentWriterLondon/contentWriterLondon";
import SeoManager from "../../components/seoManager/seoManager";
import HeadOfSales from "../../components/headOfSales/headOfSales";
import BrandPartnershipsManager from "../../components/brandPartnershipsManager/brandPartnershipsManager";
import LegalComplianceOfficer from "../../components/legalComplianceOfficer/legalComplianceOfficer";
import VideoEditor from "../../components/videoEditor/videoEditor";
import AssistantToTheCOO from "../../components/assistantToTheCOO/assistantToTheCOO";

const componentMap = {
  "marketing-social": () => <SocialMediaIntern />,
  "python-developer": () => <PythonDeveloper />,
  "content-writer-london-summary": () => <ContentWriterLondon />,
  "seo-manager": () => <SeoManager />,
  "head-of-sales": () => <HeadOfSales />,
  "legal-compliance-officer": () => <LegalComplianceOfficer />,
  "brand-partnerships-manager": () => <BrandPartnershipsManager />,
  "video-editor": () => <VideoEditor />,
  "assistant-to-the-coo": () => <AssistantToTheCOO />,
};

export default function CareersSlugClient() {
  const { slug } = useParams();
  const Component = componentMap[slug];

  if (!Component) {
    return (
      <div className="text-center text-red-600 py-20 text-xl">
        No job page found for: <strong>{slug}</strong>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Component />
    </div>
  );
}
