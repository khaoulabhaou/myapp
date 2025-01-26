import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 m-0">My Clothing Store</h1>
        <nav>
          <Link to="/" className="text-white text-decoration-none mx-2">Home</Link>
          <Link to="/food" className="text-white text-decoration-none mx-2">food</Link>
          <Link to="/fragrances" className="text-white text-decoration-none mx-2">fragrances</Link>
          <Link to="/furniture" className="text-white text-decoration-none mx-2">furniture</Link>
          <Link to="/beauty" className="text-white text-decoration-none mx-2">beauty</Link>
        </nav>
      </div>
    </header>
  );
}
