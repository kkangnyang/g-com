"use client"

import { useQuery } from "@tanstack/react-query"
import { getPostRecommends } from "../_lib/getPostRecommends"
import Post from "../../_component/Post"
import { Post as IPost } from "@/model/Post"

export default function PostRecommends() {
    const { data } = useQuery<IPost[]>({ 
        queryKey: ['posts', 'recommends'], 
        queryFn: getPostRecommends,
        staleTime: 60 * 1000, // fresh -> stale 변경되는 기준 시간(milliseconds)
        gcTime: 300 * 1000,
        initialData: () => [], // 초기Data => Reset을 하면 초기Data로 가져온다
    })
    return (
        <>
            {   
                data?.map((post) => {
                    return <Post key={post.postId} post={post} />
                })
            }
        </>

    )

}