import axios from "axios";
import React, { useState, useEffect } from "react";
import { getPosts } from "../api";

const BASE = "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState(0);


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("title, description: ", title, description, price);

    try {
      const response = await axios.post(
        `${BASE}/posts`,

        {
          post: {
            title: title,
            description: description,
            price: "1",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQ2NGE4NmEyYThiMjAwMTc2OWE2ODkiLCJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNjMyMTg5ODg0fQ.8NPMlNII7GXTvwOXU7p1Igav86AL_9fys8lVDo1WenU",
          },
        }
      );
      const newPost = response.data.data.post;
      const allPosts = [newPost, ...posts];
      setPosts(allPosts);

      
    } catch (error) {
      console.log(error);
    }
  };

  async function fetchAllPosts() {
    try {
      const { data } = await axios.get(`${BASE}/posts`);

      setPosts(data.data.posts);

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <div className="posts-main-container">
      <h3>Create New Post</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="text"
          placeholder="$$$"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button>Submit</button>
      </form>

      <h1>Posts</h1>
      {posts.length
        ? posts.map((post) => {
            console.log(post);
            return (
              <div key={post._id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Posts;

// shift alt f for prettier
