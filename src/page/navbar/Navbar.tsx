import { useRef } from "react";
import classes from "./Navbar.module.css";
import { BsList } from "react-icons/bs";
import { MdClear } from "react-icons/md";
const Navbar = () => {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    { name: "About", link: "/about" },
    { name: "Page", link: "/page" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Contact", link: "/contact" },
  ];

  const navRef = useRef<HTMLDivElement>(null);
  const showNavbar = () => {
    navRef.current?.classList.toggle(classes.responsive);
  };
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Container}>
        <h1>MohMohAung</h1>

        <div className={classes.menuContainer} ref={navRef}>
          {menuList.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
            </div>
          ))}
          <div>
            <MdClear
              size={30}
              onClick={showNavbar}
              className={`${classes.icon} ${classes.navClose}`}
            />
          </div>
        </div>
        <div>
          <BsList size={30} onClick={showNavbar} className={classes.icon} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
