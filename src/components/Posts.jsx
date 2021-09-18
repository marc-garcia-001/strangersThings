import axios from "axios";
import React, { useState, useEffect } from "react";
import { getPosts } from "../api";

const BASE = "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT";

const Posts = () => {
  const [posts, setPosts] = useState([]);

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