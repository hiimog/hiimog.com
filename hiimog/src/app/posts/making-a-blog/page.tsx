export default function () {
  /*
brainstorm:
- "bucket" hosting / gh pages
- questions on gh
- hiimog.com should land here
- copy code snippets
- search / browse
- linkable headings

*/
  return (
    <>
      <h1>Making A Blog</h1>
      <p>
        In this post we look at some of the decisions I made when I decided to
        create a blog and how I went about implementing it.
      </p>
      <>
        <h2>Requirements Analysis</h2>
        <p>
          This is almost always the first thing I do when I start a project:
          Determine what <em>must</em> be in the minimal viable product (MVP),
          what <em>should</em> be in the MVP, and what <em>could</em> be in the
          MVP. At a high level I knew I wanted something easy, maintainable, and
          cheap. Here are some of the requirements that came out of
          brainstorming:
        </p>
        <h3>Must Haves</h3>
        <ul>
          <li>desktop and mobile friendly</li>
          <li>search engine friendly </li>
          <li>
            basic widgets
            <ul>
              <li>images</li>
              <li>code blocks</li>
              <li>table of content</li>
              <li>links</li>
            </ul>
          </li>
          <li>
            basic search/filter
            <ul>
              <li>by content</li>
              <li>by tag</li>
              <li>by date</li>
            </ul>
          </li>
        </ul>
        <h3>Should Haves</h3>
        <ul>
          <li>accessibility</li>
          <li>hover popup for cross posts or tags</li>
          <li>convenient printing</li>
          <li>download as pdf</li>
        </ul>
        <h3>Could Haves</h3>
        <ul>
          <li>rss</li>
          <li>light/dark theme toggle</li>
          <li>ultra wide friendly</li>
        </ul>
      </>
    </>
  );
}
