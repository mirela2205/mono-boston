import Link from 'next/link';

export default function HeaderSecondary() {
  return (
    <>
      <div className="header-secondary-inner container pt-lg-4">
        <div className="header-connect d-none d-lg-block">
          <ul>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Monochrome on Youtube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Monochrome on Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Monochrome on Twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow Monochrome on Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>

            <li>
              <a href="tel:+44 (0)10 2345 6789" title="Call us">
                Call us +44 (0)10 2345 6789
              </a>
            </li>
          </ul>
        </div>

        <div className="header-controls">
          <form className="d-none d-lg-block">
            <button type="submit" title="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>

            <input type="text" placeholder="Search" name="search"></input>
          </form>

          <header className="d-lg-none">
            <h1>Monochrome</h1>
          </header>

          <ul>
            <li>
              <Link href="/" title="My account">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Wishlist">
                <i className="fa-solid fa-heart"></i>
              </Link>
            </li>

            <li>
              <Link href="/" title="Cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
