import { useState } from "react"
import "./Home.css"
import { useNavigate } from "react-router";
const Home = () =>{
    const user = JSON.parse(localStorage.getItem("onlineUser"));
    console.log(user.picture)
    const posterPicture = user.picture
    
    const [postText, setPostText] = useState('');
    const [imagefile, setImagefile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);


    
    const handleTextChange = (e) =>{
        setPostText(e.target.value);
    };
    const handleImageChange = (e) =>{
        const file = e.target.files[0];

        if (file) {
            setImagefile(file);
            const reader = new FileReader();
            reader.onloadend = () =>{
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
        } else {
            setImagefile(null);
            setImagePreview(null);
        }
    };



    const Nav = useNavigate();

    const handleSubmit = (e)=>{
     e.preventDefault();

     const myPost= {
        postText,
        imagePreview,
        posterPicture,
        likers: [],
        likecount: 0
        
    }
     const posts = JSON.parse(localStorage.getItem("Allposts")) || []
     const oldData = [...posts, myPost]
     localStorage.setItem('Allposts', JSON.stringify(oldData))
     setPostText('');
     setImagefile(null);
     setImagePreview(null);
     Nav("/post")
    };

   
    return(
    <div className="homepage">
       <div className="homewrap">
        <div className="writeups">
        <h2>The Curve's social </h2>
        <p>Practice, practice, practice, don't relent!!!</p>
        {/* <form onSubmit={handleSubmit}> */}
           <label>
             <h4 className="postdiv">Post Text:</h4>
             <textarea className='postInput' value={postText} onChange={handleTextChange} />
            </label>
            <br />
            <label>
                Upload Image:
                <input type="file" accept="image/*" onChange={handleImageChange}  />
            </label>
            <br />
            {imagePreview && (
                <div>
                     <p>Image Preview:</p>
                     <img className="postImage" src={imagePreview} alt="preview"  />
                </div>
            
            )}
    
            <br />
            <button type="submit" onClick={handleSubmit}>Add Post</button>
        {/* </form> */}
        </div>
        </div>
        </div>



    )
}

export default Home