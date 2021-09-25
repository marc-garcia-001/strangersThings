import axios from "axios";
import React, { useState, useEffect } from "react";

const MessageForm = () => {

	return (
		<div>
			<h3>Message User</h3>
			<form>
				<input
				type="text"
				placeholder="Title"
				></input>
				<input
				type="text"
				placeholder="Enter Message"
				></input>
				<button>Submit</button>
			</form>
		</div>
	)
}

export default MessageForm