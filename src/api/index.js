import axios from 'axios';

export const BASE = 'https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT'

export async function registerUser(username, password) {
  const user = {
    user: {
      username: username,
      password: password
    }
  }

  try {
    const { data } = await axios.post(`${ BASE }/users/register`, user);
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function loginUser(username, password) {
  const user = {
    user: {
      username: username,
      password: password
    }
  }

  try {
    const { data } = await axios.post(`${ BASE }/users/login`, user);
    return data;
  } catch (err) {
    console.log(err);
  }
}