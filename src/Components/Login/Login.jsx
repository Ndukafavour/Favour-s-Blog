import React from "react";
import "./Login.css";
import { MdOutlineContactMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";
import profile from "../../assets/sia.png"


const users = [
  {
    Name: "MercyItohan",
    email: "mercy12@gmail.com",
    password: "mercy12",
    picture: `${profile}`
  },
  {
    Name: "EllaObodo",
    email: "ellaobodo@gmail.com",
    password: "ella13",
    picture: `${profile}`
  },
  {
    Name: "NdukaFavour",
    email: "ndukafavour@gmail.com",
    password: "nduka14",
    picture: `${profile}`
  },
  {
    Name: "HenryTrust",
    email: "henrytrust@gmail.com",
    password: "henry15",
    picture: `${profile}`
  },
  {
    Name: "OgeneMaro",
    email: "ogenemaro@gmail.com",
    password: "ogene16",
    picture: `${profile}`
  },
  {
    Name: "EzeFrancis",
    email: "ezefrancis@gmail.com",
    password: "eze17",
    picture: `${profile}`
  },
  {
    Name: "JerryEkele",
    email: "jerryekele@gmail.com",
    password: "jerry18",
    picture: `${profile}`
  },
  {
    Name: "EkeneJohn",
    email: "ekenejohn@gmail.com",
    password: "ekene19",
    picture: `${profile}`
  },
  {
    Name: "GodwinVictor",
    email: "godwinvictor@gmail.com",
    password: "godwin20",
    picture: `${profile}`
  },
];
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ isError: false, type: "", message: "" });
  const userData = JSON.parse(localStorage.getItem("userData"));
//   console.log(profile);

  if (!userData) {
    localStorage.setItem("userData", JSON.stringify(users));
  }

  const authorizeUsers = userData.find(
    (admin) => admin.email === email && admin.password === password
  );
  console.log(authorizeUsers);

//   localStorage.setItem("email", email);
//   localStorage.setItem("password", password);

  const handleShowpassword = () => {
    setShowPassword(!showPassword);
  };

  const Nav = useNavigate();

  const handleForm = () => {
    if (!authorizeUsers) {
      alert("You haven't signup!");
    } else {
      Nav("/home");
      localStorage.setItem("onlineUser", JSON.stringify(authorizeUsers))
    }
  };


  return (
    <div className="loginHold">
      <div className="loginWrap">
        <h2>THE CURVE' SOCIETY</h2>
        <div className="high">
          <div className="inf">
            {error.isError && error.type === "email" ? (
              <p style={{ color: "red" }}>{error.message}</p>
            ) : null}
          </div>
          <div className="top">
            <MdOutlineContactMail style={{ fontSize: "12px" }} />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="high">
          <div className="inf">
            {error.isError && error.type === "password" ? (
              <p style={{ color: "red", fontSize: "10px" }}>{error.message}</p>
            ) : null}
          </div>
          <div className="midz">
            <RiLockPasswordFill style={{ fontSize: "12px" }} />

            <input
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEye
                onClick={handleShowpassword}
                style={{ fontSize: "12px" }}
              />
            ) : (
              <FaEyeSlash
                onClick={handleShowpassword}
                style={{ fontSize: "12px" }}
              />
            )}
          </div>
        </div>

        <div className="login">
          <button onClick={handleForm}>Login</button>
          <button onClick={() => Nav("/home")}>SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Login;