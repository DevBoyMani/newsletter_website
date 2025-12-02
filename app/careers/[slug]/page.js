"use client";

import { useParams } from "next/navigation";
import SocialMediaIntern from "../../../components/socialMediaIntern/socialMediaIntern";
import PythonDeveloper from "../../../components/pythonDeveloper/pythonDeveloper";
import CareersFullStack from "../../../components/careersFullStack/careersFullStack";
import CareersLogoDesigner from "../../../components/careersLogoDesigner/careersLogoDesigner";
import CareersWebDesigner from "../../../components/careersWebDesigner/careersWebDesigner";
import CareersBackendDev from "../../../components/careersBackendDev/careersBackendDev";
import CareersSoftWareEngineer from "../../../components/careersSoftwareEngineer/careersSoftwareEngineer";
import ContentWriterLondon from "../../../components/contentWriterLondon/contentWriterLondon";

// import dynamic from 'next/dynamic';

// Lazy import your components
// const GraphicDesigner = dynamic(() => import('@/components/careers/GraphicDesigner'));
// const UXDesigner = dynamic(() => import('@/components/careers/UXDesigner'));
// const FullStack = dynamic(() => import('@/components/careers/FullStack'));
// const BackendDev = dynamic(() => import('@/components/careers/BackendDev'));
// const SoftwareEngineer = dynamic(() => import('@/components/careers/SoftwareEngineer'));

const componentMap = {
  "marketing-social": () => <SocialMediaIntern />,
  "python-developer": () => <PythonDeveloper />,
  "content-writer-london-summary": () => <ContentWriterLondon />,
  "seo-manager": () => <CareersFullStack />,
  "leadership-ad-sales": () => <CareersLogoDesigner />,
  "legal-compliance-officer": () => <CareersWebDesigner />,
  "brand-partnerships-manager": () => <CareersBackendDev />,
  "video-editor": () => <CareersSoftWareEngineer />,
};

export default function CareersSlug() {
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
