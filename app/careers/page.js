<div className="">
      <div className="flex justify-items-start space-x-60  mx-auto relative">
        {/* left */}
        <div className="bg-[#343434] px-4 w-1/3 fixed top-20 h-screen">
          <div className="py-1 px-3 text-sm mb-4 pt-10">
            <a className="py-1 px-3 rounded-xl text-white bg-white/10 backdrop-blur-md transition hover:bg-white/20">
              Home page
              </a>
    
              <span className="text-4xl px-4  font-semibold">.</span>
              <span className="leading-6">is an EU-based designer with a multi-disciplinary approach, creating websites & graphics.</span>
          </div>
          <div className="text-4xl text-white px-4 py-4">
          Building innovative digital solutions.
        </div>
          {/* Sidebar List */}
        <div
          className="border-t border-b border-gray-600 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          <AdvertiseSidebar activeSlug={slug} />
        </div>

        </div>
        {/* right */}
        <div className="w-full overflow-y-auto">
        <div className="">
          <Component />
        </div>
        </div>
      </div>
    </div>




--------------------------------


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
"presidential-summary": () => (
    <div className="relative mt-0">
      <img
        src="/hero-landing-img.jpg"
        alt="Total Visits"
        className="h-screen w-full object-cover  rounded-l-3xl"
      />
      <div className="absolute top-0 left-0 text-black w-full flex justify-between p-6">
        <h3 className="text-lg bg-white px-8 py-2 rounded-full">info</h3>
        <a className="text-lg bg-white px-6 py-2 rounded-full" href="#">Visit Website</a>
      </div>
      <div className="absolute bottom-10 left-10 text-white">
        <h3 className="text-4xl font-bold mb-2">Total Visits</h3>
        <p className="text-lg">Metrics for last month...</p>
      </div>
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
    
    <div className="flex justify-start h-screen bg-[#343434]">
    {/* Left Sidebar */}
    <div className="w-[30%] text-white h-screen fixed">
      <div className="py-1 px-3 text-sm mb-4 pt-10">
        <a className="py-1 px-3 rounded-xl text-white bg-white/10 backdrop-blur-md transition hover:bg-white/20">
          Home page
        </a>
        <span className="text-4xl px-4 font-semibold">.</span>
        <span className="leading-6">is EU-based designer with the multi-disciplinary approach, creates websites & graphics.</span>
      </div>
      <div className="text-4xl px-4 py-4">Building innovative digital solutions.</div>
      <div className="mx-6 border-t border-b border-gray-600 overflow-y-auto h-[320px]" style={{ scrollbarWidth: "none" }}>
        <AdvertiseSidebar activeSlug={slug} />
      </div>
      <div className="flex justify-between py-6">
        <p className="px-4">Interested in hiring me?</p>
        <p className="text-sm px-4 py-1 rounded-xl bg-white/10 transition hover:bg-white/20">
          sagravia@gmail.com
        </p>
      </div>
    </div>

    {/* Right Content */}
    <div className="w-[60%]  ml-auto overflow-y-auto h-screen">
      <div className="py-6 px-4">
        <Component />
      </div>
    </div>
  </div>
  );
}
