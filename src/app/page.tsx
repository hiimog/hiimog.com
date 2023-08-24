import styles from './home.module.scss';
import Link from 'next/link'
export default function Home() {
  return (
      <nav className={styles.nav}>
        <ul>
          <li>hi, i'm og</li>
          <li><Link href="/about">about</Link></li>
          <li><Link href="/blog">blog</Link></li>
          <li><Link href="/contact">contact</Link></li>
        </ul>
      </nav>
    )
}
