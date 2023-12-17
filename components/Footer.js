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
  {
    href: "/events",
    label: "the events.",
  },
];

const policies = [
  { href: "/imprint", label: "Imprint" },
  { href: "toc", label: "Terms and Conditions" },
  { href: "/data-protection", label: "Data Protection" },
];
const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <img className="footer__logo" src="/assets/logo.svg" alt="" />
        <ul className="footer__links">
          {links.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <h5>{item.label}</h5>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__policies">
        <ul className="footer__policies-nav">
          {policies.map((item) => (
            <li key={item.href}>
              <p className="copy">{item.label}</p>
            </li>
          ))}
        </ul>
        <p className="copy">© Sam’s Surfcamp - all rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
