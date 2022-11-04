export default function Home() {
  return (
    <div>
      hello monochrome
      <i className="fa-regular fa-face-smile"></i>
      <img src="/images/banners/banner.png" alt="banner"></img>
      <button className="button button-primary button-large">
        <a href="/">View all</a>
      </button>
      <button className="button button-primary button-inverted">
        <a href="/">Submit</a>
      </button>
      <button className="button button-secondary">
        <a href="/">New in</a>
      </button>
    </div>
  );
}
