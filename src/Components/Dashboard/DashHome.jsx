import { Link, Outlet } from "react-router-dom";
import Header from "../Home/Header";


const DashHome = () => {
    return (
      <div>
        <Header></Header>
        <div>
          <div className="drawer  lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mt-5  lg:w-full">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-primary drawer-button w-1/2 lg:hidden"
              >
                Open drawer
              </label>
              <div className="m-5">
                <Outlet></Outlet>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <Link to={"/dashboard/add-product"}>Add Product</Link>
                </li>
                <li>
                  <Link to={"/dashboard/manage-product"}>Manage Product</Link>
                </li>
                <li>
                  <Link>Add category</Link>
                </li>
                <li>
                  <Link>Manage Category</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DashHome;