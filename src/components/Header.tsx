import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="logo">
          JGM News
        </Link>

        <nav>
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}
