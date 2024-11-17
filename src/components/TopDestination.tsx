const TopDestination: React.FC = () => {
  return (
    <div className="bg-white">
    <section className="py-20 bg-gray-100 mb-20 rounded-3xl w-5/6 mx-auto relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-orange-500 font-medium">Top Destination —</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Let's Explore Your Dream<br />
            Destination Here!
          </h2>
          <p className="text-gray-600">
            We have recommended popular destinations every week so you don't have to worry about your dream destination with travel
          </p>
        </div>
        

        {/* Search Form */}
        <div className="max-w-4xl mx-auto absolute -bottom-16 -translate-y-1/2 left-0 right-0">
          <div className="bg-white rounded-3xl shadow-lg px-2 py-4 flex items-center gap-4">
            {/* Location */}
            <div className="flex items-center gap-3 flex-1 pl-4">
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                <span className="text-orange-500">📍</span>
              </div>
              <div>
                <label className="block text-sm text-gray-500">Location</label>
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Person */}
            <div className="flex items-center gap-3 flex-1 border-l border-gray-200 pl-4">
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                <span className="text-orange-500">👤</span>
              </div>
              <div>
                <label className="block text-sm text-gray-500">Person</label>
                <input
                  type="text"
                  placeholder="How many person?"
                  className="w-full focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Check In */}
            <div className="flex items-center gap-3 flex-1 border-l border-gray-200 pl-4">
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                <span className="text-orange-500">📅</span>
              </div>
              <div>
                <label className="block text-sm text-gray-500">Check In</label>
                <input
                  type="text"
                  placeholder="03 August 2023"
                  className="w-full focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="flex items-center gap-3 flex-1 border-l border-gray-200 pl-4">
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center">
                <span className="text-orange-500">📅</span>
              </div>
              <div>
                <label className="block text-sm text-gray-500">Check Out</label>
                <input
                  type="text"
                  placeholder="14 August 2023"
                  className="w-full focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="bg-orange-500 text-white px-6 py-3 rounded-xl hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default TopDestination; 