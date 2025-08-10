const pages = import.meta.glob("../pages/*.js", { eager: true });

const routes = {};
let notFoundPage = null;

for (const path in pages) {
  const name = "/" + path.split("/").pop().replace(".js", "");

  if (name === "/not_found") {
    notFoundPage = pages[path].default;
    continue;
  }

  routes[name === "/home" ? "/" : name] = pages[path].default;
}

routes[404] = notFoundPage || (() => `<h1>404 - Not Found</h1>`);

export default routes;
