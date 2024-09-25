import axios from 'axios'
import {Post} from "@/types";

export const fetchPosts = async () => {
  const {data} = await axios.get<Post[]>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`);
  return data;
};

export const fetchPost = async (id: string) => {
  const {data} = await axios.get<Post>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/${id}`);
  return data;
};
