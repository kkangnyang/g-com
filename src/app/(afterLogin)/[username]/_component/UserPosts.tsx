"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Post as IPost } from "@/model/Post";
import Post from "../../_component/Post";
import { getUserPosts } from "../_lib/getUserPosts";

type Props = {
    username: string;
}

export default function UserPosts({ username }: Props) {
    const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, _3: string]>({
        queryKey: ['posts', 'users', username],
        queryFn: getUserPosts,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        gcTime: 300 * 1000,
    })

    const queryClient = useQueryClient();
    const user = queryClient.getQueryData(["users", username]);
    if (user) {
        return data?.map((post) => {
            return <Post key={post.postId} post={post} />
        })
    }
    return null;
}