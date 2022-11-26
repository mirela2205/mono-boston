import ProductTile from '../../catalog/ProductTile';

export default function HomeCatalogPreview() {
  return (
    <>
      <section className="home-catalog-preview container my-lg-5">
        <header>
          <h1>New Stuff</h1>
        </header>

        <ul className="product-tiles">
          <li>
            <ProductTile></ProductTile>
          </li>
          <li>
            <ProductTile></ProductTile>
          </li>
          <li className="d-none d-lg-block">
            <ProductTile></ProductTile>
          </li>
          <li className="d-none d-lg-block">
            <ProductTile></ProductTile>
          </li>
        </ul>

        <footer class="catalog-ctas">
          <button href="/" title="view all">
            view all
          </button>
        </footer>
      </section>
    </>
  );
}
