import axios from "axios";
import React, { useState, useEffect } from "react";
import { getToken } from "../auth";
import { createNewPost } from "../api";





const BASE = "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT";

const NewPost = ({posts, setPosts}) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("title, description: ", title, description, price);
    const token = getToken();
    try {
      const data = await createNewPost(token, title, description, price, willDeliver);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      
      <form onSubmit={handleSubmit}>
      <h3>Create New Post</h3>
        <input
          id="cnp-title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
        id="cnp-description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          id="cnp-value"
          type="text"
          placeholder="$$$"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default NewPost;
