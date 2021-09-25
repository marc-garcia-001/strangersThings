import axios from "axios";
import React, { useState, useEffect } from "react";
import { NewPost } from ".";
import { getPosts } from "../api";
import EditPost from "./MessageForm";
import { getToken } from "../auth";

const BASE = "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  function postMatches(post, text) {
    return post.description.includes(text) || post.title.includes(text);
  }

  const filteredPosts = posts.filter((post) => postMatches(post, searchTerm));
  const postsToDisplay = searchTerm.length ? filteredPosts : posts;

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
    const myToken = getToken();
    try {
      const header = {
        headers: {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${ myToken }`
          }
        }
      }
      const { data } = await axios.get(`${BASE}/posts`, header);

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
    <div id="posts-main-container">
      <h1>Posts</h1>
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
        type="text"
        placeholder="Search"
      />
      <div id="create-new-post-container">
        <NewPost posts={posts} setPosts={setPosts} />
      </div>
      <div id="grid-container">
        {postsToDisplay.length
          ? postsToDisplay.map((post, index) => {
              return (
                <div key={post._id} className="post-card">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  {post.isAuthor ? (
                    <button onClick={() => handleDelete(post._id)}>
                      Delete
                    </button>
                  ) : (
                    <button>Message</button>
                  )}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Posts;

// shift alt f for prettier
