import axios from 'axios';

export const BASE = 'https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT/'

export async function getPosts(afterUrl) {
  try {
    const response = await axios.get(`${BASE}/${afterUrl}`)
    // console.log(response)
    const data = await response.data;
    return data;
  } catch (err) { 
    console.log(err);
  }
}