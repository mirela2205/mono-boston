import Link from 'next/link';

export default function HeaderPrimary() {
  return (
    <>
      <section class="header-primary container">
        <ul className="menu d-lg-none">
          <li>
            <Link href="/" title="Menu">
              <i class="fa-solid fa-bars"></i>
            </Link>
          </li>

          <li>
            <form>
              <input type="text" placeholder="Search" name="search"></input>
              <button type="submit" title="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </li>
        </ul>

        <nav className="d-none d-lg-block">
          <ul>
            <li>
              <Link href="/" title="New arrivals">
                New arrivals
              </Link>
            </li>

            <li>
              <Link href="/" title="Brands">
                Brands
              </Link>
            </li>

            <li>
              <Link href="/" title="Men's">
                Men's
              </Link>
            </li>

            <li>
              <Link href="/" title="Women's">
                Women's
              </Link>
            </li>

            <li>
              <Link href="/" title="Accesories">
                Accesories
              </Link>
            </li>

            <li>
              <Link href="/" title="Lookbook">
                Lookbook
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
