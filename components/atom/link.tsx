import Link from "next/link";

const NavLink: React.FC<Props> = ({ href, text }) => {
  return <Link href={href} className="hover:underline underline-offset-4">{text}</Link>;
};

interface Props {
  href: string;
  text: string;
}

export default NavLink;
