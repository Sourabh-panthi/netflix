import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { selectUser } from "../features/user/userSlice";
import { auth } from "../firebase";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="h-screen  text-white">
      <Navbar />
      <div className="pt-32  max-w-3xl flex flex-col w-1/2 mx-auto ">
        <h1 className=" text-4xl font-semibold  border-b-[1px]  border-gray-600 pb-2">
          Edit Profile
        </h1>
        <div className="flex  mt-5">
          <img
            className=" w-20  object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="avatar"
          />
          <div className=" ml-6 flex-1">
            <h2 className="bg-gray-500 p-3 h-12">{user.email}</h2>
            <div className="">
              <h3 className="mt-5">Plan</h3>
              <button
                className="w-full p-2 font-semibold border-none mt-4 rounded-sm hover:opacity-90 bg-[#e50914] text-white "
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
