const Features: React.FC = () => {
  const features = [
    {
      icon: "🗺️",
      title: "Lots of Choices",
      description: "We have provided several choices of destinations and very cheap traveling packages"
    },
    {
      icon: "👥",
      title: "Best Tour Guide",
      description: "We provide professional tour guide and provide and people who understand the place"
    },
    {
      icon: "📱",
      title: "Easy Booking",
      description: "We will also make it easier for users to book tickets or book the place you want"
    }
  ];

  return (
    <section className="py-20">
      <div className="container flex mx-auto px-4">
        {/* Header */}
        <div className="max-w-lg mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-500 font-medium">What We Give —</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Best Features<br />
            For You
          </h2>
          <p className="text-gray-600">
            We will provide the best features for those of you who want to travel comfortably with your family.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-2xl">
                <span className="group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 