import React, { useContext, useState } from "react";

import {
  Link,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLoginButton from "../../Shared/SocialLoginButton/SocialLoginButton";
import useTitle from "../../hooks/useTitle";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Login = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const from = location.state?.from.pathname || "/";
  const navigate = useNavigate();
  useTitle("Login");
  const handleLogin = (event) => {
    setError("");
    setSuccess("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        form.reset();
        setSuccess("User Created Successfully ");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-screen max-w-7xl	mx-auto md:flex-row flex flex-col ">
      <div className="md:w-1/2 h-1/3 md:h-full">
        <img
          src="https://i.ibb.co/Rgm1NYk/6310507.jpg"
          alt=""
          className="w-full"
        />
      </div>
      <form
        onSubmit={handleLogin}
        className="hero-content flex-col lg:flex-col md:w-1/2"
      >
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label"></label>
              {error && <p className="text-red-600">{error}</p>}
              {success && <p className="text-green-600">{success}</p>}
            </div>
            <p onClick={() => setShow(!show)}>
              <button className="absolute left-[320px] top-[175px]">
                {show ? (
                  <span>
                    <FaEyeSlash></FaEyeSlash>
                  </span>
                ) : (
                  <span>
                    <FaEye></FaEye>
                  </span>
                )}
              </button>
            </p>
            <div className="form-control mt-6">
              <button className="btn bg-[#32BDF2] border-none hover:bg-[#FF6A98] ">Login</button>
            </div>
            <p className="text-sm">
              Don't Have An Account ?{" "}
              <Link className="text-red-400" to="/register">
                Register
              </Link>
            </p>
            <SocialLoginButton></SocialLoginButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
