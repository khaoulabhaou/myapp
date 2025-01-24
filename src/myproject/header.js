import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 m-0">My Clothing Store</h1>
        <nav>
          <Link to="/" className="text-white text-decoration-none mx-2">Home</Link>
          <Link to="/women" className="text-white text-decoration-none mx-2">Women Clothing</Link>
          <Link to="/men" className="text-white text-decoration-none mx-2">Men Clothing</Link>
          <Link to="/kids" className="text-white text-decoration-none mx-2">Kids Clothing</Link>
          <Link to="/cart" className="text-white text-decoration-none mx-2">Cart</Link>
        </nav>
      </div>
    </header>
  );
}
