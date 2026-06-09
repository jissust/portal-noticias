import { Hero } from "@/components/features/home/Hero/Hero";
import { LatestNews } from "@/components/features/home/LatestNews/LatestNews";
import { getLatestNews } from "@/services/news";
import { getFeaturedNews } from "@/services/featured_news";

export default async function Home() {
  const news = await getLatestNews();
  const featuredNews = await getFeaturedNews();

  return (
    <>
      <Hero slides={featuredNews} />
      <LatestNews news={news.slice(0, 3)} />
    </>
  
  );
}
