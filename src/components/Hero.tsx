import React from 'react';
import Masonry from 'react-masonry-css';

const Hero: React.FC = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1000&auto=format&fit=crop",
      alt: "Hot air balloon",
      overlay: {
        type: "destinations",
        text: "100+ Destinations",
        subtext: "More than 100 travelers use this platform"
      }
    },
    {
      src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop",
      alt: "Beach walkway",
      overlay: {
        type: "verified",
        text: "100% Verified"
      }
    },
    {
      src: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1000&auto=format&fit=crop",
      alt: "Tropical resort"
    },
    {
      src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1000&auto=format&fit=crop",
      alt: "Mountain view"
    }
  ];

  return (
    <section className="relative min-h-[600px] bg-white px-8 py-8">
      <div className="container mx-auto">
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500">✈️</span>
            <span className="text-orange-500">Explore the World —</span>
          </div>

          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Discover The<br />
            Best Destinations<br />
            In The World
          </h1>

          <p className="text-gray-600 mb-8">
            Let's find you dream destinations here we will recommend you a beautiful place and a cheap trip with your beloved family
          </p>

          {/* Search Form */}
          <div className="bg-gray-50 p-4 rounded-2xl flex items-center gap-6 max-w-xl">
            <div className="flex items-center gap-2 flex-1">
              <span className="text-orange-500">📍</span>
              <div>
                <label className="block text-sm text-gray-600">Location</label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="bg-transparent w-full focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 flex-1">
              <span className="text-orange-500">📅</span>
              <div>
                <label className="block text-sm text-gray-600">Select Date</label>
                <input
                  type="text"
                  placeholder="22 August 2022"
                  className="bg-transparent w-full focus:outline-none"
                />
              </div>
            </div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Images with Masonry */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="p-4">
            <Masonry
              breakpointCols={2}
              className="flex gap-4 w-auto"
              columnClassName="masonry-column"
            >
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="mb-4 relative rounded-[32px] overflow-hidden"
                  style={{ height: index === 2 ? '200px' : '200px' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {image.overlay?.type === 'destinations' && (
                    <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                      <p className="font-semibold">{image.overlay.text}</p>
                      <p className="text-sm text-gray-600">{image.overlay.subtext}</p>
                    </div>
                  )}
                  {image.overlay?.type === 'verified' && (
                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm">
                      {image.overlay.text}
                    </div>
                  )}
                </div>
              ))}
            </Masonry>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;