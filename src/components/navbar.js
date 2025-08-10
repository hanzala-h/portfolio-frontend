const Navbar = () => {
  return `
    <nav>
      <ul>
        <li>
          <a href="/" data-link>
            Home
          </a>
        </li>
        <li>
          <a href="/about" data-link>
            About
          </a>
        </li>
        <li>
          <a href="/contact" data-link>
            Contact
          </a>
        </li>
      </ul>
    </nav> 
  `;
};

export default Navbar;
