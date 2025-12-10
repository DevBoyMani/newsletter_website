"use client";

import { usePathname } from "next/navigation";
import Footer from "../../components/footer/footer";
import Link from "next/link";
import Image from "next/image";

export default function FooterWrapper() {
  const pathname = usePathname();

  const isCareersSlugPage = pathname.startsWith("/careers/");
  const showContactBanner = !isCareersSlugPage;

  return (
    <>
      {/* Contact banner (all pages except careers/[slug]) */}
      {showContactBanner && (
        <div className="block lg:hidden fixed top-0 left-0 w-full z-[998]">
          <div className="bg-[#01261E] w-full px-4 py-[8px] flex items-center justify-center">
            <span className="text-[#ffffff] text-[12px] font-[600] leading-normal">
              Want to advertise with us?
            </span>
            <Link
              href="/contact"
              className="ml-2 text-[#C7A262] hover:underline inline-flex items-center text-[12px] font-[800] leading-normal"
            >
              <span>SCHEDULE A CALL</span>
              <Image
                src="/contact/r-arr.png"
                alt="arrow"
                width={11}
                height={11}
                className="ml-[15px]"
              />
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
