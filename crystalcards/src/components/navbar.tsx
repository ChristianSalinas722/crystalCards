import Link from 'next/link';
import {usePathname} from 'next/navigation';
export default function Navbar(){

    const pathname = usePathname();
    return (
        <nav className="navbar">
            <ul className="navList">
                <li className="navItem">
                    <Link href="/" className={`navLink ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>
                <li className="navItem">
                    <Link href="/decks" className={`navLink ${pathname === '/decks' ? 'active' : ''}`}>Decks</Link>
                </li>
                <li className="navItem">
                    <Link href="/cards" className={`navLink ${pathname === '/cards' ? 'active' : ''}`}>Cards</Link>
                </li>
                <li className="navItem">
                    <Link href="/about" className={`navLink ${pathname === '/about' ? 'active' : ''}`}>About</Link>
                </li>
            </ul>
        </nav>
    );
}