import Link from 'next/link'


export default function Posts() {
    return (<>
    <h1>posts</h1>
    <ul>
        <li><Link href="/posts/making-a-blog-with-nextjs">Making A Blog With NextJS</Link></li>
    </ul>
    </>)
}