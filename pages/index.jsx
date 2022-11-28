import Footer from '../components/common/footer/Footer';
import Header from '../components/common/header/Header';
import HomeCatalogPreview from '../components/common/homepage/HomeCatalogPreview';
import HomeContent from '../components/common/homepage/HomeContent';

export default function Home() {
  return (
    <div>
      <header className="header mt-3 mt-lg-0">
        <Header></Header>
      </header>

      <main className="content">
        <header className="banner-main d-lg-none mb-3">
          <div className="banner-main-inner container">
            <button
              className="button button-inverted"
              title="New In"
              type="button"
            >
              New In
            </button>
          </div>
        </header>

        <div className="content-main">
          <HomeCatalogPreview></HomeCatalogPreview>

          <HomeCatalogPreview></HomeCatalogPreview>

          <HomeContent></HomeContent>

          <HomeCatalogPreview></HomeCatalogPreview>

          <HomeCatalogPreview></HomeCatalogPreview>
        </div>
      </main>

      <footer className="footer mt-5">
        <Footer></Footer>
      </footer>
    </div>
  );
}
