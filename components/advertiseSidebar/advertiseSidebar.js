import Link from "next/link";

const AdvertiseSidebar = ({ activeSlug }) => {
  const advertiseListNames = [
    "Total Visits",
    "Page Views",
    "Bounce Rate",
    "Average Session Duration",
    "New Users",
    "Returning Users",
    "Organic Search",
    "Social Media",
    "Direct Traffic",
  ];

  const formatSlug = (str) => str.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="h-full px-4 py-2">
      {advertiseListNames.map((name) => {
        const slug = formatSlug(name);
        return (
          <Link key={slug} href={`/advertise/${slug}`}>
            <button
              className={`block text-left w-full py-2 px-3 rounded-lg transition-all ${
                activeSlug === slug ? "bg-gray-700" : "hover:bg-gray-600"
              }`}
            >
              {name}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default AdvertiseSidebar;
