document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <nav role="navigation" class="site-nav">
      <ul>
        <li><h3>Sujit Balasubramanian<h3></li>
        <li><a href="/">Home</a></li>
        <li><a href="/en/blogs/index.html">Blogs</a></li>
        <li><a href="/en/series/index.html">Series</a></li>
        <li><a href="/en/about.html">About</a></li>
      </ul>
    </nav>
  `;

  const footer = `
    <footer class="site-footer">
      Me @
      <a target="_blank" href="https://github.com/sujitbalasubramanian">Github</a> |
      <a target="_blank" href="https://x.com/SujitRBala">X</a> |
      <a target="_blank" href="https://www.youtube.com/@sujitbalasubramanian">Youtube</a> |
      <a target="_blank" href="https://stackoverflow.com/users/23373902/sujit-balasubramanian">StackOverflow</a>
    </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
});
