import style from './home.module.css';
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import PostForm from './_component/PostForm';

export default function Home() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
      </TabProvider>
    </main>
  );
}
