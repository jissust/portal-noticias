import { Hero } from "@/components/features/home/Hero/Hero";
import { LatestNews } from "@/components/features/home/LatestNews/LatestNews";
import { getLatestNews } from "@/services/news";
import { getFeaturedNews } from "@/services/featured_news";
import { LatestVideos } from "@/components/features/home/LatestVideos/LatestVideos";
import { getLatestVideos } from "@/services/youtube";
import { TeamTracking } from "@/components/features/home/TeamTracking/TeamTracking";
import { SocialNetworksHome } from "@/components/ui/SocialNetworkHome/SocialNetworkHome";

export default async function Home() {
  const getLatestNewsHome = await getLatestNews({featured: false, page: 1, pageSize: 9});
  const featuredNews = await getFeaturedNews();
  const videos = await getLatestVideos(`${process.env.YOUTUBE_CHANNEL_ID}`);

  return (
    <>
      <Hero slides={featuredNews} />
      <LatestNews news={getLatestNewsHome.data.length > 0 ? getLatestNewsHome.data.slice(0, 3) : getLatestNewsHome} />
      <LatestVideos videos={videos}   />
      <TeamTracking />
      <SocialNetworksHome />
    </>
  );
}
