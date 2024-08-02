"use client"

import { User } from "@/model/User"
import { useQuery } from "@tanstack/react-query"
import { getFollowRecommends } from "../_lib/getFollowRecommends"
import FollowRecommend from "./FollowRecommand"

export default function FollowRecommendSection() {
    const { data } = useQuery<User[]>({
        queryKey: ['users', 'followRecommends'],
        queryFn: getFollowRecommends,
        staleTime: 60 * 1000, // fresh -> stale 변경되는 기준 시간(milliseconds)
        gcTime: 300 * 1000,
        initialData: () => [], // 초기Data => Reset을 하면 초기Data로 가져온다
    })

    return data?.map((user) => <FollowRecommend user={user} key={user.id} />)
}