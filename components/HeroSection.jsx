import Link from "next/link";

const HeroSection = ({ imgSrc, headline, theme = "turquoise" }) => {
  return (
    <section className="hero">
      <div className="hero__background">
        <img src={imgSrc || "/assets/hero-background.png"} alt="" />
      </div>
      <div className={`hero__headline hero__headline--${theme}`}>
        {headline || <h1>Headline Missing</h1>}
      </div>
      <button className={`btn btn--medium btn--${theme}`}>
        <Link href="/events">BOOK NOW</Link>
      </button>
      <img src="/assets/logo.svg" className="hero__logo" />
    </section>
  );
};

export default HeroSection;
