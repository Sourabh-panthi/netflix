import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const history = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div
      className={`fixed top-0 p-4 w-full h-16 z-10 ease-in transition duration-500  ${
        show && "bg-black "
      }`}
    >
      <div className="flex justify-between items-center m-2 ">
        <img
          onClick={() => history("/")}
          className="h-9 pl-2 m-2 cursor-pointer object-contain fixed left-0 top-2"
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt="logo"
        />
        <img
          onClick={() => history("/profile")}
          className="h-9  object-contain fixed  cursor-pointer right-0 top-0 mt-4 mr-4"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
