// import {FcLikePlaceholder} from "react-icons/fc";
import {FcLike} from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import {CiHeart} from "react-icons/ci"
import "./post.css";
import { useNavigate } from "react-router";
import { useState } from "react";


const Post = () =>{

    const nav = useNavigate()

    // const go = () => {
    //     nav ("/home")
    // }

    const post = JSON.parse(localStorage.getItem("Allposts"))
    // console.log(post)
    const whoIsOnline = JSON.parse(localStorage.getItem("onlineUser"))


    const handleLike=(index)=>{
        const updatedPosts = post.map((e, i)=> {
            if (index === i) {
                const findIndex = e.likers.findIndex(
                    (email) => email === whoIsOnline.email
                );
                if (findIndex > -1) {
                    // const updatedLikers = [...e.likers];
                    // updatedLikers.splice(findIndex, 1);
                    // return {
                    //     ...e,
                    //     likers: updatedLikers,
                    // };
                    return e
                } else {
                    return {
                        ...e,
                        likers: [...e.likers, whoIsOnline.email],
                        likecount: e.likecount +1
                    }
                }

            } else {
                return e
            }
        })

        localStorage.setItem("Allposts", JSON.stringify(updatedPosts))
    }


    return(

        <div className="homecontainer">
            <div className="post">
                <div className="postcont">
                    <div className="profile">
                    <img src={whoIsOnline.picture} alt=""/>
                    </div>
                    <h2>{whoIsOnline.Name}</h2>
                    <div className="likes">
                       <div className="fig">13k <br/> Likes</div>
                       <div className="fig">25k <br/> Following</div>
                       <div className="fig">13k <br /> Followers</div> 
                    </div>
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>G TV</li>
                    <li>Stories</li>
                    <li>Settings</li>
                </ul>
                <button onClick={()=> nav("/")}>Log out</button>
                </div>
                <div className="stories">
                   <div className="storywrap">
                   <h1>STORIES</h1>
                    <div className="storyholder">
                        <div className="story">
                            <img src="src/assets/sia.png" alt=""/>
                        </div>
                       

                        <div className="story">
                            <img src="src/assets/sia.png" alt=""/>
                        </div>

                        <div className="story">
                            <img src="src/assets/sia.png" alt=""/>
                        </div>

                        <div className="story">
                            <img src="src/assets/sia.png" alt=""/>
                        </div>

                        <div className="story">
                            <img src="src/assets/sia.png" alt=""/>
                        </div>
                        

                        <div className="story">
                           <img src="src/assets/sia.png" alt=""/>
                        </div>

                    </div>
                    <>
                    <div className="feeds">
                        <h2>FEEDS</h2>
                        {
                            post?.map((e,index)=>(
                                <div className="fedhold">
                            <div className="fedimg">
                                <img src={e.imagePreview} alt="" />

                            </div>
                            <div className="icon">
                                {
                                    e.likers.findIndex(e=> e === whoIsOnline.email) > -1 ? <FcLike onClick={handleLike}/> :  < CiHeart/>
                                }
                                <p>{e.likers.map(index=> index).length}</p>
                                <p><FiSend/> </p>
                              
                               
                                 
                                
                            </div>
                            <p>{e.postText}</p>
                            {/* <p>31k likes</p> */}
                            {/* <span className="spn">5 hours</span> */}

                        </div>
                            ))
                        }

                        {/* <div className="fedhold">
                            <div className="fedimg">
                                <img src="src/assets/sia.png" alt="" />

                            </div>
                            <div className="icon">
                                <FcLike onclick/> 
                                < FaRegComment />
                                 <FiSend/>
                                
                            </div>
                            <p>Comments:</p>
                            <p>31k likes</p>
                            <span className="spn">5 hours</span>

                        </div> */}

                        {/* <div className="fedhold">
                            <div className="fedimg">
                                <img src="src/assets/sia.png" alt="" />

                            </div>
                            <div className="icon">
                                <FcLike/> 
                                < FaRegComment />
                                 <FiSend/>
                                
                            </div>
                            <p>Comments:</p>
                            <p>31k likes</p>
                            <span className="spn">5 hours</span>

                        </div>

                        <div className="fedhold">
                            <div className="fedimg">
                                <img src="src/assets/sia.png" alt="" />

                            </div>
                            <div className="icon">
                                <FcLike onclick/> 
                                < FaRegComment />
                                 <FiSend/>
                                
                            </div>
                            <p>Comments:</p>
                            <p>31k likes</p>
                            <span className="spn">5 hours</span>

                        </div> */}
                        

                        
                    </div>
                    </>
                 
                   </div>
               
                </div>
              
    

            </div>
        </div>
  
    )
}

export default Post


