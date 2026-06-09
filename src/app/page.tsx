import { Hero } from "@/components/features/home/Hero/Hero";
import { LatestNews } from "@/components/features/home/LatestNews/LatestNews";
import { getLatestNews } from "@/services/news";

export default async function Home() {
  const news = await getLatestNews();
  return (
    <>
      <Hero slides={news.slice(0, 3)} />
      <LatestNews news={news.slice(0, 3)} />
    </>
  
  );
}
