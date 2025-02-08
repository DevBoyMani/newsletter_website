export default function FeatureHighlight({ content }) {
    return (
        <ul className="lg:text-xl md:py-4 space-y-4">
            {content.map((item, index) => (
                <li key={index} className="flex text-lg md:text-xl">
                    <div className="flex-shrink-0 w-4 h-[2px] mt-[14px] text-[#0C3D3D]">
                        <svg 
                            className="w-full h-full" 
                            fill="currentColor" 
                            viewBox="0 0 24 2" 
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="22" height="2" />
                        </svg>
                    </div>
                    <p className="ml-6 leading-tight">{item}</p>
                </li>
            ))}
        </ul>
    );
}
