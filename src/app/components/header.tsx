import Link from "next/link";

export default function Header(){
    return(
        <div className="header">
            <ul className="header-button">
                <Link href = {"/"}><li>Home</li></Link>
                <Link href = {"components/about"}><li>About</li></Link>
                <Link href = {"/components/portfolio"}><li>Portfolio</li></Link>
                <Link href = {"/components/contact-us"}><li>Contact</li></Link>
            </ul>
      </div>
    );
}