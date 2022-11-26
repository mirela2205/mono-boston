import Link from 'next/link';

export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <Link href="/" title="Monochrome watch">
            <picture>
              <img src="/images/products/product-01.png" alt="Watch"></img>
            </picture>
          </Link>

          <Link href="/" title="Add to Wishlist">
            <span className="badge">
              <i class="fa-regular fa-heart"></i>
            </span>
          </Link>
        </div>

        <h1 className="product-tile-title">
          <Link href="/" title="Monochrome">
            <span>Monochrome</span>
          </Link>
        </h1>
      </header>

      <section className="product-tile-pricing">
        <span className="product-price">$425</span>
      </section>
    </article>
  );
}
