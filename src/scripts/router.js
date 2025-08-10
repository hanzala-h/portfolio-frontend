const Router = (routes) => {
  function navigateTo(url) {
    history.pushState(null, null, url);
    render();
  }

  function render() {
    const pathParts = location.pathname.split("/").filter(Boolean);
    const basePath = `/${pathParts[0] || ""}`;
    const param = pathParts[1];

    const view = routes[basePath] || routes[404];
    document.getElementById("app").innerHTML = view({ param });
  }

  window.addEventListener("popstate", render);

  document.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-link]");
    if (link && link.href.startsWith(window.location.origin)) {
      e.preventDefault();
      navigateTo(link.getAttribute("href"));
    }
  });

  render();

  return { navigateTo };
};

export default Router;
