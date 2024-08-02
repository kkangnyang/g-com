"use client";

import { Hashtag } from "@/model/HashTag";
import { useQuery } from "@tanstack/react-query";
import { getTrends } from "../../_lib/getTrends";
import Trend from "../../_component/Trend";

export default function TrendSection() {
    const { data } = useQuery<Hashtag[]>({
        queryKey: ['trends'],
        queryFn: getTrends,
        staleTime: 60 * 1000, // fresh -> stale 변경되는 기준 시간(milliseconds)
        gcTime: 300 * 1000,
        initialData: () => [], // 초기Data => Reset을 하면 초기Data로 가져온다
    })

    return data?.map((trend) => <Trend trend={trend} key={trend.tagId} />)
}