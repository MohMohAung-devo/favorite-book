import { useRef, useState } from "react";
import classes from "./Navbar.module.css";
import { BsList } from "react-icons/bs";
import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [activeColor, setActiveColor] = useState(0);
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

  const handleActive = (index: number) => {
    setActiveColor(index);
  };

  const navRef = useRef<HTMLDivElement>(null);
  const showNavbar = () => {
    navRef.current?.classList.toggle(classes.responsive);
  };
  return (
    <div className={classes.MainContainer}>
      <div className={classes.Container}>
        <p className="text-2xl">MohMohAung</p>

        <div className={classes.menuContainer} ref={navRef}>
          {menuList.map((item, index) => (
            <div key={index}>
              <Link to={item.link} key={index}>
                <p
                  key={index}
                  className={`
              
                  ${activeColor === index ? classes.colorActive : ""}`}
                  onClick={() => handleActive(index)}
                >
                  {item.name}
                </p>
              </Link>
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
