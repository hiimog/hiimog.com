import styles from './home.module.scss';
import Link from 'next/link'
export default function Home() {
  return (
      <nav className={styles.navMain}>
        <h1 className={styles.titleLine}>hi, i&apos;m og</h1>
        <h2 className={styles.aboutLink}><Link href="/about">about</Link></h2>
        <h2 className={styles.postsLink}><Link href="/posts">posts</Link></h2>
        <h2 className={styles.contactLink}><Link href="/contact">contact</Link></h2>
      </nav>
    )
}
