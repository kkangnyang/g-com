"use client"

import { useSuspenseQuery } from "@tanstack/react-query"
import Post from "../../_component/Post"
import { Post as IPost } from "@/model/Post"
import { getFollowingPosts } from "../_lib/getFollowingPosts"

export default function FollowingPosts() {
    const { data } = useSuspenseQuery<IPost[]>({ 
        queryKey: ['posts', 'followings'], 
        queryFn: getFollowingPosts,
        staleTime: 60 * 1000, // fresh -> stale 변경되는 기준 시간(milliseconds)
        gcTime: 300 * 1000,
        initialData: () => [], // 초기Data => Reset을 하면 초기Data로 가져온다
    })

    console.log('FollowingPosts call')

    return data?.map((post) => {
        return <Post key={post.postId} post={post} />
    })

}