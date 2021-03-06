import React, { useState, useEffect } from "react";
import { BASE } from "../api";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Profile = ({ token, messageTarget, setMessageTarget }) => {
  const [userData, setUserData] = useState([]);
  async function getCurrentUserData(userToken) {
    const header = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    try {
      const { data } = await axios.get(`${BASE}/users/me`, header);
      setUserData(data.data);
      return data.data;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCurrentUserData(token);
  }, []);

  const posts = userData.posts;
  const messages = userData.messages;
  let history = useHistory();

  return (
    <div className="profile_container">
      <h3>Welcome {userData.username}!</h3>
      <div id='grid-container' className="post-history_container">
        <h4>Post History</h4>
        {posts
          ? posts.map((post) => {
              return (
                <div key={post._id} className="post-card">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="message-history_container">
        <h4>Message History</h4>
        {messages
          ? messages.map((message) => {
              return (
                <div key={message._id} className="message-card">
                  <h3>Message from {message.fromUser.username}</h3>
                  <p>{message.content}</p>
                  <p>Original Post title: {message.post.title}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Profile;
