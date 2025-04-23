import React from 'react';
import PostListItem from './PostListItem';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const fetchPost = async () => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
  return res.data;
}
const PostList = () => {
      const {isPending,error,data} = useQuery(
       { queryKey: ['posts'],
        queryFn: () => fetchPost(),}
      );

      if(isPending) return <p>Loading...</p>
      if(error) return <p>Error hai :{error.message}</p>
      console.log(data);
      

  return (
    <div className='flex flex-col gap-12 mb-8 '>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
        <PostListItem/>
    </div>
  )
}

export default PostList