"use client";

import { usePathname } from 'next/navigation';
import Trend from './Trend';
import style from './trendSection.module.css';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { getTrends } from '../_lib/getTrends';
import { Hashtag } from '@/model/HashTag';


export default function TrendSection() {
  const { data: session } = useSession();
  const { data } = useQuery<Hashtag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000, // fresh -> stale 변경되는 기준 시간(milliseconds)
    gcTime: 300 * 1000,
    initialData: () => [], // 초기Data => Reset을 하면 초기Data로 가져온다
    enabled: !!session?.user
  })

  const pathname = usePathname();
  if (pathname === '/explore') return null;
  if (session?.user) {

    return (
      <div className={style.trendBg}>
        <div className={style.trend}>
          <h3>나를 위한 트렌드</h3>
          {data?.map((trend) => <Trend trend={trend} key={trend.tagId} />)}
        </div>
      </div>
    );
  }

  return (
    <div className={style.trendBg}>
      <div className={style.noTrand}>
        트렌드를 가져올 수 없습니다.
      </div>
    </div>
  )
}