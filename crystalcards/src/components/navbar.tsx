import Link from 'next/link';
import {usePathname} from 'next/navigation';
import styles from '../styles/Navbar.module.css';
export default function Navbar(){

    const pathname = usePathname();
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/" className={`${pathname === '/' ? 'active' : ''}`}>Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/decks" className={`${pathname === '/decks' ? 'active' : ''}`}>Decks</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/cards" className={`${pathname === '/cards' ? 'active' : ''}`}>Cards</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/about" className={`${pathname === '/about' ? 'active' : ''}`}>About</Link>
                </li>
            </ul>
        </nav>
    );
}