import React from "react";
import NavItem from "../toolbox/NavItem";

const navItemList = [
  {
    linkName: "HomePage",
    id: 1,
    link : '/'
  },
  {
    linkName: "About",
    id: 2,
    link : '/About'
  },
  {
    linkName: "Contact",
    id: 3,
    link : '/Contact'
  },
];

const Navbar = () => {
  return (
    <nav>
     <a href={'sass'}>
        Ülke Seç
     </a>
      {navItemList.map((nav) => {
        return <NavItem  navItem={nav} key={nav.id}/>;
      })}
    </nav>
  );
};
export default Navbar;
