export default function AboutHero() {
  return (
    <>
      {/* desktop */}
      <div className="hidden lg:block">
        <div className="px-2">
          <img src="/about/hero.png" alt="About us hero" className="w-full " />
        </div>
      </div>

      {/* mobile */}

      <div className="block lg:hidden pt-[120px]">
        <div className="w-full px-4">
          <img
            src="/about/hero-mobile.png"
            alt="About us hero"
            className="w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
