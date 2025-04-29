import React from "react";
import PostListItem from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const fetchPost = async (pageParam,searchParams) => {
  const searchParamObj = Object.fromEntries([...searchParams])

  console.log(searchParamObj);

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params: { page: pageParam ,limit:10,...searchParamObj},
  });
  return res.data;                                                  
};
const PostList = () => {
  const[searchParams,setSearchParams] = useSearchParams();
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPost(pageParam,searchParams),
    initialPageParam: 0,
    getNextPageParam: (lastPage, Pages) =>
      lastPage.hasMore ? Pages.length + 1 : undefined,
  });

  const allPosts = data?.pages.flatMap((page) => page.posts) || [];

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Something went wrong</p>;
  console.log(data);

  return (
    <InfiniteScroll
      dataLength={allPosts.length} //This is important field to render the next data
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>All posts loaded</b>
        </p>
      }
      
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  );
};

export default PostList;
