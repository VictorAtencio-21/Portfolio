interface FooterProps {
  links: { url: string; icon: JSX.Element }[];
}

import Link from "next/link";

const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-5">
      <div>
        <ul className="flex flex-wrap -mt-px text-sm">
          {links.map((link, index) => (
            <li key={index} className="mr-4">
              <Link href={link.url}>{link.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
