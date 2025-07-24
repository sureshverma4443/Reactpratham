
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Users from './components/users'
import UserDetails from './components/userDetail'
import Posts from './components/posts'
import Postdetails from './components/postdetail'

function App() {
  

  return (
    <BrowserRouter>
    <Link to="/users">users</Link>
    
    <Link to="/posts">posts</Link>
    <Routes>
       <Route path="/posts" element={<Posts />} />
       <Route path="/posts/:postid" element={<Postdetails />} />
       
       <Route path="/users" element={<Users />} />
       <Route path="/users/:id" element={<UserDetails/>} />
       
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
