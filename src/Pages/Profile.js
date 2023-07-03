import React from "react";
import "./profile.css";
import AddProduct from "../Components/AddProduct/AddProduct";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function Profile() {
  const { user } = useSelector((state) => state.UserSlice);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous data fetch
    setTimeout(() => {
      setIsLoading(false);
    }, 20);
  }, []);

  // Render a loading state while waiting for the data
  if (isLoading) {
    return "";
  }

  return (
    <>
      <div className="Profile">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 ">
              <div className="card mb-4 ">
                <div className="card-body text-center shadow  bg-white rounded w-100">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 100 }}
                  />
                  <h5 className="my-3">{user.name}</h5>
                  <p className="text-muted mb-4">{}</p>
                  <div className="d-flex flex-column gap-2">
                    {user?.role === "seller" ? (
                      ""
                    ) : (
                      <>
                        <NavLink
                          to="/profile/babies"
                          className=" btn btn-outline-primary  btn-block  "
                        >
                        اطفالي
                        </NavLink>
                        <NavLink
                          to="/profile/myorders"
                          className=" btn btn-outline-primary  btn-block  "
                        >
                       طلباتي
                        </NavLink>
                        <NavLink
                          to="/profile/todo"
                          className=" btn btn-outline-primary  btn-block  "
                        >
                          قائمة المهام{" "}
                        </NavLink>
                      </>
                    )}
                    <NavLink
                      to="/profile/info"
                      className=" btn btn-outline-primary  btn-block  "
                    >
                      معلوماتي{" "}
                    </NavLink>
                    <NavLink
                      to="/profile/edit"
                      className=" btn btn-outline-warning  btn-block text-black"
                    >
                      تعديل البيانات{" "}
                    </NavLink>
                    {user.role === "seller" ? (
                      <>
                        <NavLink
                          to="/profile/products"
                          className=" btn btn-outline-warning  btn-block text-black"
                        >
                          منتجاتي{" "}
                        </NavLink>
                        <AddProduct />
                      </>
                    ) : (
                      ""
                    )}
                  </div>

                  {/* <div className="d-flex justify-content-center mb-2"></div> */}
                </div>
              </div>
            </div>

            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
