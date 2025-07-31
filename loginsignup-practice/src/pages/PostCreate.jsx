import React, { useState } from 'react';
import { useUser } from '../constext/UserProvider';
import { useNavigate } from 'react-router-dom';
import { usePost } from '../constext/PostProvider';

const INITIAL_VALUE = {
  title: "",
  body: "",
  author: ""
};

const PostCreate = () => {
  const { user } = useUser(); // Get logged-in user
  const {setPost}= usePost()
  const navigate = useNavigate ();
  const [createPost, setCreatePost] = useState({
    ...INITIAL_VALUE,
    author: `${user?.fname || ""} ${user?.lname || ""}`
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreatePost(prev => ({
      ...prev,
      [name]: value
    }));
    
  };
 const handleSubmit = (e)=>{
  e.preventDefault()
  setPost((prev)=>[...prev, createPost])
  navigate('/post')

 }
  return (
    <>
      <h1> Post Create</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type='text' name='title' onChange={handleChange} value={createPost.title} />
        </div>
        <div>
          <label>Body</label>
          <input type='text' name='body' onChange={handleChange} value={createPost.body} />
        </div>
        <div>
          <label>Author</label>
          <input
            type='text'
            name='author'
            value={createPost.author}
            onChange={handleChange}
            readOnly // Optional: prevent editing
          />
        </div>
        <button>Create</button>
      </form>
    </>
  );
};

export default PostCreate;
