import Image from "next/image";
import Link from "next/link";
import { News } from "@/types/news";
import { CategoryBadge } from "../CategoryBadge/CategoryBadge";

type CardNewProps = {
  new: News;
};

export const CardNew = ({ new: news }: CardNewProps) => {
  const category = news?.categories?.[0] ?? null;
  const urlImg = `${process.env.NEXT_PUBLIC_API_URL}${news?.image?.url}`;
  const newsUrl = `/noticias/${category?.slug}/${news.slug}`;

  return (
    <article
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-lg
        bg-white
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        w-full sm:w-[320px] lg:w-[360px] 
      "
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Link href={newsUrl}>
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
        </Link>
      </div>

      <div className="flex flex-col gap-3 p-5">
        {category && (
          <span className="text-sm font-semibold uppercase text-gold">
            <CategoryBadge category={category} />
          </span>
        )}
        <Link href={newsUrl}>
          <h2
            className="
            text-xl
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
            <p className="line-clamp-3 text-gray-600">{news.text}</p>
          )}

          {news.date && (
            <span className="mt-auto text-sm text-gray-400">{news.date}</span>
          )}
        </Link>
      </div>
    </article>
  );
};
