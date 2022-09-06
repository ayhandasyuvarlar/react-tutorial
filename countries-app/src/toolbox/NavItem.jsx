import { Link } from "react-router-dom";

const NavItem = ({ navItem }) => {
  return (
    <div className="navContent">
      <div id={navItem.id} className={"navItem"}>
        <Link to={navItem.link}>{navItem.linkName}</Link>
      </div>
    </div>
  );
};

export default NavItem;
