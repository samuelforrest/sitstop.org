/* eslint-disable @next/next/no-img-element */

export const ImageAutoSlider = () => {
  const images = [
    {
      image_url: "carousel/carousel1.webp",
      location: "Squires Garden Centre",
      location_url: "",
    },
    {
      image_url: "carousel/carousel2.webp",
      location: "Kanset Pharmacy",
      location_url: "",
    },
    {
      image_url: "carousel/carousel3.webp",
      location: "Teddington Stables",
      location_url: "",
    },

    {
      image_url: "carousel/carousel7.webp",
      location: "Barnes Summer Fair",
      location_url: "",
    },
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 35s linear infinite;
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          filter: brightness(1.2);
        }
      `}</style>

      {/* Scrolling images container */}
      <div className="relative z-10 w-full flex items-center justify-center py-8">
        <div className="scroll-container w-full">
          <div className="infinite-scroll flex gap-6 w-max">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="image-item shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl relative"
              >
                <img
                  src={image.image_url}
                  alt={`Hero gallery photo ${(index % images.length) + 1} - ${
                    image.location
                  }`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-4 bg-linear-to-t from-black/60 to-transparent">
                  <div className="flex items-center justify-center gap-1">
                    <p className="text-sm md:text-lg text-white font-semibold">
                      {image.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
    </>
  );
};
