export default function ImageGrid({ images }) {
    return (
        <div className="pl-0 md:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="w-full">
                        <img
                            src={image.src}
                            alt={image.name}
                            className="object-cover rounded-md w-full h-[400px] md:h-[440px]"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
