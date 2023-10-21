import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <span>MyWebSite</span>
      <ul className={style["navbar-list"]}>
        <li>Accueil</li>
        <li>A propos</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
