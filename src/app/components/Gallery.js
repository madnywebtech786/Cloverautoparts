export default function Gallery() {
  const images = [
    {
      src: "/images/engine.png",
      alt: "Engine Parts",
    },
    {
      src: "/images/transmission.png",
      alt: "Transmission",
    },
    {
      src: "/images/drive-shaft.png",
      alt: "Drive Shaft",
    },
    {
      src: "/images/bumper.png",
      alt: "Bumpers",
    },
    {
      src: "/images/fender.png",
      alt: "Fenders",
    },
    {
      src: "/images/doors.png",
      alt: "Doors",
    },
  ];

  return (
    <section id="gallery" className="p-4 md:p-8 lg:p-12 2xl:p-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Gallery
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600">
            Explore our wide range of automotive parts and accessories for all
            vehicle types.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary duration-300">
                  {image.alt}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
