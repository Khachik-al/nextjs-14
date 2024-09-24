import axios from 'axios'

export const fetchPosts = async () => {
  const {data} = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`);
  return data;
};
