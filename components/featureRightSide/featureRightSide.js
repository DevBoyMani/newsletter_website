'use client';

import FeatureRightSideInner from '../featureRightSideInner/FeatureRightSideInner';

const FeatureRightSide = ({ sections, sectionRefs }) => {
  return (
    <div className="w-3/4 bg-[#FAFAFA] h-screen overflow-y-auto px-6 pt-6 pb-60 space-y-16 scroll-smooth scrollable-content" style={{ scrollbarWidth: "none" }}>
      {sections.map((item, index) => (
        <div
          key={index}
          className="feature-section"
          ref={(el) => (sectionRefs.current[index] = el)}
        >
          <FeatureRightSideInner
            data={{
              ...item,
              isFirst: index === 0,
              isSecond: index ===1,
              isThird: index === 2,
              isFourth: index === 3,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureRightSide;
