import Link from "next/link";

const links = [
  {
    href: "/camp",
    label: "the camp.",
  },
  {
    href: "/experience",
    label: "the experience.",
  },
  {
    href: "/blog",
    label: "the blog.",
  },
];
const Header = () => {
  return (
    <header className="header">
      <img className="head__logo" src="/assets/logo.svg" alt="" />
      <ul className="header__nav">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>
              <h5>{item.label}</h5>
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/events">
        <button className="btn btn--black btn--small">BOOK NOW</button>
      </Link>
    </header>
  );
};

export default Header;
