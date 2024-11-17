const DiscountBanner: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-red-100 rounded-[48px] py-16 px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Don't Miss The 50% Discount &
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Explore the Beauty of the World
          </h3>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We have many special offers especially for you
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountBanner; 