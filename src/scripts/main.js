import "../styles/index.css";
import Router from "./router";
import routes from "./routes";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

document.body.innerHTML = `
  ${Navbar()}
  <main id="app"></main>
  ${Footer()}
`;

Router(routes);
