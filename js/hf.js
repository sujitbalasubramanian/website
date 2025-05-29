document.addEventListener("DOMContentLoaded", function () {
  const header = `
    <nav role="navigation" class="site-nav">
      <ul>
        <li>Sujit Balasubramanian</li>
        <li><a href="/">Home</a></li>
        <li><a href="/about.html">About</a></li>
      </ul>
    </nav>
  `;

  const footer = `
    <footer class="site-footer">
      <p>© 2023 Sujit Balasubramanian</p>
    </footer>
  `;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
});
