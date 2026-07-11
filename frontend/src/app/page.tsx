import { Hero } from "@/components/features/home/Hero/Hero";
import { LatestNews } from "@/components/features/home/LatestNews/LatestNews";
import { getNews } from "@/services/news";
import { getFeaturedNews } from "@/services/news";
import { LatestVideos } from "@/components/features/home/LatestVideos/LatestVideos";
import { getLatestVideos } from "@/services/youtube";
import { TeamTracking } from "@/components/features/home/TeamTracking/TeamTracking";
import { SocialNetworksHome } from "@/components/features/home/SocialNetworksHome/SocialNetworksHome";

export default async function Home() {
  const getNewsHome = await getNews({featured: false, page: 1, pageSize: 9});
  const featuredNews = await getFeaturedNews();
  const videos = await getLatestVideos(`${process.env.YOUTUBE_CHANNEL_ID}`);

  return (
    <>
      <Hero slides={featuredNews} />
      <LatestNews news={getNewsHome.data.length > 0 ? getNewsHome.data.slice(0, 3) : getNewsHome} />
      <LatestVideos videos={videos}   />
      <TeamTracking />
      <SocialNetworksHome />
    </>
  );
}
