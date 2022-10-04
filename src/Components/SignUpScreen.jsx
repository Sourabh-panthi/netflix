import React, { useRef } from "react";
import { auth } from "../firebase";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((err) => {
        alert(err);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="max-w-[360px] rounded-lg text-left   mx-auto bg-[rgba(0,0,0,0.85)]">
      <form className="grid flex-col p-14">
        <h1 className="text-2xl font-semibold mb-5">Sign In</h1>
        <input
          ref={emailRef}
          className="px-5 mb-3 h-10  text-gray-900 outline-none rounded-sm bottom-none "
          type="email"
          placeholder="Email"
        />
        <input
          ref={passwordRef}
          className="px-5 mb-3 h-10   text-gray-900 outline-none rounded-sm bottom-none "
          type="password"
          placeholder="Password"
        />
        <button
          className="px-4 py-2 font-semibold border-none mt-4 rounded-sm hover:opacity-90 bg-[#e50914] text-white "
          type="submit"
          onClick={signIn}
        >
          Sign In
        </button>
        <div className="flex mt-4 space-x-2">
          <p className="text-gray-500 font-semibold text-sm">
            New to Netflix?{" "}
          </p>
          <span
            className="text-sm hover:underline cursor-pointer"
            onClick={register}
          >
            {" "}
            SignUp Now
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUpScreen;
