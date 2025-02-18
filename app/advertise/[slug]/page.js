// "use client";
// import { useRouter } from "next/navigation";
import AdvertiseSidebar from "../../../components/advertiseSidebar/advertiseSidebar";
// import AdvertiseSidebar from "../../components/advertiseSidebar/advertiseSidebar";
// import HeaderButton from "../../components/advertiseComponents/headerButton/headerButton";

// Utility function to normalize slugs
const formatSlug = (str) => str.toLowerCase().replace(/\s+/g, "-");
const unformatSlug = (slug) => slug.replace(/-/g, " ");

// Component Mapping
const components = {
  "total-visits": () => (
    <div className="p-4 flex flex-col items-center">
      <img
        src="/images/total-visits.jpg"
        alt="Total Visits"
        className="w-1/2 h-auto mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">Total Visits</h3>
      <p className="text-lg">Metrics for last month...</p>
    </div>
  ),
  "page-views": () => (
    <div className="p-4 flex flex-col items-center">
      <img
        src="/images/page-views.jpg"
        alt="Page Views"
        className="w-1/2 h-auto mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">Page Views</h3>
      <p className="text-lg">Analyze page popularity...</p>
    </div>
  ),
  "bounce-rate": () => (
    <div className="p-4 flex flex-col items-center">
      <img
        src="/images/bounce-rate.jpg"
        alt="Bounce Rate"
        className="w-1/2 h-auto mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">Bounce Rate</h3>
      <p className="text-lg">Users leaving after 1 page...</p>
    </div>
  ),
  "average-session-duration": () => (
    <div className="p-4 flex flex-col items-center">
      <img
        src="/images/avg-session-duration.jpg"
        alt="Average Session Duration"
        className="w-1/2 h-auto mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">Average Session Duration</h3>
      <p className="text-lg">Longer sessions = more engagement...</p>
    </div>
  ),
  "new-users": () => (
    <div className="p-4 flex flex-col items-center">
      <img
        src="/images/new-users.jpg"
        alt="New Users"
        className="w-1/2 h-auto mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">New Users</h3>
      <p className="text-lg">Audience growth insights...</p>
    </div>
  ),
  "returning-users": () => (
    <div className="p-4 flex flex-col items-center">
      <img
        src="/images/returning-users.jpg"
        alt="Returning Users"
        className="w-1/2 h-auto mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">Returning Users</h3>
      <p className="text-lg">Retention analysis...</p>
    </div>
  ),
  "organic-search": () => (
    <div className="p-4 flex flex-col items-center">
      <img
        src="/images/organic-search.jpg"
        alt="Organic Search"
        className="w-1/2 h-auto mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">Organic Search</h3>
      <p className="text-lg">SEO traffic analysis...</p>
    </div>
  ),
  "social-media": () => (
    <div className="p-4 flex flex-col items-center">
      <img
        src="/images/social-media.jpg"
        alt="Social Media"
        className="w-1/2 h-auto mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">Social Media</h3>
      <p className="text-lg">Marketing impact evaluation...</p>
    </div>
  ),
  "direct-traffic": () => (
    <div className="p-4 flex flex-col items-center">
      <img
        src="/images/direct-traffic.jpg"
        alt="Direct Traffic"
        className="w-1/2 h-auto mb-4"
      />
      <h3 className="text-2xl font-bold mb-2">Direct Traffic</h3>
      <p className="text-lg">Users typing your URL directly...</p>
    </div>
  ),
};

export default async function Advertise({ params }) {
  //   const router = useRouter();
  const { slug } = await params;
  console.log(slug);
  // Render the matched component or fallback
  const Component =
    slug && components[slug]
      ? components[slug]
      : () => <div>Content not found</div>;

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="flex-1 fixed md:h-screen lg:w-[540px] bg-[#343434] text-white p-4 flex flex-col">
        <header className="py-1 px-3 text-sm mb-4 pt-10">
          {/* <HeaderButton onClick={() => {}} /> */}
          <p className="leading-6 text-white ml-2 py-1">
            <span className="text-4xl pr-4 font-semibold">.</span>
            Digital solutions for your business.
          </p>
        </header>

        <div className="text-4xl text-white px-4 py-4">
          Building innovative digital solutions.
        </div>
        {/* Sidebar List */}
        <div
          className="h-[320px] border-t border-b border-gray-600 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <AdvertiseSidebar activeSlug={slug} />
        </div>

        <div className="flex justify-between text-white py-6">
          <p className="px-4">Interested in hiring me?</p>
          <p className="text-sm px-4 py-1 rounded-xl text-white bg-white/10 backdrop-blur-md transition hover:bg-white/20">
            sagravia@gmail.com
          </p>
        </div>
      </div>

      {/* Right Content */}
      <div className="ml-[300px] flex-1 overflow-y-auto">
        <div className="h-full py-6 px-4">
          <Component />
        </div>
      </div>
    </div>
  );
}
