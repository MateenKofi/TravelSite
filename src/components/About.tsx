const About: React.FC = () => {
  return (
    <section className="mb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 px-16">
          {/* Left side images grid */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative w-full h-[400px]">
              {/* Venice image */}
              <img
                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000&auto=format&fit=crop"
                alt="Venice Canal"
                className="absolute top-0 left-0 w-[300px] h-[320px] rounded-3xl object-cover z-10"
              />
              {/* Tropical beach image */}
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop"
                alt="Tropical Beach"
                className="absolute top-6 left-1/3 w-[200px] h-[200px] rounded-[32px] object-cover z-40"
              />
              {/* Hot air balloons image */}
              <img
                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1000&auto=format&fit=crop"
                alt="Hot Air Balloons"
                className="absolute top-1/2 left-[150px] w-[280px] h-[220px] rounded-[32px] object-cover z-30"
              />
            </div>
          </div>

          {/* Right side content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-orange-500 font-medium">About —</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              We Recommend<br />
              Beautiful Destinations<br />
              Every Month
            </h2>

            <p className="text-gray-600 mb-12">
              Let's chose your dream destinations here we provide many destinations and we offer the
              best destinations every week.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">2000+</h3>
                <p className="text-gray-600">Our Explorers</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">100+</h3>
                <p className="text-gray-600">Destinations</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">20+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 