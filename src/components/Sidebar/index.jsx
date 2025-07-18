
import "./Sidebar.scss";
import ReceiptIcon from '@material-ui/icons/Receipt';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__button-close">X</div>
        <ul className="sidebar__list-item">
          <li className="sidebar__item"><HomeIcon /><Link to="/home">Home</Link></li>
          <li className="sidebar__item"><ReceiptIcon/><Link to="/country">Countries</Link></li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
