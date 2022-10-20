import React from "react";

import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, signInReq } from "../Config/Firebase";

const Login = () => {
  const navigate = useNavigate();
  const [user, isLoading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorHandling, setErrorHandling] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    signInReq(email, password);
  };
  useEffect(() => {
    if (user) {
      navigate("/setting");
    }
  }, [user, navigate]);
  return (
    <div>
      <div
        className="relative py-16
          before:absolute before:inset-0 before:w-full before:h-[50%] before:bg-gray-200"
      >
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto space-y-8 md:w-8/12 lg:w-full">
            <img
              src="images/tailus.svg"
              loading="lazy"
              className="w-36 ml-4"
              alt="tailus logo"
            />
            <div className="rounded-xl border bg-opacity-50 backdrop-blur-2xl bg-white shadow-xl">
              <div className="lg:grid lg:grid-cols-2">
                <div className="rounded-lg lg:block" hidden>
                  <img
                    src="images/smiling.webp"
                    className="rounded-l-xl object-cover"
                    loading="lazy"
                    height
                    width
                    alt="music mood"
                  />
                </div>
                <div className="p-6 sm:p-16">
                  <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                    Sign in to your account
                  </h2>
                  <form action className="space-y-8" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-700">
                        Email
                      </label>
                      <input
                        onChange={(event) => {
                          setEmail(event.target.value);
                        }}
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
  focus:ring-2 focus:ring-sky-300 focus:outline-none
  invalid:ring-2 invalid:ring-red-400"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="pwd" className="text-gray-700">
                          Password
                        </label>
                      </div>
                      <input
                        type="password"
                        name="pwd"
                        id="pwd"
                        className="block w-full px-4 py-3 rounded-md border border-gray-300 text-gray-600 transition duration-300
                                      focus:ring-2 focus:ring-sky-300 focus:outline-none
                                      invalid:ring-2 invalid:ring-red-400"
                        onChange={(event) => {
                          setPassword(event.target.value);
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 rounded-md bg-sky-600
                                  focus:bg-sky-700 active:bg-sky-500"
                    >
                      <span className="text-white">Continue</span>
                    </button>
                    <p className="border-t pt-6 text-sm">
                      Don't have an account ?
                      <a href="#" className="text-sky-500">
                        Sign up
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
