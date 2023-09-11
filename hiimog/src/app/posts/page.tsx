import Link from "next/link"

export default function () { 
    const posts = [
        {title: "making a blog", slug: "making-a-blog"}
    ].map(p => <li><Link href={`/posts/${p.slug}`}>{p.title}</Link></li>)
    return (
        <>
        <h1>blog posts</h1>
        <nav>
            <ul>
                {posts}
            </ul>
        </nav>
        </>
    )
}