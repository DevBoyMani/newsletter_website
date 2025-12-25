"use client";

import { useParams, useRouter } from "next/navigation";
import PrivacyPolicy from "../../components/policies/privacyPolicy/privacyPolicy";
import CookiePolicy from "../../components/policies/cookiePolicy/cookiePolicy";
import RefundPolicy from "../../components/policies/refundPolicy/refundPolicy";
import TermsOfUse from "../../components/policies/termsOfUse/termsOfUse";

// Correct: store component functions (not JSX)
const componentMap = {
  "privacy-policy": PrivacyPolicy,
  "cookie-policy": CookiePolicy,
  "refund-policy": RefundPolicy,
  "terms-of-use": TermsOfUse,
};

export default function PolicyClient() {
  const { slug } = useParams();
  //   const router = useRouter();

  const selectedTopic = slug || "privacy-policy";

  const Component =
    componentMap[selectedTopic] ||
    (() => <p className="text-gray-500">Still in progress guys!</p>);

  // If you need sidebar/topic switching later:
  //   const handleTopicChange = (newTopic) => {
  //     router.push(`/policy/${newTopic}`);
  //   };

  return (
    <div className="">
      <Component />
    </div>
  );
}
