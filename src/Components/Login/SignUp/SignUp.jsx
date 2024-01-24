// import React, { useState } from "react";
// // import { useNavigate } from "react-router";

// const SignUp = () => {
// //   const [role, setRole] = useState();
//   const [firstName, setFirstName] = useState();
// //   const [lastName, setLastName] = useState();
//   const [email, setEmail] = useState();
// //   const [phoneNumber, setPhoneNumber] = useState();
//   const [password, setPassword] = useState();
// //   console.log(role);
//   console.log(firstName);
// //   console.log(lastName);
//   console.log(email);
// //   console.log(phoneNumber);
// //   console.log(phoneNumber);
//   const users = JSON.parse(localStorage.getItem("userData")) || [];
//   const nav = useNavigate();
//   const createAccount = () => {
//     const newData = {
//       Name: firstName,
//     //   lastName: lastName,
//       email: email,
//       password: password,
//     //   role: role,
//     };
//     console.log(newData);

//     // const userData=users.concat(newData);
//     const userData = [...users, newData];
//     localStorage.setItem("userData", JSON.stringify(userData));
//     // localStorage.setItem("userData", JSON.stringify(users.concat(newData)));
//     console.log(userData);
//     // console.log(users);
//     nav("/login");
//   };

//   return (
//     <div
//       style={{
//         width: "100%",
//         minHeight: "100vh",
//         maxHeight: "100vh",
//         background: "#fff",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         fontFamily: "poppins",
//       }}
//     >
//       <div
//         style={{
//           width: "40%",
//           minWidth: "600px",
//           height: "max-content",
//           background: "#fff",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           borderRadius: "10px",
//           gap: "20px",
//           paddingBlock: "30px",
//           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//         }}
//       >
//         <h1>SignUp</h1>
//         <div
//           style={{ width: "90%", height: "70px", display: "flex", gap: "20px" }}
//         >
//           <div
//             style={{
//               width: "50%",
//               height: "100%",
//               background: "#fff",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <label
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 fontSize: "20px",
//                 fontWeight: "600",
//               }}
//             >
//               First name <span style={{ color: "blue" }}>*</span>
//             </label>
//             <input
//               type="text"
//               style={{ height: "40px", borderRadius: "5px", outline: "none" }}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>
//           <div
//             style={{
//               width: "50%",
//               height: "100%",
//               background: "#fff",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <label
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 fontSize: "20px",
//                 fontWeight: "600",
//               }}
//             >
//               Last name <span style={{ color: "blue" }}>*</span>
//             </label>
//             <input
//               type="text"
//               style={{ height: "40px", borderRadius: "5px", outline: "none" }}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>
//         </div>
//         <div
//           style={{ width: "90%", height: "70px", display: "flex", gap: "20px" }}
//         >
//           <div
//             style={{
//               width: "50%",
//               height: "100%",
//               background: "#fff",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <label
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 fontSize: "20px",
//                 fontWeight: "600",
//               }}
//             >
//               Email <span style={{ color: "blue" }}>*</span>
//             </label>
//             <input
//               type="email"
//               style={{ height: "40px", borderRadius: "5px", outline: "none" }}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div
//             style={{
//               width: "50%",
//               height: "100%",
//               background: "#fff",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <label
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 fontSize: "20px",
//                 fontWeight: "600",
//               }}
//             >
//               Password <span style={{ color: "blue" }}>*</span>
//             </label>
//             <input
//               type="password"
//               style={{ height: "40px", borderRadius: "5px", outline: "none" }}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </div>
//         <div
//           style={{ width: "90%", height: "70px", display: "flex", gap: "20px" }}
//         >
//           <div
//             style={{
//               width: "50%",
//               height: "100%",
//               background: "#fff",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <label
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 fontSize: "20px",
//                 fontWeight: "600",
//               }}
//             >
//               Phone number <span style={{ color: "blue" }}>*</span>
//             </label>
//             <input
//               type="number"
//               style={{ height: "40px", borderRadius: "5px", outline: "none" }}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//           </div>
//           <div
//             style={{
//               width: "50%",
//               height: "100%",
//               background: "#fff",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <label
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 fontSize: "20px",
//                 fontWeight: "600",
//               }}
//             >
//               Role <span style={{ color: "blue" }}>*</span>
//             </label>
//             {/* <input type="text" style={{height:"40px", borderRadius:"5px"}} /> */}
//             <select
//               name=""
//               id=""
//               style={{ height: "40px", borderRadius: "5px", outline: "none" }}
//               onChange={(e) => setRole(e.target.value)}
//             >
//               <option value="" defaultValue>
//                 --Choose Role--
//               </option>
//               <option value="Pastor">Pastor</option>
//               <option value="Member">Member</option>
//               <option value="Accountant">Accountant</option>
//               <option value="Usher">Usher</option>
//               <option value="Admin">Admin</option>
//             </select>
//           </div>
//         </div>
//         <div
//           style={{
//             width: "90%",
//             height: "45px",
//             background: "blue",
//             borderRadius: "5px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//           onClick={createAccount}
//         >
//           <p style={{ fontSize: "20px", color: "#fff" }}>Create Account</p>
//         </div>
//         <div
//           style={{
//             width: "90%",
//             height: "45px",
//             background: "blue",
//             borderRadius: "5px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//           onClick={() => nav("/home")}
//         >
//           <p style={{ fontSize: "20px", color: "#fff" }}>Login</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;