import Image from 'next/image';

export default function MakingABlogWithNextJs() {
    return (<>
    <h1>Making A Blog With NextJS</h1>
    <p id="tldr">
        In this post we will create a simple statically generated blog using 
        <a href="https://nextjs.org">NextJS</a> and hosting the site on <a href="https://pages.github.com/">GitHub Pages</a>.
        We will be building this from the ground up and not relying on any out of the box solution like <a href="https://jekyllrb.com/docs/github-pages/">Jekyll</a>
    </p>
        {/* TODO: Make this <nav> and make these links and call it TOC */}
        <h2>Outline</h2>
        <ul>
            <li>Create GitHub Account</li>
            <li>Create New Repository</li>
            <li>Install Software</li>
            <li>Create Project Structure</li>
            <li>Add Content</li>
            <li>Add Styles</li>
        </ul>

        <section id="create-github-account">
            TODO
        </section>

        <section id="create-new-repo">
            <Image src="/images/posts/making-a-blog-with-nextjs/images/new_button.png" alt="New repo button location" width={100} height={100}/>
        </section>
    </>)
}