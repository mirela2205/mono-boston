export default function Home() {
  return (
    <div>
      hello monochrome
      <i className="fa-regular fa-face-smile"></i>
      <img src="/images/banners/banner.png" alt="banner"></img>
      <button className="button button-primary">
        <a href="/">View all</a>
      </button>
      <button className="button button-inverted">
        <a href="/">New In</a>
      </button>
      <button className="button button-secondary">
        <a href="/">Submit</a>
      </button>
    </div>
  );
}
