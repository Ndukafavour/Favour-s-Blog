// import "./Postpage.css"
// import { useState } from "react"
// import { CiHeart } from "react-icons/ci";
// import { FaHeart } from "react-icons/fa";
// import { FaRegCommentDots } from "react-icons/fa6";
// import { FiSend } from "react-icons/fi";
// import { useNavigate } from "react-router-dom";
// // import { Link } from "react-router-dom";

// const Postpage = () => {

//     const nav = useNavigate()

//     const go = () => {
//         nav("/create")
//     }

//     const post = JSON.parse(localStorage.getItem("postDetails"))

//     const [like, setLike] = useState("")
//     const [imageholer, setImageHolder] = useState("")

//     const imagehold = (e) => {
//         const file = e.target.files[0]
//         const url =
//             URL.createObjectURL(file)
//         setImageHolder(url)
//     }

//     const handlelike = () => {
//         setLike(!like)
//     }

//     return (
//         <div className="Postbox">
//             <div className="upbox">
//                 <div className="upboxwrap">
//                     <h1 onClick={go}>Create Post</h1>
//                 </div>
               
//             </div>
//             <h1>THE CURVE'S <span>SOCIALS</span></h1>


//             {
//                 post?.map((e) => (
//                     <div className="pageholder1">
//                         <div className="uppath">
                          
//                             <h1 className="text">Keep The Zeal Going!!!</h1>
//                         </div>

//                         <div className="ImageT1">
//                             <div className="immg1">
//                                 <div className="image1">
//                                     <img src={e.image} alt="profile" />
//                                 </div>
//                                 <input type="file" id="n" onChange={imagehold} hidden />
//                                 {/* <label htmlFor="n">upload Image</label> */}
//                             </div>

//                             <div className="icondiv1">
//                                 <div className="ic">
//                                     {
//                                         like ? <CiHeart style={{ fontSize: "35px" }} onClick={handlelike} /> : <FaHeart style={{ fontSize: "35px", color: "red", cursor: "pointer" }} onClick={handlelike} />
//                                     }
//                                     <FaRegCommentDots style={{ fontSize: "35px" }} />
//                                     <FiSend style={{ fontSize: "35px" }} />
//                                 </div>
//                                 <p>1 Likes</p>

//                                  <p>{e.name}</p>

//                                 <p>{e.comment}</p>




//                              </div>

//                         </div>
//                         {/* <button className="Postbtn">Post</button> */}

//                     </div>
//                 ))
//             }
//         </div>
//     )
// }
// export default Postpage