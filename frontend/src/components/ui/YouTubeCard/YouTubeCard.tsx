import Image from "next/image";
import Link from "next/link";
import { YoutubeVideo } from "@/types/youtube";

type Props = {
  video: YoutubeVideo;
};

export const YoutubeCard = ({ video }: Props) => {
  return (
    <Link
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      className="group bg-white rounded-lg overflow-hidden shadow-md"
    >
      <div className="relative h-52">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          unoptimized
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="font-bold line-clamp-2">
          {video.title}
        </h3>
      </div>
    </Link>
  );
};