import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import Home from './Components/Login/Home/Home'
import Post from './Components/Login/Post/Post'
// import Home from './Components/Login/Home/Home'
// import SignUp from './Components/Login/SignUp/SignUp'
// import Login from './Components/Login/Login'
// import SignUp from './Components/Login/SignUp/SignUp'


const router=createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/post",
    element: <Post/>
  }
])

function App() {
  

  return (
    <RouterProvider router={router} />
  
      
    
  )
}

export default App
