import PhotoAlbum from "react-photo-album";

const Testimonials: React.FC = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?q=80&w=500",
      width: 600,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=500",
      width: 400,
      height: 300,
    },
    {
      src: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=500",
      width: 600,
      height: 400,
    },
    {
      src: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=500",
      width: 400,
      height: 300,
    },
    {
      src: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=500",
      width: 400,
      height: 300,
    },
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=500",
      width: 600,
      height: 400,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Testimonial */}
          <div className="w-full lg:w-1/2">
            <div className="max-w-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-orange-500 font-medium">What They Say —</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-12">
                What Our Customer<br />
                Say About Us
              </h2>

              <div className="bg-gray-50 rounded-3xl p-8 relative">
                {/* Quote mark */}
                <div className="absolute -right-4 -top-4 text-orange-500 text-8xl opacity-20">
                  "
                </div>
                
                {/* Testimonial content */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Park Taeyeng"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">Park Taeyeng</h4>
                    <p className="text-gray-600 text-sm">Travel Enthusiast</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">
                  "This platform is very helpful because there are many beautiful destinations here and this platform really helps me in finding beautiful destinations and also very good service so I really like to use Travel when I want to go travelling with my family."
                </p>

                {/* Rating */}
                <div className="flex gap-1">
                  {"★★★★★".split("").map((star, index) => (
                    <span key={index} className="text-yellow-400">
                      {star}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-4 gap-2 p-4">
              {/* Row 1 */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a"
                  alt="Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86"
                  alt="Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1573790387438-4da905039392"
                  alt="Landscape"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Row 2 */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5"
                  alt="Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
                  alt="Landscape"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Row 3 */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1516690561799-46d8f74f9abf"
                  alt="Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white col-span-2">
                <img
                  src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee"
                  alt="Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
                  alt="Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 