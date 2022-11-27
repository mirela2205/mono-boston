import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className="footer-inner container py-lg-4">
        <section class="footer-contact d-none d-lg-block">
          <ul>
            <li>
              <a href="tel:+44 (0)10 2345 6789" title="call us">
                call us <br></br>
                +44 (0)10 2345 6789
              </a>
            </li>

            <li>
              <a href="mailto:customerservice@monochrome.com" title="email us">
                email customer care
              </a>
            </li>
          </ul>
        </section>

        <nav className="footer-nav">
          <header className="d-lg-none mt-3 text-center">
            <h1>How can we help?</h1>
          </header>

          <div>
            <ul>
              <li>
                <Link href="/" title="style & fit advice">
                  style & fit
                </Link>
              </li>

              <li>
                <Link href="/" title="faqs">
                  faqs
                </Link>
              </li>

              <li>
                <Link href="/" title="delivery">
                  delivery
                </Link>
              </li>

              <li>
                <Link href="/" title="exchanges & returns">
                  returns
                </Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/" title="about us">
                  about us
                </Link>
              </li>

              <li>
                <Link href="/" title="careers">
                  careers
                </Link>
              </li>

              <li>
                <Link href="/" title="affiliates">
                  affiliates
                </Link>
              </li>

              <li>
                <Link href="/" title="advertising">
                  advertising
                </Link>
              </li>
            </ul>
          </div>

          <footer className="d-lg-none">
            <ul>
              <li>
                <Link href="/" title="terms & conditions">
                  terms & conditions
                </Link>
              </li>
              <li>
                <Link href="/" title="privacy & cookies">
                  privacy & cookies
                </Link>
              </li>
            </ul>
          </footer>
        </nav>

        <div className="footer-connect">
          <form class="footer-newsletter">
            <h1>sign up for our newsletter</h1>
            <h2 className="d-lg-none">Let's connect</h2>

            <label for="email" className="d-lg-none">
              <span>Be the first to receive exclusive offers</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            ></input>

            <div className="reverse">
              <div className="privacy">
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  required
                ></input>
                <label for="newsletter">
                  <span>
                    I agree with{' '}
                    <span>
                      <Link href="/" title="privacy">
                        Privacy Policy
                      </Link>
                    </span>{' '}
                    and I want to receive emails from Monochrome
                  </span>
                </label>
              </div>

              <button
                type="submit"
                name="submit"
                title="Submit"
                className="button button-secondary"
              >
                Submit
              </button>
            </div>
          </form>

          <section class="footer-social">
            <header className="d-lg-none">
              <h1>We are highly likeable</h1>
            </header>

            <ul>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow Monochrome on Youtube"
                >
                  <i class="fa-brands fa-youtube"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow Monochrome on Facebook"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow Monochrome on Twitter"
                >
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow Monochrome on Instagram"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
