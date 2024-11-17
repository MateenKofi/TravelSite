const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Travel</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#" className="hover:text-primary">About</a>
          <a href="#" className="hover:text-primary">Destinations</a>
          <a href="#" className="hover:text-primary">Tours</a>
          <a href="#" className="hover:text-primary">Blog</a>
        </div>
        <div className="flex space-x-4">
          <button className="btn">Sign In</button>
          <button className="btn-primary">Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;