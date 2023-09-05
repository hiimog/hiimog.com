import Link from 'next/link'

export default function Posts() {
    return (
        <>
        <h1>Posts</h1>
        <nav>
            <ul>
                <li><Link href={"/posts/logging-fundamentals"}>Logging Fundamentals</Link></li>
            </ul>
        </nav>
        </>
    )
}