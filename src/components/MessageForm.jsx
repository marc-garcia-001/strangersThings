import React, { useState, useEffect } from "react";
import { getToken } from "../auth";
import axios from "axios";
import { BASE } from "../api";

const MessageForm = ({ messageTarget, postIDforMessage }) => {
	const [messageTitle, setMessageTitle] = useState('');
	const [messageContent, setMessageContent] = useState('');

	async function postMessage(post_ID, content) {
		const myToken = getToken();
		const header = {
			headers: {
				'Content-type': 'application/json',
				'Authorization': `Bearer ${ myToken }`
			}
		}
		const body = {
			message: {
				content: content
			}
		}

		try {
			const {data} = await axios.post(`${ BASE }/posts/${ post_ID }/messages`)
			return data
		} catch (err){
			console.log(err);
		}
	}
 
  return (
    <div className="message-form_container">
      <h3>Message { messageTarget }</h3>
      <form>
        <input 
			type="text" 
			placeholder="Title" 
			value={ messageTitle }
			onChange={(e) =>{
				setMessageTitle(e.target.value);
			}}
		></input>
        <input
			type="text" 
			placeholder="Enter Message"
			value={ messageContent }
			onChange={(e) => {
				setMessageContent(e.target.value);
			}}
		></input>
        <button
			onSubmit={async (e) => {
				postMessage(postIDforMessage, messageContent);
			}}
		>Submit</button>
      </form>
    </div>
  );
};

export default MessageForm;
