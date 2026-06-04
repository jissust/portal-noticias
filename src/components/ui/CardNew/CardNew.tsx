import Image from "next/image";
import Link from "next/link";

export interface NewsItem {
  id?: number;
  src: string;
  href?: string;
  category?: string;
  title?: string;
  text?: string;
  date?: string;
}

type CardNewProps = {
  new: NewsItem;
};

export const CardNew = ({ new: news }: CardNewProps) => {
  return (
    <Link
      href={news.href || "#"}
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
        <Image
          src={news.src}
          alt={news.title || ""}
          fill
          className="
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="flex flex-col gap-3 p-5">
        {news.category && (
          <span className="text-sm font-semibold uppercase text-gold">
            {news.category}
          </span>
        )}

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
          <p className="line-clamp-3 text-gray-600">
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