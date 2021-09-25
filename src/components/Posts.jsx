import axios from "axios";
import React, { useState, useEffect } from "react";
import { NewPost } from ".";
import { getPosts } from "../api";
import EditPost from "./MessageForm";
import { getToken } from "../auth";

const BASE = "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const handleDelete = async (_id) => {
    try {
      const myToken = getToken();

      await axios.delete(`${BASE}/posts/${_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${myToken}`,
        },
      });

      const remainingPosts = posts.filter((e) => {
        if (_id === e._id) {
          return false;
        } else {
          return true;
        }
      });
      setPosts(remainingPosts);
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
      <NewPost posts={posts} setPosts={setPosts} />

      <h1>Posts</h1>
      {posts.length
        ? posts.map((post) => {
            return (
              <div key={post._id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                {post.isAuthor ? (
                  <button onClick={() => handleDelete(post._id)}>Delete</button>
                ) : (
                  <button>Message</button>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Posts;

// shift alt f for prettier
