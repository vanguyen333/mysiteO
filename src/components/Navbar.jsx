import navbar from "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>vanguyendev</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <a href="/courses">Courses</a>
      </div>
    </nav>
  );
};

export default Navbar;
