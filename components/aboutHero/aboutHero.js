export default function AboutHero(){
    return(
        <>
        {/* desktop */}
        <div className="hidden lg:block">
            <div className="px-2">
                <img
                src="/about/hero.png"
                alt="About us hero"
                className="w-full "
                     />
            </div>
        </div>

        {/* mobile */}

        <div className="block lg:hidden">
            <div className="w-full">
                <img
                src="/about/hero.png"
                alt="About us hero"
                className="w-full object-cover"
                     />
            </div>
        </div>
        </>
    )
}