import React, { useState } from "react";
import SignUpScreen from "../Components/SignUpScreen";

const Login = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="relative h-screen object-contain bg-[url('https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/banner.jpg')]">
      <img
        className="fixed cursor-pointer w-40 left-0 object-contain p-5"
        src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
        alt="logo"
      />
      <button
        onClick={() => setSignIn(true)}
        className="fixed bg-[#e50914] rounded-sm hover:opacity-90 m-4 right-0 text-white text-base px-5 py-[9px] border-none cursor-pointer font-semibold"
      >
        SignIn
      </button>
      <div className="w-full z-10 h-screen bg-[rgba(0,0,0,0.4)] bg-gradient-to-b from-[rgba(0,0,0,0.8)]" />
      <div className="absolute left-0 right-0 w-full text-center top-[30%] text-white ">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <div>
            <h1 className="text-3xl font-bold  p-5">
              Unlimited films, TV programmes and more.
            </h1>
            <h2 className="text-xl font-sans mb-5">
              Watch anywhere. Cancel at any time.
            </h2>
            <h3 className="font-thin">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="p-5 ">
              <form className="flex justify-center items-center">
                <input
                  className="px-5 min-w-[220px] py-auto text-gray-900 outline-none h-10 w-[30%] border-none max-w-[500px] "
                  placeholder="Email Address"
                />
                <button
                  onClick={() => setSignIn(true)}
                  className="px-5  h-10 text-base text-white bg-[#e50914] border-none font-semibold cursor-pointer"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
