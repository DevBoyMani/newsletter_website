'use client';

import { useParams } from 'next/navigation';
import CareersGraphicDesigner from '../../../components/careersGraphicDesigner/careersGraphicDesigner';
import CareersUXDesigner from '../../../components/careersUXDesigner/careersUXDesigner';
import CareersFullStack from '../../../components/careersFullStack/careersFullStack';
import CareersLogoDesigner from '../../../components/careersLogoDesigner/careersLogoDesigner';
import CareersWebDesigner from '../../../components/careersWebDesigner/careersWebDesigner';
import CareersBackendDev from '../../../components/careersBackendDev/careersBackendDev';
import CareersSoftWareEngineer from '../../../components/careersSoftwareEngineer/careersSoftwareEngineer';
// import dynamic from 'next/dynamic';

// Lazy import your components
// const GraphicDesigner = dynamic(() => import('@/components/careers/GraphicDesigner'));
// const UXDesigner = dynamic(() => import('@/components/careers/UXDesigner'));
// const FullStack = dynamic(() => import('@/components/careers/FullStack'));
// const BackendDev = dynamic(() => import('@/components/careers/BackendDev'));
// const SoftwareEngineer = dynamic(() => import('@/components/careers/SoftwareEngineer'));

const componentMap = {
  'graphic-designer': () => <CareersGraphicDesigner/>,
  'ux-designer': () => <CareersUXDesigner/>,
  'full-stack':  () => <CareersFullStack/>,
  'logo-designer':  () => <CareersLogoDesigner/>,
  'web-designer':  () => <CareersWebDesigner/>, 
  'backend-dev':  () => <CareersBackendDev/>,
  'software-engineer':  () => <CareersSoftWareEngineer/>,
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
