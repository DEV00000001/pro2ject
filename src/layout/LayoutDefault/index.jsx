import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import "./LayoutDefault.scss"
function LayoutDefault() {
  return (
    <>
      <div className="layout layout--default">
        <Header />
        <Sidebar />
        <div className="layout__content">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default LayoutDefault;
