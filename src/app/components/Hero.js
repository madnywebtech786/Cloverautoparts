// app/components/Hero.jsx
export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 2xl:px-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Premium Auto Parts <span className="text-primary">for Every Ride</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Discover the best quality auto parts at unbeatable prices. We stock everything you need to keep your vehicle running smoothly.
          </p>
          <div className="flex space-x-4">
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors">
              Shop Now
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-full hover:bg-red-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="md:w-1/2 relative">
          <div className="relative z-10 flex justify-center">
            <img 
              src="/images/heroSide.png" 
              alt="Car Parts" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-primary rounded-lg transform -translate-x-5 -translate-y-5 -z-10"></div>
        </div>
      </div>
    </section>
  )
}