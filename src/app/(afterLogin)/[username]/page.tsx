import BackButton from '../_component/BackButton';
import Post from '../_component/Post';
import style from './profile.module.css';

import { auth } from "@/auth";

export default async function Profile() {
  const data = await auth();
  const user = {
    id: (data?.user) ? data?.user?.email : 'gayoung',
    name: (data?.user) ? data?.user?.name : '가영',
    image: (data?.user) ? data?.user?.image : '/glogo.png',
  }

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user?.name as string}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image as string} alt={user?.id as string} />
        </div>
        <div className={style.userName}>
          <div>{user?.name as string}</div>
          <div>@{user?.id as string}</div>
        </div>
        <button className={style.followButton}
        >팔로우</button>
      </div>
      <div>
        {/* <Post />
        <Post />
        <Post  />
        <Post />
        <Post />
        <Post /> */}
      </div>
    </main>
  );
}
