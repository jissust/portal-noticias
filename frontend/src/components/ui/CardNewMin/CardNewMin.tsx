import Image from "next/image";
import Link from "next/link";
import { News } from "@/types/news";

type CardNewProps = {
  new: News;
};

export const CardNewMin = ({ new: news }: CardNewProps) => {
  const urlImg = `${process.env.NEXT_PUBLIC_API_URL}${news?.image?.url}`;
  return (
    <Link
      href={`/noticia/${news.slug || ""}`}
      className="
        group
        flex
        overflow-hidden
        bg-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        w-full 
        mb-4
      "
    >
      <div className="relative w-[30%] overflow-hidden">
        <Image
          key={news.id}
          src={urlImg}
          alt={news.title || ""}
          fill
          unoptimized
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="flex flex-col gap-3 p-4 w-[70%]">
        {news.category && (
          <span className="text-sm font-semibold uppercase text-gold">
            {news.category}
          </span>
        )}

        <h2
          className="
            text-md
            font-bold
            leading-tight
            transition-colors
            duration-300
            group-hover:text-gold
          "
        >
          {news.title}
        </h2>

        {news.text && (
          <p className="text-sm line-clamp-3 text-gray-600">
            {news.text}
          </p>
        )}

        {news.date && (
          <span className="mt-auto text-sm text-gray-400">
            {news.date}
          </span>
        )}
      </div>
    </Link>
  );
};