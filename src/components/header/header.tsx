import Image from "next/image";
import Link from "next/link";
import { hearderLinks } from "@/lib";
import { Button } from "@/components";
import './header.css'

export const Header = () => {
  return (
    <header>
      <Image
        className="aspect-[5] object-contain"
        src={"/logo.svg"}
        alt="doctor logo app"
        width={180}
        height={40}
      />
      <ul>
        {
          hearderLinks.map(({ id, name, href }) => (
            <li key={id}>
              <Link href={href}>{name}</Link>
            </li>
          ))
        }
      </ul>

      <Button className="ml-auto">Get started</Button>
    </header>
  );
};