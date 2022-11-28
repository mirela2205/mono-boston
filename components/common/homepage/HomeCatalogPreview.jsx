import ProductTile from '../../catalog/ProductTile';

export default function HomeCatalogPreview() {
  return (
    <>
      <section className="home-catalog-preview container my-5">
        <header className="text-center">
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
          <button href="/" title="view all" className="button button-primary">
            view all
          </button>
        </footer>
      </section>
    </>
  );
}
