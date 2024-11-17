interface BeachDestination {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

const BeachDestinations: React.FC = () => {
  const destinations: BeachDestination[] = [
    {
      id: 1,
      name: "Karangan Beach",
      location: "Labuan Bajo, Indonesia",
      price: 200,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Kepunuh Beach",
      location: "Bali, Indonesia",
      price: 250,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Kucubung Beach",
      location: "Labuan Bajo, Indonesia",
      price: 350,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1597501493792-6b31d7c2ceb9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Lumukutan Beach",
      location: "Natuna, Indonesia",
      price: 200,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1589979481223-deb893043163?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Cunuti Beach",
      location: "Pontianak, Indonesia",
      price: 250,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "Kapuas Beach",
      location: "Semarang, Indonesia",
      price: 350,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1000&auto=format&fit=crop"
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
      {destinations.map((destination) => (
        <div 
          key={destination.id} 
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          {/* Image Container */}
          <div className="relative h-64">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full">
              <span className="text-orange-500">⭐</span>
              <span className="ml-1">{destination.rating}</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
                <div className="flex items-center text-gray-500">
                  <span className="mr-1">📍</span>
                  <span className="text-sm">{destination.location}</span>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-orange-500 font-bold">${destination.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeachDestinations; 