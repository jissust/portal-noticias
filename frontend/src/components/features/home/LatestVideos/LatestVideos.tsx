import { YoutubeVideo } from "@/types/youtube";
import { YoutubeCard } from "@/components/ui/YouTubeCard/YouTubeCard";
import { ButtonLink } from "@/components/ui/buttonLink/ButtonLink";

type Props = {
  videos: YoutubeVideo[];
};

export const LatestVideos = ({ videos }: Props) => {
  return (
    <section id="ultimos-videos" className="w-full py-20 bg-gray-800 scroll-mt-26">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-7xl font-bold flex justify-center pb-10 text-white">Últimos Videos</h1>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <YoutubeCard key={video.id} video={video} />
          ))}
        </div>
        <div className="flex justify-center mt-5">
          <ButtonLink
            href="https://www.youtube.com/@LaCicloneta"
            bgColor="bg-black"
            hoverBgColor="hover:bg-white"
            textColor="text-white"
            hoverTextColor="hover:text-black"
            borderColor="border border-[#000000] border-2"
            hoverBorderColor="hover:border-[#000000] hover:border-2"
            target="_blank"
            eventData={{
              event: "contact_click",
              method: "letter_open",
              location: "home",
            }}
          >
            Ir al canal →
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
