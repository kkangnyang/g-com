"use client";

import { User } from "next-auth";
import { getUsers } from "../_lib/getUsers";
import { useQuery } from "@tanstack/react-query";
import BackButton from "../../_component/BackButton";
import style from '../profile.module.css';

type Props = {
    username: string;
}
export default function UserInfo({ username }: Props) {
    const { data: user, error } = useQuery<User, Object, User, [_1: string, _2: string]>({
        queryKey: ['users', username],
        queryFn: getUsers,
        staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
        gcTime: 300 * 1000,
    })

    console.dir('error :::', error)

    if (error) {
        return (
            <>
                <div className={style.header}>
                    <BackButton />
                    <h3 className={style.headerTitle}>프로필</h3>
                </div>
                <div className={style.userZone}>
                    <div className={style.userImage}>
                    </div>
                    <div className={style.userName}>
                        <div>@{username}</div>
                    </div>
                </div>
                <div style={{
                    height: 100,
                    alignItems: 'center',
                    fontSize: 31,
                    fontWeight: 'bold',
                    justifyContent: 'center',
                    display: 'flex'
                }}>
                    계정이 존재하지 않음
                </div>
            </>
        )
    }

    if (!user) return null;

    return (
        <>
            <div className={style.header}>
                <BackButton />
                <h3 className={style.headerTitle}>{user?.name as string}</h3>
            </div>
            <div className={style.userZone}>
                <div className={style.userImage}>
                    <img src={user?.image as string} alt={user?.id as string} />
                </div>
                <div className={style.userName}>
                    <div>{user?.name as string}</div>
                    <div>@{user?.id as string}</div>
                </div>
                <button className={style.followButton}>팔로우</button>
            </div>
        </>
    )
}